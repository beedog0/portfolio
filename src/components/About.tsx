"use client";

import { motion } from "framer-motion";
import { stackGroups } from "@/data/projects";

export function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-14 md:py-20">
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-[11px] font-medium uppercase tracking-[0.28em] text-[#737373]"
      >
        About
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.05 }}
        className="mt-6 max-w-3xl space-y-4 text-base leading-relaxed text-[#525252] md:text-lg"
      >
        <p>
          I&apos;m a Computer Information Systems student at the{" "}
          <span className="text-[#171717]">University of Houston</span>{" "}
          (Aug 2022 – May 2027), focused on web development, databases, and
          systems coursework — with electives in software engineering, data
          structures, and applied SQL.
        </p>
        <p>
          Outside of school, I teach piano and run audio/visual production for
          live events. Both shaped how I build software: with patience,
          attention to detail, and a strong instinct for what real users
          actually need under pressure.
        </p>
        <p>
          I love shipping projects that pair clean interfaces with technically
          interesting backends — multiplayer games, automated trading systems,
          and tools people actually use. If it has a real-time loop or a
          satisfying feedback signal, I probably want to build it.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5 }}
        className="mt-12 grid grid-cols-1 gap-x-10 gap-y-6 md:grid-cols-3"
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
