"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Props = {
  open: boolean;
  onClose: () => void;
};

export function ResumeModal({ open, onClose }: Props) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15, ease: "easeOut" }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#171717]/70 px-4 py-8"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label="Resume preview"
        >
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 6 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className="flex h-full max-h-[900px] w-full max-w-4xl flex-col overflow-hidden rounded-[10px] border border-[#e5e5e5] bg-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-[#e5e5e5] px-5 py-3">
              <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-[#737373]">
                Resume
              </p>
              <div className="flex items-center gap-2">
                <a
                  href="/resume.pdf"
                  download
                  className="inline-flex items-center gap-1.5 rounded-md border border-[#e5e5e5] bg-white px-3 py-1.5 text-xs font-medium text-[#171717] transition-colors hover:border-[#a3a3a3]"
                >
                  Download
                  <span aria-hidden="true">↓</span>
                </a>
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
            <iframe
              src="/resume.pdf#view=FitH"
              title="Resume"
              className="h-full w-full flex-1 bg-[#fafafa]"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
