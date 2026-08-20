import Image from "next/image";
import { ScrollHint } from "./ui/Icons";

type Props = {
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  dark?: boolean;
  showScroll?: boolean;
  bgImage?: string;
  children?: React.ReactNode;
};

export function PageHero({
  eyebrow,
  title,
  subtitle,
  dark = true,
  showScroll = false,
  bgImage,
  children,
}: Props) {
  const isDark = bgImage ? true : dark;
  return (
    <section
      className={`relative min-h-[70vh] overflow-hidden pt-28 ${
        isDark ? "bg-alethia-dark text-alethia-cream" : "bg-alethia-cream text-alethia-dark"
      }`}
    >
      {bgImage && (
        <div className="pointer-events-none absolute inset-0 select-none" aria-hidden>
          <Image
            src={bgImage}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0f1f10]/95 via-[#0f1f10]/75 to-[#0f1f10]/40" />
          <div className="absolute inset-x-0 bottom-0 h-[35%] bg-gradient-to-t from-[#0f1f10] to-transparent" />
        </div>
      )}
      <div className="site-container relative z-10 flex min-h-[calc(70vh-5rem)] flex-col justify-center pb-16 pt-10">
        {eyebrow && (
          <p
            className={`eyebrow mb-6 ${
              isDark ? "text-alethia-lime" : "text-alethia-dark/50"
            }`}
          >
            {eyebrow}
          </p>
        )}
        <h1 className="display-xl max-w-5xl">{title}</h1>
        {subtitle && (
          <div
            className={`body-lg mt-8 max-w-2xl ${
              isDark ? "text-white/70" : "text-alethia-dark/70"
            }`}
          >
            {subtitle}
          </div>
        )}
        {children}
        {showScroll && (
          <a
            href="#content"
            className={`mt-16 inline-flex items-center gap-2 self-start font-mono text-[11px] uppercase tracking-[0.1em] ${
              isDark ? "text-white/55" : "text-alethia-dark/50"
            }`}
          >
            <ScrollHint className="h-4 w-4" />
            Scroll to discover
          </a>
        )}
      </div>
    </section>
  );
}
