"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { CDN_BASE } from "@/lib/cdn";

/** Premium preloader with SourceKart logo animation */
export function Preloader() {
  const [visible, setVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Show only once per session
    if (sessionStorage.getItem("sourcekart-preloaded")) return;
    sessionStorage.setItem("sourcekart-preloaded", "1");
    setVisible(true);

    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 100);

    // Hide after animation completes
    const t = setTimeout(() => setVisible(false), 1800);
    return () => {
      clearTimeout(t);
      clearInterval(interval);
    };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#0a0f0a]"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
          }}
          aria-hidden
        >
          {/* Logo container */}
          <motion.div
            className="relative z-10"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div
              animate={{
                scale: [1, 1.02, 1],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Image
                src={`${CDN_BASE}/images/brand/logo-transparent.png`}
                alt="SourceKart"
                width={2127}
                height={739}
                priority
                unoptimized
                className="h-20 w-auto md:h-24 lg:h-28"
              />
            </motion.div>
          </motion.div>

          {/* Loading bar */}
          <motion.div
            className="relative z-10 mt-10 w-48 md:w-64"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.4 }}
          >
            <div className="h-[2px] w-full overflow-hidden rounded-full bg-white/10">
              <motion.div
                className="h-full bg-[#22c55e]"
                initial={{ width: "0%" }}
                animate={{ width: `${Math.min(progress, 100)}%` }}
                transition={{ duration: 0.2, ease: "easeOut" }}
              />
            </div>
          </motion.div>

          {/* Tagline */}
          <motion.p
            className="absolute bottom-16 font-mono text-[10px] uppercase tracking-[0.25em] text-white/40 md:text-xs"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            The Source You Trust. The Quality You Need.
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
