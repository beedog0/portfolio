"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import type { Project } from "@/data/projects";
import { ProjectGallery } from "./ProjectGallery";

type Props = {
  project: Project;
  className?: string;
};

export function ProjectCard({ project, className = "" }: Props) {
  const [galleryOpen, setGalleryOpen] = useState(false);
  const hasImages = project.images && project.images.length > 0;
  const isPortrait = project.imageOrientation === "portrait";

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5 }}
        className={`group flex flex-col rounded-[10px] border-[0.5px] border-[#e5e5e5] bg-white p-6 transition-colors hover:border-[#a3a3a3] ${className}`}
      >
        {hasImages && isPortrait && (
          <button
            type="button"
            onClick={() => setGalleryOpen(true)}
            aria-label={`View ${project.name} screenshots`}
            className="relative mb-6 flex aspect-[4/3] cursor-pointer items-end justify-center overflow-hidden rounded-[8px] bg-gradient-to-br from-[#0f0f10] via-[#1a1a1c] to-[#262629] pt-6"
          >
            <div className="relative h-[110%] w-auto">
              <div className="relative h-full aspect-[9/19.5] overflow-hidden rounded-t-[1.75rem] border-[3px] border-b-0 border-[#0a0a0a] shadow-[0_20px_60px_rgba(0,0,0,0.6)]">
                <Image
                  src={project.images![0]}
                  alt={`${project.name} preview`}
                  fill
                  sizes="(max-width: 768px) 240px, 320px"
                  className="object-cover object-top"
                  priority={project.featured}
                />
              </div>
            </div>
            <div className="pointer-events-none absolute right-3 top-3 rounded-md bg-white/90 px-2 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-[#525252] opacity-0 backdrop-blur transition-opacity group-hover:opacity-100">
              {project.images!.length} shots
            </div>
          </button>
        )}

        {hasImages && !isPortrait && (
          <button
            type="button"
            onClick={() => setGalleryOpen(true)}
            aria-label={`View ${project.name} screenshots`}
            className="group/preview relative mb-6 aspect-video cursor-pointer overflow-hidden rounded-[8px] bg-gradient-to-br from-[#f5f5f5] via-[#fafafa] to-[#ededed]"
          >
            <Image
              src={project.images![0]}
              alt={`${project.name} preview`}
              fill
              sizes="(max-width: 768px) 100vw, 560px"
              className="object-cover object-top transition-transform duration-500 group-hover/preview:scale-[1.02]"
              priority={project.featured}
            />
            <div className="pointer-events-none absolute right-3 top-3 rounded-md bg-white/90 px-2 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-[#525252] opacity-0 backdrop-blur transition-opacity group-hover/preview:opacity-100">
              {project.images!.length} shots
            </div>
          </button>
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

        {(project.live || project.code) && (
          <div className="mt-5 flex items-center gap-4 border-t border-[#e5e5e5] pt-4 text-xs">
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="group/link inline-flex items-center gap-1 font-medium text-[#171717] transition-colors hover:text-[#525252]"
              >
                Live
                <span
                  aria-hidden="true"
                  className="text-[#a3a3a3] transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
                >
                  ↗
                </span>
              </a>
            )}
            {project.code && (
              <a
                href={project.code}
                target="_blank"
                rel="noopener noreferrer"
                className="group/link inline-flex items-center gap-1 font-medium text-[#525252] transition-colors hover:text-[#171717]"
              >
                Code
                <span
                  aria-hidden="true"
                  className="text-[#a3a3a3] transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
                >
                  ↗
                </span>
              </a>
            )}
          </div>
        )}
      </motion.div>

      {hasImages && (
        <ProjectGallery
          open={galleryOpen}
          onClose={() => setGalleryOpen(false)}
          title={project.name}
          images={project.images!}
        />
      )}
    </>
  );
}
