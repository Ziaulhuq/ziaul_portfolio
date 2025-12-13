import About from "@/components/about";
import Contact from "@/components/contact";
import Experience from "@/components/experience";
import Intro from "@/components/intro";
import Projects from "@/components/projects";
import SectionDivider from "@/components/section-divider";
import Skill from "@/components/skills";

export default function Home() {
  return (
    <div className="flex gap-2 flex-col justify-center items-center">
      <Intro />
      <SectionDivider />
      <About />
      <Projects />
      <Skill />
      <Experience />
      <Contact />
    </div>
  );
}
