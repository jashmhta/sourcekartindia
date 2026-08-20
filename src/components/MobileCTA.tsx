"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export function MobileCTA() {
  const [hidden, setHidden] = useState(false);
  const lastScroll = useRef(0);
  const timeout = useRef<ReturnType<typeof window.setTimeout>>(0 as unknown as ReturnType<typeof window.setTimeout>);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const dy = y - lastScroll.current;
      lastScroll.current = y;

      if (y < 60) {
        setHidden(false);
        return;
      }

      if (dy > 3) {
        setHidden(true);
        clearTimeout(timeout.current);
      } else if (dy < -2) {
        setHidden(false);
      } else {
        clearTimeout(timeout.current);
        timeout.current = setTimeout(() => setHidden(false), 120);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      clearTimeout(timeout.current);
    };
  }, []);

  return (
    <nav
      aria-label="Mobile quick actions"
      className="fixed bottom-0 inset-x-0 z-50 md:hidden transition-transform duration-300 ease-out"
      style={{
        transform: hidden ? "translateY(120%)" : "translateY(0)",
        paddingBottom: "env(safe-area-inset-bottom, 0px)",
      }}
    >
      <div className="flex items-center justify-center gap-3 py-2.5">
        {/* Enquire */}
        <Link
          href="/contact"
          className="flex h-11 w-11 items-center justify-center rounded-full bg-black/85 border border-white/15 backdrop-blur-md touch-manipulation transition-transform active:scale-90 shadow-lg shadow-black/40"
          aria-label="Request a quote"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#C6F19D" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            <line x1="9" y1="10" x2="9" y2="10" />
            <line x1="12" y1="10" x2="12" y2="10" />
            <line x1="15" y1="10" x2="15" y2="10" />
            <line x1="9" y1="14" x2="9" y2="14" />
            <line x1="12" y1="14" x2="12" y2="14" />
            <line x1="15" y1="14" x2="15" y2="14" />
          </svg>
        </Link>


      </div>
    </nav>
  );
}
