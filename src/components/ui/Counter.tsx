"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useMotionValue, animate } from "framer-motion";

type Props = {
  to: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  className?: string;
};

export default function Counter({
  to,
  duration = 1.5,
  suffix = "",
  prefix = "",
  className = "",
}: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const mv = useMotionValue(0);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(mv, to, {
      duration,
      ease: "easeOut",
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return controls.stop;
  }, [inView, to, duration, mv]);

  return (
    <motion.span ref={ref} className={className}>
      {prefix}
      {display}
      {suffix}
    </motion.span>
  );
}
