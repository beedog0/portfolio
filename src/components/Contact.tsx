"use client";

import { motion } from "framer-motion";
import { FlowCue } from "./FlowCue";

const contacts = [
  {
    label: "Email",
    value: "nguyenbryan16@gmail.com",
    href: "mailto:nguyenbryan16@gmail.com",
  },
  {
    label: "GitHub",
    value: "github.com/beedog0",
    href: "https://github.com/beedog0",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/nguyenbryan16",
    href: "https://linkedin.com/in/nguyenbryan16",
  },
];

export function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-20 md:py-28">
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-[11px] font-medium uppercase tracking-[0.28em] text-[#737373]"
      >
        Contact
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.05 }}
        className="mt-5 max-w-2xl text-3xl font-semibold tracking-tight text-[#171717] md:text-4xl"
      >
        Let&apos;s connect.
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="mt-4 max-w-xl text-base leading-relaxed text-[#525252]"
      >
        Open to internship opportunities, collaboration on side projects, and a
        good conversation about real-time systems or trading infrastructure.
      </motion.p>

      <motion.ul
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.18 }}
        className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3"
      >
        {contacts.map(({ label, value, href }) => (
          <li key={label}>
            <a
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="group flex h-full flex-col rounded-[10px] border-[0.5px] border-[#e5e5e5] bg-white p-5 transition-colors hover:border-[#a3a3a3]"
            >
              <div className="flex items-start justify-between">
                <span className="text-[11px] font-medium uppercase tracking-[0.28em] text-[#737373]">
                  {label}
                </span>
                <span
                  aria-hidden="true"
                  className="text-[#a3a3a3] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                >
                  ↗
                </span>
              </div>
              <p className="mt-8 break-all text-sm font-medium text-[#171717] md:text-base">
                {value}
              </p>
            </a>
          </li>
        ))}
      </motion.ul>

      <FlowCue target="#top" label="Back to top" direction="up" className="mt-24" />
    </section>
  );
}
