"use client";

import Image from "next/image";

/**
 * Image wrapper built on next/image (AVIF/WebP, responsive srcset, lazy
 * loading) that preserves the exact visual output of the previous <img> tags.
 */
export function Img({
  src,
  alt = "",
  className = "",
  width,
  height,
  priority = false,
  style,
  fill = false,
  sizes,
  unoptimized = false,
}: {
  src: string;
  alt?: string;
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
  style?: React.CSSProperties;
  fill?: boolean;
  sizes?: string;
  unoptimized?: boolean;
}) {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      style={style}
      fill={fill}
      sizes={sizes}
      priority={priority}
      loading={priority ? "eager" : "lazy"}
      decoding="async"
      draggable={false}
      unoptimized={unoptimized}
    />
  );
}
