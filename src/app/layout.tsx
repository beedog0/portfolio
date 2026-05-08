import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const SITE_TITLE = "Bryan Nguyen — Developer & Builder";
const SITE_DESCRIPTION =
  "CS student at the University of Houston who builds full-stack applications, automated trading tools, and multiplayer experiences.";

export const metadata: Metadata = {
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  metadataBase: new URL("https://bryannguyen.dev"),
  authors: [{ name: "Bryan Nguyen" }],
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    url: "https://bryannguyen.dev",
    siteName: "Bryan Nguyen",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full bg-[#fafafa] text-[#171717] font-sans">
        {children}
      </body>
    </html>
  );
}
