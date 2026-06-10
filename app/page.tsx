import Hero from "@/components/Hero";
import VelocityMarquee from "@/components/VelocityMarquee";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Footer from "@/components/Footer";
import { heroRoles } from "@/data/content";

export default function Home() {
  return (
    <main>
      <Hero />
      <VelocityMarquee items={heroRoles} />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <VelocityMarquee items={["Open to remote roles", "Fintech", "Startups", "AI Engineering"]} baseVelocity={-3} />
      <Footer />
    </main>
  );
}
