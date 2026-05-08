"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

type Props = {
  target: string;
  label: string;
  direction: "down" | "up";
  className?: string;
};

export function FlowCue({ target, label, direction, className = "" }: Props) {
  const [targetVisible, setTargetVisible] = useState(false);

  useEffect(() => {
    const el = document.querySelector(target);
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => setTargetVisible(entry.isIntersecting),
      { rootMargin: "0px 0px -40% 0px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [target]);

  const arrow = direction === "down" ? "↓" : "↑";
  const arrowHover =
    direction === "down"
      ? "group-hover:translate-y-0.5"
      : "group-hover:-translate-y-0.5";

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: targetVisible ? 0 : 1, y: 0 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      style={{ pointerEvents: targetVisible ? "none" : "auto" }}
      aria-hidden={targetVisible}
      className={`flex justify-center ${className}`}
    >
      <a
        href={target}
        className="group inline-flex items-center gap-2 text-sm text-[#737373] transition-colors hover:text-[#171717]"
      >
        {direction === "down" && label}
        <span
          aria-hidden="true"
          className={`transition-transform ${arrowHover}`}
        >
          {arrow}
        </span>
        {direction === "up" && label}
      </a>
    </motion.div>
  );
}
