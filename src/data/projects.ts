export type Project = {
  name: string;
  description: string;
  tags: string[];
  featured?: boolean;
  images?: string[];
  galleryOnly?: boolean;
  live?: string;
  code?: string;
};

export const projects: Project[] = [
  {
    name: "TypingArena",
    description:
      "Competitive multiplayer typing with ranked ELO matchmaking, real-time WebSocket duels, and per-keystroke verification to keep the leaderboard honest.",
    tags: ["Next.js", "TypeScript", "Supabase", "WebSocket"],
    featured: true,
    galleryOnly: true,
    images: [
      "/projects/typingarena/1.png",
      "/projects/typingarena/2.png",
      "/projects/typingarena/3.png",
      "/projects/typingarena/4.png",
      "/projects/typingarena/5.png",
      "/projects/typingarena/6.png",
    ],
    live: "https://typingarena.us/",
    code: "https://github.com/beedog0/typingarena",
  },
  {
    name: "Caldera",
    description:
      "iOS hiking companion: live GPS hike tracking, trail discovery on street and satellite maps, gear loadouts, and a peer-to-peer used-gear marketplace.",
    tags: ["Expo", "React Native", "Supabase", "Mapbox"],
    galleryOnly: true,
    images: [
      "/projects/caldera/8.png",
      "/projects/caldera/4.png",
      "/projects/caldera/1.png",
      "/projects/caldera/2.png",
      "/projects/caldera/3.png",
      "/projects/caldera/5.png",
      "/projects/caldera/6.png",
      "/projects/caldera/7.png",
    ],
    code: "https://github.com/beedog0/caldera",
  },
  {
    name: "TCE Engine",
    description:
      "Composable Pine Script signal engine for futures trading. Chains technical filters and dispatches webhook orders to TradersPost for hands-off execution.",
    tags: ["Pine Script", "TradersPost", "Webhook"],
  },
  {
    name: "MUKSCAN",
    description:
      "Discord bot that estimates Pokémon card grades from a single photo via Gemini vision and OpenCV preprocessing, with live market pricing.",
    tags: ["Discord.js", "Gemini API", "OpenCV"],
    code: "https://github.com/beedog0/mukscan",
  },
];

export type StackGroup = { label: string; items: string[] };

export const stackGroups: StackGroup[] = [
  {
    label: "Languages",
    items: ["TypeScript", "JavaScript", "Python", "SQL", "Pine Script"],
  },
  {
    label: "Frameworks",
    items: ["Next.js", "React", "React Native", "Expo", "Tailwind CSS"],
  },
  {
    label: "Tools & Services",
    items: ["Node.js", "Supabase", "WebSocket", "Mapbox", "Git"],
  },
];
