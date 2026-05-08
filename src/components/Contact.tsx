"use client";

import { motion } from "framer-motion";

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
        className="mt-10 divide-y divide-[#e5e5e5] border-y border-[#e5e5e5]"
      >
        {contacts.map(({ label, value, href }) => (
          <li key={label}>
            <a
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="group flex items-center justify-between py-4 transition-colors"
            >
              <span className="text-xs font-medium uppercase tracking-[0.18em] text-[#a3a3a3]">
                {label}
              </span>
              <span className="text-sm font-medium text-[#171717] transition-colors group-hover:text-[#525252] md:text-base">
                {value}{" "}
                <span aria-hidden="true" className="text-[#a3a3a3]">
                  ↗
                </span>
              </span>
            </a>
          </li>
        ))}
      </motion.ul>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mt-12 flex justify-center"
      >
        <a
          href="#top"
          className="group inline-flex items-center gap-2 text-sm text-[#737373] transition-colors hover:text-[#171717]"
        >
          <span
            aria-hidden="true"
            className="transition-transform group-hover:-translate-y-0.5"
          >
            ↑
          </span>
          Back to top
        </a>
      </motion.div>
    </section>
  );
}
