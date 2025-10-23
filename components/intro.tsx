"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const Intro = () => {
  return (
    <section className="mb-28 text-center sm:mb-0">
      <div className="flex items-center justify-center mt-7">
        <div className="mt-23 sm:mt-15 relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              src="/ziaul_pict.jpg"
              alt="ziaul photo"
              width="190"
              height="190"
              quality="95"
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

      <motion.p
        className="mb-10 mt-4 px-4 text-md font-medium leading-[1.6] sm:text-lg"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hello, I'm a ZIA UL HUQ.</span> I'm a{" "}
        <span className="font-bold">full-stack developer</span> <br /> with{" "}
        <span className="font-bold"> 7.5 years</span> of experiencce. I enjoy
        building <span className="italic">websites and apps.</span> My focus is{" "}
        <span className="underline">React (Next js)</span>
      </motion.p>
    </section>
  );
};

export default Intro;
