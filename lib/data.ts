import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import jjhandcraft from "@/public/jjhandcraft.png";
import blogapp from "@/public/blogapp.png";
import webbuilts from "@/public/webbuilts.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Web Designer",
    location: "Chennai",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a web designer",
    icon: React.createElement(LuGraduationCap),
    dateofJoining: "2010 to 2012",
  },
  {
    title: "Creative Developer",
    location: "Singapore",
    description:
      "I worked as a Creative developer for 3 years. before that i was only do designing, from this carrier i started to do coding also.",
    icon: React.createElement(CgWorkAlt),
    dateofJoining: "2012 - 2015",
  },
  {
    title: "Front End Developer",
    location: "Singapore",
    description:
      "I worked as a Front end developer for 3.5 years. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    dateofJoining: "2015 - 2019",
  },
  {
    title: "Freelance Developer",
    location: "Singapore",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    dateofJoining: "2023 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Blog-App",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "Next.js", "Tailwind", "Framer Motion"],
    imageUrl: blogapp,
  },
  {
    title: "JJ Handcraft",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "Tailwind", "Prisma"],
    imageUrl: jjhandcraft,
  },
  {
    title: "WebBuilts",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["HTML", "CSS", "Javascript"],
    imageUrl: webbuilts,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "Express",
  "PostgreSQL",
  "Framer Motion",
] as const;
