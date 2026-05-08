"use client";

import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";

const SPANS = [
  "md:col-span-4",
  "md:col-span-2",
  "md:col-span-2",
  "md:col-span-2",
];

export function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-20 md:py-28">
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-[11px] font-medium uppercase tracking-[0.28em] text-[#737373]"
      >
        Featured projects
      </motion.p>

      <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-6">
        {projects.map((project, i) => (
          <ProjectCard
            key={project.name}
            project={project}
            className={SPANS[i] ?? "md:col-span-2"}
          />
        ))}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="flex min-h-[180px] items-center justify-center rounded-[10px] border border-dashed border-[#e5e5e5] p-6 text-sm text-[#a3a3a3] md:col-span-2"
        >
          More coming soon
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mt-12 flex justify-center"
      >
        <a
          href="#stack"
          className="group inline-flex items-center gap-2 text-sm text-[#737373] transition-colors hover:text-[#171717]"
        >
          Stack
          <span
            aria-hidden="true"
            className="transition-transform group-hover:translate-y-0.5"
          >
            ↓
          </span>
        </a>
      </motion.div>
    </section>
  );
}
