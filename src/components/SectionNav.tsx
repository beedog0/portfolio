"use client";

import { useEffect, useState } from "react";

const sections = [
  { id: "top", label: "Top" },
  { id: "projects", label: "Projects" },
  { id: "stack", label: "Stack" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
];

export function SectionNav() {
  const [activeId, setActiveId] = useState("top");

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveId(id);
        },
        { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <nav
      aria-label="Section navigation"
      className="fixed left-6 top-1/2 z-40 hidden -translate-y-1/2 md:block"
    >
      <ul className="flex flex-col items-start gap-3">
        {sections.map(({ id, label }) => {
          const active = activeId === id;
          return (
            <li key={id}>
              <a
                href={`#${id}`}
                className="group flex items-center gap-3"
                aria-current={active ? "true" : undefined}
                aria-label={`Jump to ${label}`}
              >
                <span
                  className={`block h-1.5 rounded-full transition-all ${
                    active
                      ? "w-6 bg-[#171717]"
                      : "w-1.5 bg-[#d4d4d4] group-hover:bg-[#737373]"
                  }`}
                />
                <span
                  className={`text-[10px] font-medium uppercase tracking-[0.2em] transition-opacity ${
                    active
                      ? "text-[#171717] opacity-100"
                      : "text-[#525252] opacity-0 group-hover:opacity-70"
                  }`}
                >
                  {label}
                </span>
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
