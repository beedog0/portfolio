import { Navbar } from "@/components/Navbar";
import { SectionNav } from "@/components/SectionNav";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { TechStack } from "@/components/TechStack";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <SectionNav />
      <main>
        <Hero />
        <Projects />
        <TechStack />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
