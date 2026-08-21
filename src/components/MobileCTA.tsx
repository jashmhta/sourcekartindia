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
        {/* WhatsApp */}
        <a
          href="https://wa.me/919324262269"
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-11 w-11 items-center justify-center rounded-full bg-[#25D366]/95 border border-white/15 backdrop-blur-md touch-manipulation transition-transform active:scale-90 shadow-lg shadow-black/40"
          aria-label="Chat on WhatsApp"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="white" aria-hidden>
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
        </a>

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
