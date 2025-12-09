"use client";
import React from "react";
import { motion } from "framer-motion";
import SectionHeadings from "./sectionheading";

const About = () => {
  return (
    <motion.section
      className="text-center p-6 mt-4 leading-8 max-w-[45rem]"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
    >
      <SectionHeadings>About me</SectionHeadings>
      <p className="text-[15px]">
        After graduating with a degree in{" "}
        <span className="font-bold">Computer Science</span>, I decided to pursue
        my passion for <span className="font-bold">Programming</span>. I
        enrolled in a bootcamp and learned{" "}
        <span className="font-bold italic underline">
          Full-stack web development
        </span>
        . my favourite part of programming is the problem solving aspect. I love
        the feeling of finally figuring out a solution to a problem. My core
        stack is{" "}
        <span className="font-bold text-purple-500 dark:text-sky-300">
          React, Next.js, Node.js and MongoDB
        </span>
        . I am also familiar with{" "}
        <span className="font-bold italic">TypeScript and Prisma</span>. I am
        always looking to learn new technologies. I am currently looking for
        <span className="font-bold"> full-time position</span> as a{" "}
        <span className="font-bold">software developer</span>.
      </p>
      <p>
        When i'm not coding, I enjoy playing video games, watching movies. i
        also enjoy learning new things.
      </p>
    </motion.section>
  );
};

export default About;
