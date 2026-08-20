"use client";

import { useEffect, useRef } from "react";

/**
 * Background video that stays unloaded until the section approaches the
 * viewport, then loads and plays. Keeps the same visual/behavior as an
 * auto-playing video but avoids competing with the LCP on initial load.
 */
export function BgVideo({
  src,
  className,
  opacity = 1,
}: {
  src: string;
  className?: string;
  opacity?: number;
}) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    let started = false;
    let playing = false;

    const play = () => {
      video.preload = "auto";
      video.play().catch(() => {});
    };

    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          if (!started) {
            started = true;
            play();
          } else if (playing) {
            video.play().catch(() => {});
          }
        } else if (playing) {
          video.pause();
        }
      },
      { rootMargin: "300px 0px" }
    );
    io.observe(video);
    video.addEventListener("playing", () => (playing = true));
    video.addEventListener("pause", () => (playing = false));
    return () => io.disconnect();
  }, []);

  return (
    <video
      ref={ref}
      src={src}
      className={className}
      muted
      playsInline
      loop
      preload="none"
      style={opacity !== 1 ? { opacity } : undefined}
    />
  );
}
