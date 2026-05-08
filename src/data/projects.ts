export type Project = {
  name: string;
  description: string;
  tags: string[];
  href: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    name: "TypingArena",
    description:
      "Competitive multiplayer typing platform with ranked ELO matchmaking and real-time WebSocket battles.",
    tags: ["Next.js", "TypeScript", "Supabase", "WebSocket"],
    href: "#",
    featured: true,
  },
  {
    name: "Hiking App",
    description:
      "Trail discovery and planning app with real-time weather integration and interactive maps.",
    tags: ["React", "Supabase", "API Integration"],
    href: "#",
  },
  {
    name: "TCE Engine",
    description:
      "Multi-filter signal generation engine for futures trading with automated execution pipeline.",
    tags: ["Pine Script", "TradersPost", "Webhook"],
    href: "#",
  },
  {
    name: "MUKSCAN",
    description:
      "AI-powered Pokemon card grading assistant bot with pricing analysis and investment tools.",
    tags: ["Discord.js", "Gemini API", "OpenCV"],
    href: "#",
  },
];

export const techStack: string[] = [
  "Next.js",
  "TypeScript",
  "React",
  "Tailwind CSS",
  "Supabase",
  "Python",
  "SQL",
  "JavaScript",
  "Pine Script",
  "Node.js",
  "Git",
];
