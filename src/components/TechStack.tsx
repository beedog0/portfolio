"use client";

import { motion } from "framer-motion";
import { techStack } from "@/data/projects";

export function TechStack() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20 md:py-24">
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-[11px] font-medium uppercase tracking-[0.28em] text-[#737373]"
      >
        Stack
      </motion.p>

      <motion.ul
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.05 }}
        className="mt-6 flex flex-wrap gap-2"
      >
        {techStack.map((item) => (
          <li
            key={item}
            className="rounded-[6px] bg-[#f5f5f5] px-3 py-1.5 text-sm font-medium text-[#525252]"
          >
            {item}
          </li>
        ))}
      </motion.ul>
    </section>
  );
}
