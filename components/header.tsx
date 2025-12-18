"use client";

import { links } from "@/lib/data";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import clsx from "clsx";

const Header = () => {
  const [activeSection, setActiveSection] = useState("Home");

  return (
    <header className="z-[99] relative ">
      <motion.div
        className="fixed h-[12rem] left-1/2 w-full -translate-1/2 rounded-none border border-white opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-7 sm:h-[2.8rem] sm:w-[36rem] sm:rounded-full"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      ></motion.div>

      <nav className="flex fixed top-6 left-1/2  h-11 -translate-1/2 sm:top-[1.8rem] sm:h-[initial] sm:py-0">
        <ul className="flex flex-wrap justify-center items-center text-[0.9rem] font-medium text-gray-500  sm:flex-nowrap sm:gap-5">
          {links.map((link) => (
            <motion.li
              key={link.hash}
              className="flex justify-center items-center h-3/4 relative"
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <Link
                className={clsx(
                  "flex items-center justify-center px-3 hover:text-gray-950 transition py-3",
                  { "text-gray-950 ": activeSection === link.name }
                )}
                href={link.hash}
                onClick={() => setActiveSection(link.name)}
              >
                {link.name}
                {link.name === activeSection && (
                  <motion.span
                    className="bg-gray-100 px-1 py-2 rounded-full absolute inset-0 -z-10 transition"
                    layoutId="activeSection"
                    transition={{
                      type: "tween",
                      stiffness: 1,
                      damping: 180,
                    }}
                  ></motion.span>
                )}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
