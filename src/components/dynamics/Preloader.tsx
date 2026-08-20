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
          {/* Animated background gradient */}
          <motion.div
            className="absolute inset-0 opacity-30"
            style={{
              background: "radial-gradient(circle at 50% 50%, #1a3a1a 0%, transparent 70%)",
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Logo container with glow effect */}
          <motion.div
            className="relative z-10"
            initial={{ scale: 0.8, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Glow effect behind logo */}
            <motion.div
              className="absolute inset-0 blur-3xl"
              style={{
                background: "radial-gradient(circle, #22c55e 0%, transparent 70%)",
                transform: "scale(1.5)",
              }}
              animate={{
                opacity: [0.3, 0.6, 0.3],
                scale: [1.5, 1.8, 1.5],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            {/* Logo with pulse animation */}
            <motion.div
              animate={{
                scale: [1, 1.05, 1],
                filter: [
                  "drop-shadow(0 0 20px rgba(34, 197, 94, 0.3))",
                  "drop-shadow(0 0 40px rgba(34, 197, 94, 0.5))",
                  "drop-shadow(0 0 20px rgba(34, 197, 94, 0.3))",
                ],
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
                width={400}
                height={139}
                priority
                className="h-16 w-auto md:h-20 lg:h-24"
                style={{
                  filter: "drop-shadow(0 0 30px rgba(34, 197, 94, 0.4))",
                }}
              />
            </motion.div>
          </motion.div>

          {/* Loading bar */}
          <motion.div
            className="relative z-10 mt-12 w-48 md:w-64"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <div className="h-[2px] w-full overflow-hidden rounded-full bg-white/10">
              <motion.div
                className="h-full bg-gradient-to-r from-[#22c55e] to-[#4ade80]"
                initial={{ width: "0%" }}
                animate={{ width: `${Math.min(progress, 100)}%` }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              />
            </div>

            {/* Loading percentage */}
            <motion.p
              className="mt-4 text-center font-mono text-xs uppercase tracking-[0.3em] text-[#22c55e]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              {Math.min(Math.round(progress), 100)}%
            </motion.p>
          </motion.div>

          {/* Tagline */}
          <motion.p
            className="absolute bottom-16 font-mono text-[10px] uppercase tracking-[0.25em] text-white/40 md:text-xs"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            The Source You Trust. The Quality You Need.
          </motion.p>

          {/* Corner decorations */}
          <motion.div
            className="absolute left-8 top-8 h-16 w-16 border-l-2 border-t-2 border-[#22c55e]/30"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          />
          <motion.div
            className="absolute right-8 top-8 h-16 w-16 border-r-2 border-t-2 border-[#22c55e]/30"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          />
          <motion.div
            className="absolute bottom-8 left-8 h-16 w-16 border-b-2 border-l-2 border-[#22c55e]/30"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          />
          <motion.div
            className="absolute bottom-8 right-8 h-16 w-16 border-b-2 border-r-2 border-[#22c55e]/30"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
