"use client";
import React from "react";
import SectionHeadings from "./sectionheading";
import { skillsData } from "@/lib/data";
import { motion } from "framer-motion";

const animationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

const Skill = () => {
  return (
    <section
      className="max-w-[42rem] text-center mb-28 scroll-mt-28"
      id="skills"
    >
      <SectionHeadings>My Skills</SectionHeadings>
      <ul className="flex flex-wrap justify-center mt-8 gap-2">
        {skillsData.map((skill, index) => (
          <motion.li
            key={index}
            variants={animationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}
            className="rounded-lg px-5 py-3 border border-black/[0.08] text-[.9rem] bg-gray-50 text-gray-950 font-semibold"
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default Skill;
