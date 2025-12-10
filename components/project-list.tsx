"use client";

import React, { useRef } from "react";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import { useScroll, motion, useTransform } from "framer-motion";

type projectProps = (typeof projectsData)[number];

const ProjectList = ({ title, description, tags, imageUrl }: projectProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.5, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.5, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
      }}
      className="mb-4 sm:mb-6 last:mb-0 group"
    >
      <section className="max-w-[42rem] bg-gray-100 border border-black/5 flex relative overflow-hidden  sm:h-[20rem] sm:pr-8 group-even:pl-8 rounded-lg hover:bg-gray-200 transition">
        <div className="flex flex-col h-full pt-4 pb-8 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-1/2 group-even:ml-[18rem]">
          <h3 className="text-xl font-semibold">{title}</h3>
          <p className="mt-2 text-[0.9rem] leading-relaxed sm:pr-8 text-gray-700">
            {description}
          </p>
          <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
            {tags.map((tag, index) => (
              <li
                key={index}
                className="bg-black/[0.7] text-[0.6rem] px-3 py-2 uppercase rounded-full text-white tracking-wider"
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>

        <Image
          src={imageUrl}
          alt="project i worked on"
          width={200}
          height={200}
          priority
          className="absolute top-8 -right-40 w-[28.25rem] shadow-2xl rounded-t-lg 
    group-hover:scale-[1.04]

    group-hover:translate-x-3
    group-hover:translate-y-3
    group-hover:-rotate-2

    group-even:group-hover:translate-x-3
    group-even:group-hover:translate-y-3
    group-even:group-hover:rotate-2
    
    group-even:right-[initial] 
    group-even:-left-40
    transition"
        />
      </section>
    </motion.div>
  );
};

export default ProjectList;
