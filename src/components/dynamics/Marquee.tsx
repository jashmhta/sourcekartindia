"use client";

type Props = {
  children: React.ReactNode;
  speed?: number;
  className?: string;
  reverse?: boolean;
};

/** Infinite seamless marquee using duplicated track + CSS animation. */
export function Marquee({
  children,
  speed = 40,
  className = "",
  reverse = false,
}: Props) {
  return (
    <div className={`group relative w-full overflow-hidden ${className}`}>
      <div
        className="flex w-max items-center gap-8"
        style={{
          animation: `dev-marquee ${speed}s linear infinite`,
          animationDirection: reverse ? "reverse" : "normal",
        }}
      >
        <div className="flex shrink-0 items-center gap-8">{children}</div>
        <div className="flex shrink-0 items-center gap-8" aria-hidden>
          {children}
        </div>
      </div>
      <style>{`
        @keyframes dev-marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
