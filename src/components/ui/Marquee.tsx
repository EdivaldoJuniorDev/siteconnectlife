"use client";

import { Children, type ReactNode } from "react";

type Props = {
  children: ReactNode;
  speed?: "normal" | "slow";
  pauseOnHover?: boolean;
};

export default function Marquee({
  children,
  speed = "normal",
  pauseOnHover = true,
}: Props) {
  const items = Children.toArray(children);
  const animation = speed === "slow" ? "animate-marquee-slow" : "animate-marquee";

  return (
    <div
      className="relative overflow-hidden"
      style={{
        maskImage:
          "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
      }}
    >
      <div
        className={`flex w-max gap-12 ${animation} ${
          pauseOnHover ? "hover:[animation-play-state:paused]" : ""
        }`}
      >
        {[...items, ...items].map((child, i) => (
          <div key={i} className="shrink-0">
            {child}
          </div>
        ))}
      </div>
    </div>
  );
}
