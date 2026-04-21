"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ArrowDownToLine } from "lucide-react";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import Typewriter from "typewriter-effect";

const Intro = () => {
  return (
    <section
      id="home"
      className="mb-15 sm:mb-2 flex flex-col justify-around  text-center  transition"
    >
      <div className="flex items-center justify-center mt-7">
        <div className="mt-23 sm:mt-15 relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              delay: 0.1,
              duration: 0.2,
            }}
          >
            <Image
              src="/ziaul_pict.jpg"
              alt="ziaul photo"
              width="190"
              height="190"
              quality="75"
              priority={true}
              className="w-24 h-25 rounded-full object-cover shadow-xl border-[0.35rem] border-white"
            />
          </motion.div>
          <motion.span
            className="text-3xl absolute bottom-0 right-0"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              duration: 0.7,
              stiffness: 125,
              delay: 0.1,
            }}
          >
            👋
          </motion.span>
        </div>
      </div>

      {/* About me  */}

      <motion.div
        className="mb-10 mt-4 text-md font-medium !leading-[1.6] transition"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hello, I'm a ZIA UL HUQ.</span> I'm a{" "}
        <span className="text-2xl font-semibold inline-block bg-gradient-to-r from-purple-400 via-sky-600 to-purple-400 bg-clip-text text-transparent">
          <Typewriter
            options={{
              strings: ["web developer", "UX designer", "Front end developer"],
              autoStart: true,
              loop: true,
              delay: 75,
              deleteSpeed: 50,
            }}
          />
        </span>
        <br />
        with <span className="font-bold"> 7.5 years</span> of experiencce. I
        enjoy building <span className="italic">websites and apps.</span> My
        focus is <span className="underline">React (Next js)</span>
      </motion.div>

      {/*.Buttons... */}
      <motion.div
        className="flex flex-col sm:flex-row sm:flex-wrap items-center justify-center font-medium gap-2 transition"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <Link
          href="#contact"
          className="group bg-gray-900 flex items-center rounded-4xl gap-2 px-7 py-3 text-white text-[0.8rem] outline-none font-medium focus:scale-110 hover:scale-110 cursor-pointer hover:bg-gray-950 active:scale-105 transition"
        >
          Contact me here
          <ArrowRight className="size-4 opacity-70 group-hover:translate-x-1 transition" />
        </Link>
        <a
          className="group bg-white text-gray-700 flex items-center gap-2 px-7 py-3 outline-none focus:scale-110 hover:scale-110 active:scale-110 text-sm rounded-4xl cursor-pointer border border-black/10 transition"
          href="/CV.pdf"
          download
        >
          Download CV{" "}
          <ArrowDownToLine className="group size-4 opacity-70 group-hover:translate-y-1" />
        </a>
        <a
          className="flex items-center p-3 bg-white rounded-full text-gray-700 border border-black/10 outline-none hover:scale-[1.10] active:scale-105 transition"
          href="https://www.linkedin.com/in/ziaul-huq-19014b5a/"
          target="_blank"
        >
          <FaLinkedinIn className="text-[1.2rem] opacity-70 cursor-pointer" />
        </a>
        <a
          className="flex items-center p-3 bg-white rounded-full text-gray-700  border border-black/10 outline-none hover:scale-[1.10] active:scale-105 transition cursor-pointer"
          href="https://github.com/Ziaulhuq"
          target="_blank"
        >
          <FaGithub className="text-[1.2rem] opacity-70" />
        </a>
      </motion.div>
    </section>
  );
};

export default Intro;
