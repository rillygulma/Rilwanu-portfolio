import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Services from "@/components/sections/Services";
import Projects from "@/components/sections/Projects";
import Experience from "@/components/sections/Experience";
import GitHubActivity from "@/components/sections/GitHubActivity";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />

      <About />

      <Skills />

      <Services />

      <Projects />

      <Experience />

      <GitHubActivity />

      <Contact />
    </>
  );
}