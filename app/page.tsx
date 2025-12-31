import About from "@/components/about";
import Contact from "@/components/contact";
import Experience from "@/components/experience";
import Intro from "@/components/intro";
import Projects from "@/components/projects";
import SectionDivider from "@/components/section-divider";
import Skill from "@/components/skills";

export default function Home() {
  return (
    <div className="flex gap-2 flex-col justify-center items-center bg-linear-to-bl from-[#fbe2e3] via-blue-100 to-[#dbd7fb] px-2 sm:px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 over">
      <div className="bg-[#fbe2e3] absolute top-[-6rem] right-[11rem] h-[31.25rem] w-[31.25rem] -z-10 rounded-full blur-[10rem] sm:w-[68.75rem]"></div>
      <div className="bg-[#dbd7fb] absolute top-[-1rem] left-[-35rem] h-[31.25rem] w-[50rem] -z-10 rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]"></div>
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
