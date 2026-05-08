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
  const [visible, setVisible] = useState(true);
  const [hovered, setHovered] = useState(false);

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

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    const show = (delay: number) => {
      setVisible(true);
      clearTimeout(timeout);
      timeout = setTimeout(() => setVisible(false), delay);
    };
    show(2000);
    const onScroll = () => show(1200);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      clearTimeout(timeout);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const shown = visible || hovered;

  return (
    <nav
      aria-label="Section navigation"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`fixed left-6 top-1/2 z-40 hidden -translate-y-1/2 transition-opacity duration-500 md:block ${
        shown ? "opacity-100" : "opacity-0"
      }`}
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
