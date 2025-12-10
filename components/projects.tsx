import React from "react";
import SectionHeadings from "./sectionheading";
import { projectsData } from "@/lib/data";
import ProjectList from "./project-list";

const Projects = () => {
  return (
    <section id="projects" className="mt-4 scroll-mt-20">
      <SectionHeadings>My Projects</SectionHeadings>
      {projectsData.map((project, Index) => (
        <React.Fragment key={Index}>
          <ProjectList {...project} />
        </React.Fragment>
      ))}
    </section>
  );
};

export default Projects;
