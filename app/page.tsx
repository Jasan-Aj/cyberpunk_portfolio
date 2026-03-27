import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Timeline from "@/components/Timeline";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-background">
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Timeline />
      <Certifications />
      <Contact />

      <footer className="py-8 bg-black border-t border-neon-cyan/30 text-center text-gray-500 font-sans tracking-widest text-sm uppercase">
        <p>SYSTEM initialized. By Sys<span className="text-neon-cyan">.</span>Admin &copy; 2026. All operations logged.</p>
      </footer>
    </main>
  );
}