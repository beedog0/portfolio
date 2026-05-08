export type Project = {
  name: string;
  description: string;
  tags: string[];
  featured?: boolean;
  images?: string[];
  imageOrientation?: "landscape" | "portrait";
  live?: string;
  code?: string;
};

export const projects: Project[] = [
  {
    name: "TypingArena",
    description:
      "Competitive multiplayer typing platform with ranked ELO matchmaking and real-time WebSocket battles.",
    tags: ["Next.js", "TypeScript", "Supabase", "WebSocket"],
    featured: true,
    imageOrientation: "landscape",
    images: [
      "/projects/typingarena/1.png",
      "/projects/typingarena/2.png",
      "/projects/typingarena/3.png",
      "/projects/typingarena/4.png",
      "/projects/typingarena/5.png",
      "/projects/typingarena/6.png",
    ],
    live: "https://typingarena.us/",
    code: "#",
  },
  {
    name: "Caldera",
    description:
      "Trail discovery and hike-tracking app with live GPS, satellite maps, gear loadouts, and a used-gear marketplace.",
    tags: ["Expo", "React Native", "Supabase", "Mapbox"],
    imageOrientation: "portrait",
    images: [
      "/projects/caldera/4.png",
      "/projects/caldera/1.png",
      "/projects/caldera/2.png",
      "/projects/caldera/3.png",
      "/projects/caldera/5.png",
      "/projects/caldera/6.png",
      "/projects/caldera/7.png",
    ],
    code: "#",
  },
  {
    name: "TCE Engine",
    description:
      "Multi-filter signal generation engine for futures trading with automated execution pipeline.",
    tags: ["Pine Script", "TradersPost", "Webhook"],
    code: "#",
  },
  {
    name: "MUKSCAN",
    description:
      "AI-powered Pokemon card grading assistant bot with pricing analysis and investment tools.",
    tags: ["Discord.js", "Gemini API", "OpenCV"],
    code: "#",
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
