"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { brand } from "@/lib/brand";

/** Lightweight preloader - no lottie SSR issues */
export function Preloader() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Show only once per session; starts hidden so it never blocks first paint/LCP
    if (sessionStorage.getItem("dev-intl-preloaded")) return;
    sessionStorage.setItem("dev-intl-preloaded", "1");
    setVisible(true);
    const t = setTimeout(() => setVisible(false), 900);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0f0f0f]"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
          }}
          aria-hidden
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div
              animate={{ scale: [1, 1.03, 1] }}
              transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
            >
              <Image
                src={brand.logo}
                alt=""
                width={800}
                height={800}
                priority
                className="h-10 w-auto md:h-12"
              />
            </motion.div>
          </motion.div>
          <motion.p
            className="absolute bottom-16 font-mono text-[11px] uppercase tracking-[0.22em] text-white/55"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.25 }}
          >
            {brand.name}
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
