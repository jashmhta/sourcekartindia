"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const FRAME_COUNT = 211;

function framePath(i: number) {
  return `/seq/island/floating-island_${String(i).padStart(5, "0")}.webp`;
}

/** Scroll-scrubbed island image sequence */
export function IslandSequence({
  className = "",
  trigger = "#vision-island-track",
}: {
  className?: string;
  trigger?: string;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
  const images = useRef<(HTMLImageElement | null)[]>([]);
  const [ready, setReady] = useState(false);
  const [nearViewport, setNearViewport] = useState(false);
  const frame = useRef(0);

  const paths = useMemo(
    () => Array.from({ length: FRAME_COUNT }, (_, i) => framePath(i)),
    []
  );

  // Only begin downloading frames when the section is within 1.5 viewports
  useEffect(() => {
    const wrap = wrapRef.current;
    if (!wrap) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setNearViewport(true);
          io.disconnect();
        }
      },
      { rootMargin: "60% 0px" }
    );
    io.observe(wrap);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!nearViewport) return;
    let cancelled = false;
    const imgs: (HTMLImageElement | null)[] = new Array(FRAME_COUNT).fill(null);
    let loaded = 0;

    // Prefer loading every 2nd frame first for faster first paint
    const order = [
      ...Array.from({ length: FRAME_COUNT }, (_, i) => i).filter((i) => i % 2 === 0),
      ...Array.from({ length: FRAME_COUNT }, (_, i) => i).filter((i) => i % 2 === 1),
    ];

    order.forEach((i) => {
      const img = new window.Image();
      img.src = paths[i];
      img.decoding = "async";
      img.onload = () => {
        imgs[i] = img;
        loaded++;
        if (!cancelled && loaded >= 20) setReady(true);
      };
      img.onerror = () => {
        loaded++;
      };
    });
    images.current = imgs;

    return () => {
      cancelled = true;
    };
  }, [paths, nearViewport]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const wrap = wrapRef.current;
    if (!canvas || !wrap || !ready) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const draw = (index: number) => {
      // find nearest loaded frame
      let img = images.current[index];
      if (!img) {
        for (let d = 1; d < 8; d++) {
          img = images.current[index - d] || images.current[index + d];
          if (img) break;
        }
      }
      if (!img) return;
      const w = wrap.clientWidth;
      const h = wrap.clientHeight;
      const ir = img.naturalWidth / img.naturalHeight;
      const cr = w / h;
      let dw = w;
      let dh = h;
      let dx = 0;
      let dy = 0;
      if (ir > cr) {
        dh = h;
        dw = h * ir;
        dx = (w - dw) / 2;
      } else {
        dw = w;
        dh = w / ir;
        dy = (h - dh) / 2;
      }
      ctx.clearRect(0, 0, w, h);
      ctx.drawImage(img, dx, dy, dw, dh);
    };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const w = wrap.clientWidth;
      const h = wrap.clientHeight;
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      draw(frame.current);
    };

    resize();
    window.addEventListener("resize", resize);

    const st = ScrollTrigger.create({
      trigger,
      start: "top bottom",
      end: "bottom top",
      scrub: 0.45,
      onUpdate: (self) => {
        const idx = Math.round(self.progress * (FRAME_COUNT - 1));
        if (idx !== frame.current) {
          frame.current = idx;
          draw(idx);
        }
      },
    });

    draw(0);

    return () => {
      window.removeEventListener("resize", resize);
      st.kill();
    };
  }, [ready, trigger]);

  return (
    <div ref={wrapRef} className={`relative h-full w-full ${className}`}>
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />
      {!ready && <div className="absolute inset-0 bg-alethia-dark" />}
    </div>
  );
}
