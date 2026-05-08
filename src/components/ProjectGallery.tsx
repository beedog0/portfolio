"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Props = {
  open: boolean;
  onClose: () => void;
  title: string;
  images: string[];
  startIndex?: number;
};

export function ProjectGallery({
  open,
  onClose,
  title,
  images,
  startIndex = 0,
}: Props) {
  const [index, setIndex] = useState(startIndex);

  const next = useCallback(
    () => setIndex((i) => (i + 1) % images.length),
    [images.length]
  );
  const prev = useCallback(
    () => setIndex((i) => (i - 1 + images.length) % images.length),
    [images.length]
  );

  useEffect(() => {
    if (open) setIndex(startIndex);
  }, [open, startIndex]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose, next, prev]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15, ease: "easeOut" }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#171717]/80 px-4 py-8"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label={`${title} gallery`}
        >
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 6 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className="flex h-full max-h-[900px] w-full max-w-5xl flex-col overflow-hidden rounded-[10px] border border-[#e5e5e5] bg-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-[#e5e5e5] px-5 py-3">
              <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-[#737373]">
                {title}
              </p>
              <div className="flex items-center gap-3">
                <span className="text-xs text-[#a3a3a3]">
                  {index + 1} / {images.length}
                </span>
                <button
                  type="button"
                  onClick={onClose}
                  aria-label="Close"
                  className="inline-flex h-7 w-7 cursor-pointer items-center justify-center rounded-md text-[#525252] transition-colors hover:bg-[#f5f5f5] hover:text-[#171717]"
                >
                  <span aria-hidden="true">✕</span>
                </button>
              </div>
            </div>

            <div className="relative flex flex-1 items-center justify-center bg-[#fafafa] p-4">
              <AnimatePresence mode="wait">
                <motion.div
                  key={images[index]}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.15 }}
                  className="relative h-full w-full"
                >
                  <Image
                    src={images[index]}
                    alt={`${title} screenshot ${index + 1}`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 1024px"
                    className="object-contain"
                    priority
                  />
                </motion.div>
              </AnimatePresence>

              {images.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={prev}
                    aria-label="Previous image"
                    className="absolute left-3 top-1/2 inline-flex h-10 w-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-[#e5e5e5] bg-white/90 text-[#525252] backdrop-blur transition-colors hover:border-[#a3a3a3] hover:text-[#171717]"
                  >
                    <span aria-hidden="true">←</span>
                  </button>
                  <button
                    type="button"
                    onClick={next}
                    aria-label="Next image"
                    className="absolute right-3 top-1/2 inline-flex h-10 w-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-[#e5e5e5] bg-white/90 text-[#525252] backdrop-blur transition-colors hover:border-[#a3a3a3] hover:text-[#171717]"
                  >
                    <span aria-hidden="true">→</span>
                  </button>
                </>
              )}
            </div>

            {images.length > 1 && (
              <div className="flex items-center justify-center gap-2 border-t border-[#e5e5e5] py-3">
                {images.map((src, i) => (
                  <button
                    key={src}
                    type="button"
                    onClick={() => setIndex(i)}
                    aria-label={`Go to image ${i + 1}`}
                    className={`h-1.5 cursor-pointer rounded-full transition-all ${
                      i === index
                        ? "w-6 bg-[#171717]"
                        : "w-1.5 bg-[#e5e5e5] hover:bg-[#a3a3a3]"
                    }`}
                  />
                ))}
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
