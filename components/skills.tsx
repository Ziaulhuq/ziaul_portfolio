import React from "react";
import SectionHeadings from "./sectionheading";
import { skillsData } from "@/lib/data";

const Skill = () => {
  return (
    <div className="max-w-[52rem] text-center mb-28 scroll-mt-28">
      <SectionHeadings>My Skills</SectionHeadings>
      <ul className="flex flex-wrap justify-center gap-2">
        {skillsData.map((skill, index) => (
          <li
            key={index}
            className="rounded-lg px-5 py-3 border border-black/[0.08] bg-white text-gray-800"
          >
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Skill;
