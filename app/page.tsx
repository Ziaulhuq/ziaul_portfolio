import About from "@/components/about";
import Intro from "@/components/intro";
import SectionDivider from "@/components/section-divider";

export default function Home() {
  return (
    <div className="flex gap-2 flex-col justify-center items-center">
      <Intro />
      <SectionDivider />
      <About />
    </div>
  );
}
