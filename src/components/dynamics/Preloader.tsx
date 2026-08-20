"use client";
import { CDN_BASE } from "../../lib/cdn";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if preloader has been shown this session
    const hasShown = sessionStorage.getItem("preloader-shown");
    if (hasShown) {
      setIsLoading(false);
      return;
    }

    // Show preloader for minimum 1.5 seconds
    const timer = setTimeout(() => {
      setIsLoading(false);
      sessionStorage.setItem("preloader-shown", "true");
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#0f1f10]"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="relative"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`${CDN_BASE}/images/brand/logo-white.png`}
              alt="SourceKart"
              className="h-20 w-auto md:h-24 lg:h-28"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
