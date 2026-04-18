"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

type Line = {
  text: string;
  delay?: number;
  prompt?: "$" | "✓" | "";
  color?: "default" | "green" | "dim";
};

type Props = {
  lines: Line[];
  title?: string;
};

export default function Terminal({ lines, title = "bash" }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [visibleCount, setVisibleCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let mounted = true;
    let idx = 0;
    const tick = () => {
      if (!mounted) return;
      if (idx >= lines.length) return;
      const line = lines[idx];
      const delay = line.delay ?? 420;
      window.setTimeout(() => {
        if (!mounted) return;
        setVisibleCount((c) => c + 1);
        idx += 1;
        tick();
      }, delay);
    };
    tick();
    return () => {
      mounted = false;
    };
  }, [inView, lines]);

  return (
    <div
      ref={ref}
      className="border border-white/10 bg-[#111] font-mono text-[13px] leading-relaxed"
    >
      <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
        <span className="h-2 w-2 rounded-full bg-[#ff5f56]" />
        <span className="h-2 w-2 rounded-full bg-[#ffbd2e]" />
        <span className="h-2 w-2 rounded-full bg-[#27c93f]" />
        <span className="ml-2 text-[11px] text-white/40">{title}</span>
      </div>
      <div className="min-h-[220px] p-5 text-white/80">
        {lines.slice(0, visibleCount).map((line, i) => (
          <div key={i} className="flex gap-2">
            {line.prompt && (
              <span
                className={
                  line.prompt === "✓"
                    ? "text-accent"
                    : "text-white/40"
                }
              >
                {line.prompt}
              </span>
            )}
            <span
              className={
                line.color === "green"
                  ? "text-accent"
                  : line.color === "dim"
                    ? "text-white/40"
                    : ""
              }
            >
              {line.text}
            </span>
          </div>
        ))}
        {visibleCount === lines.length && (
          <span
            aria-hidden
            className="ml-0.5 inline-block h-4 w-2 translate-y-0.5 bg-accent animate-blink"
          />
        )}
      </div>
    </div>
  );
}
