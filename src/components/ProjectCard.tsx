"use client";

import { motion } from "framer-motion";
import type { Project } from "@/data/projects";

type Props = {
  project: Project;
  className?: string;
};

export function ProjectCard({ project, className = "" }: Props) {
  return (
    <motion.a
      href={project.href}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5 }}
      className={`group flex flex-col rounded-[10px] border-[0.5px] border-[#e5e5e5] bg-white p-6 transition-colors hover:border-[#a3a3a3] ${className}`}
    >
      {project.featured && (
        <div
          aria-hidden="true"
          className="mb-6 h-44 w-full rounded-[8px] bg-gradient-to-br from-[#f5f5f5] via-[#fafafa] to-[#ededed] md:h-56"
        />
      )}

      <h3 className="text-lg font-semibold tracking-tight text-[#171717]">
        {project.name}
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-[#525252]">
        {project.description}
      </p>

      <div className="mt-5 flex flex-wrap gap-1.5">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-[6px] bg-[#f5f5f5] px-2.5 py-1 text-xs font-medium text-[#525252]"
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.a>
  );
}
