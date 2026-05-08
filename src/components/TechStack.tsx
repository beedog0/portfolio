"use client";

import { motion } from "framer-motion";
import { stackGroups } from "@/data/projects";

export function TechStack() {
  return (
    <section id="stack" className="mx-auto max-w-6xl px-6 py-14 md:py-20">
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-[11px] font-medium uppercase tracking-[0.28em] text-[#737373]"
      >
        Stack
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.05 }}
        className="mt-6 grid grid-cols-1 gap-x-10 gap-y-6 md:grid-cols-3"
      >
        {stackGroups.map(({ label, items }) => (
          <div key={label}>
            <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-[#a3a3a3]">
              {label}
            </p>
            <ul className="mt-3 flex flex-wrap gap-1.5">
              {items.map((item) => (
                <li
                  key={item}
                  className="rounded-[6px] bg-[#f5f5f5] px-2.5 py-1 text-xs font-medium text-[#525252]"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
