const social = [
  { label: "GitHub", href: "https://github.com/beedog0" },
  { label: "LinkedIn", href: "https://linkedin.com/in/nguyenbryan16" },
  { label: "Email", href: "mailto:nguyenbryan16@gmail.com" },
];

export function Footer() {
  return (
    <footer className="border-t border-[#e5e5e5]">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 px-6 py-8 text-sm text-[#737373] sm:flex-row sm:items-center">
        <p>© 2026 Bryan Nguyen</p>
        <ul className="flex items-center gap-5">
          {social.map(({ label, href }) => (
            <li key={label}>
              <a
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={
                  href.startsWith("http") ? "noopener noreferrer" : undefined
                }
                className="transition-colors hover:text-[#171717]"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
