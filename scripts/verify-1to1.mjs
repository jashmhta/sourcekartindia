#!/usr/bin/env node
/**
 * Gating verification for 1:1 Alethia replica.
 * Drives the real Next.js entry (production build + next start) and HTTP routes.
 * Usage: node scripts/verify-1to1.mjs [--port 3010] [--out /path/to/scratch]
 */
import { spawn } from "node:child_process";
import { createWriteStream, mkdirSync, writeFileSync, existsSync } from "node:fs";
import { join } from "node:path";
import { setTimeout as sleep } from "node:timers/promises";

const ROOT = new URL("..", import.meta.url).pathname;
const PORT = Number(
  process.argv.includes("--port")
    ? process.argv[process.argv.indexOf("--port") + 1]
    : process.env.PORT || 3010
);
const OUT =
  process.argv.includes("--out")
    ? process.argv[process.argv.indexOf("--out") + 1]
    : join(ROOT, ".verify-out");

mkdirSync(OUT, { recursive: true });

const logPath = join(OUT, "launch.log");
const routesPath = join(OUT, "routes.txt");
const logStream = createWriteStream(logPath, { flags: "w" });

function log(line) {
  const s = typeof line === "string" ? line : String(line);
  process.stdout.write(s + "\n");
  logStream.write(s + "\n");
}

function run(cmd, args, opts = {}) {
  return new Promise((resolve, reject) => {
    const child = spawn(cmd, args, {
      cwd: ROOT,
      env: { ...process.env, ...opts.env },
      stdio: ["ignore", "pipe", "pipe"],
    });
    let out = "";
    child.stdout.on("data", (d) => {
      out += d;
      logStream.write(d);
    });
    child.stderr.on("data", (d) => {
      out += d;
      logStream.write(d);
    });
    child.on("error", reject);
    child.on("close", (code) => resolve({ code, out }));
  });
}

async function fetchText(url) {
  const res = await fetch(url);
  const text = await res.text();
  return { status: res.status, text };
}

async function waitForServer(url, attempts = 40) {
  for (let i = 0; i < attempts; i++) {
    try {
      const r = await fetch(url);
      if (r.ok || r.status < 500) return true;
    } catch {
      /* retry */
    }
    await sleep(500);
  }
  return false;
}

const PRIMARY = [
  "/",
  "/contact",
  "/our-company",
  "/solutions/nature-based",
  "/solutions/supply-chain",
  "/our-tech/amrv",
  "/our-tech/blockchain",
];

const EXTRA = [
  "/privacy-policy",
  "/terms-of-use",
  "/resources/case-studies",
  "/resources/news-and-media",
];

async function main() {
  log(`ROOT=${ROOT}`);
  log(`OUT=${OUT}`);
  log(`PORT=${PORT}`);

  log("== npm run build ==");
  const build = await run("npm", ["run", "build"]);
  if (build.code !== 0) {
    log(`BUILD_FAIL code=${build.code}`);
    process.exit(1);
  }
  log("BUILD_OK");

  log("== npm start ==");
  const server = spawn("npm", ["run", "start", "--", "-p", String(PORT)], {
    cwd: ROOT,
    env: { ...process.env, PORT: String(PORT) },
    stdio: ["ignore", "pipe", "pipe"],
  });
  server.stdout.on("data", (d) => logStream.write(d));
  server.stderr.on("data", (d) => logStream.write(d));

  const base = `http://127.0.0.1:${PORT}`;
  const up = await waitForServer(base);
  if (!up) {
    log("SERVER_FAIL: did not become ready");
    server.kill("SIGTERM");
    process.exit(1);
  }
  log("SERVER_READY");

  const failures = [];

  // Dual homepage GET — headline lines may be split by <br/> in SSR HTML
  const hasHeroHeadline = (html) =>
    /Where Ecosystem/i.test(html) &&
    /Science and Enterprise/i.test(html) &&
    /Strategy Meet/i.test(html);

  for (let i = 1; i <= 2; i++) {
    const { status, text } = await fetchText(base + "/");
    const hasHeadline = hasHeroHeadline(text);
    const hasCta = /Let.?s Talk/i.test(text) || /LET.?S TALK/i.test(text);
    log(
      `HOME_GET_${i} status=${status} headline=${hasHeadline} cta=${hasCta} bytes=${text.length}`
    );
    if (status !== 200 || !hasHeadline || !hasCta || text.length < 500) {
      failures.push(`homepage get ${i}`);
    }
  }

  // Routes matrix
  const routeLines = [];
  for (const path of [...PRIMARY, ...EXTRA]) {
    const { status, text } = await fetchText(base + path);
    const ok = status === 200 && text.length > 200;
    routeLines.push(`${status} ${path} bytes=${text.length}`);
    log(`ROUTE ${status} ${path} bytes=${text.length}`);
    if (!ok) failures.push(`route ${path} -> ${status}`);
  }
  writeFileSync(routesPath, routeLines.join("\n") + "\n");

  // Structural markers in homepage HTML (shipped entry)
  const home = await fetchText(base + "/");
  const markers = {
    solutions: /nature-based|supply.chain|Validating What the Ecosystem/i.test(
      home.text
    ),
    tech: /Scientific Rigor|Atmospheric-Based MRV|Our Technology/i.test(
      home.text
    ),
    footerCta: /Turn Climate Data Into Business Results/i.test(home.text),
    nav: /Solutions|Our Tech|Resources|Company/i.test(home.text),
  };
  log(`MARKERS ${JSON.stringify(markers)}`);
  for (const [k, v] of Object.entries(markers)) {
    if (!v) failures.push(`marker ${k}`);
  }

  // Asset presence (static)
  const assets = [
    "public/images/hero-plate-desktop.png",
    "public/images/hero-plate-mobile.png",
    "src/app/page.tsx",
    "src/components/home/Hero.tsx",
    "src/components/Header.tsx",
  ];
  for (const a of assets) {
    const p = join(ROOT, a);
    const ok = existsSync(p);
    log(`ASSET ${ok ? "ok" : "MISSING"} ${a}`);
    if (!ok) failures.push(`asset ${a}`);
  }

  server.kill("SIGTERM");
  await sleep(500);
  try {
    server.kill("SIGKILL");
  } catch {
    /* ignore */
  }

  if (failures.length) {
    log(`VERIFY_FAIL ${failures.join("; ")}`);
    process.exit(1);
  }
  log("VERIFY_OK");
  process.exit(0);
}

main().catch((e) => {
  log(String(e?.stack || e));
  process.exit(1);
});
