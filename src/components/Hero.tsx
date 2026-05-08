"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ResumeModal } from "./ResumeModal";

export function Hero() {
  const [resumeOpen, setResumeOpen] = useState(false);
  return (
    <section
      id="top"
      className="mx-auto max-w-6xl px-6 pt-16 pb-20 md:pt-24 md:pb-28"
    >
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-[11px] font-medium uppercase tracking-[0.28em] text-[#737373]"
      >
        Developer · Builder
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.08 }}
        className="mt-5 max-w-3xl text-4xl font-semibold leading-[1.05] tracking-tight text-[#171717] sm:text-5xl md:text-6xl"
      >
        I build real-time apps and tools that solve problems.
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.18 }}
        className="mt-6 max-w-2xl text-base leading-relaxed text-[#525252] md:text-lg"
      >
        CS student at the University of Houston who builds full-stack
        applications, automated trading tools, and multiplayer experiences.
        Passionate about real-time systems, clean UI, and shipping things that
        work.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.28 }}
        className="mt-9 flex flex-wrap items-center gap-3"
      >
        <a
          href="#projects"
          className="inline-flex items-center justify-center rounded-md bg-[#171717] px-5 py-2.5 text-sm font-medium text-[#fafafa] transition-colors hover:bg-[#262626]"
        >
          View projects
        </a>
        <button
          type="button"
          onClick={() => setResumeOpen(true)}
          className="inline-flex cursor-pointer items-center gap-1.5 rounded-md border border-[#e5e5e5] bg-white px-5 py-2.5 text-sm font-medium text-[#171717] transition-colors hover:border-[#a3a3a3]"
        >
          Resume
        </button>
      </motion.div>

      <ResumeModal open={resumeOpen} onClose={() => setResumeOpen(false)} />
    </section>
  );
}
