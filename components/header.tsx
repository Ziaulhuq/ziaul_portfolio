"use client";

import { links } from "@/lib/data";
import { motion } from "framer-motion";
import Link from "next/link";
const Header = () => {
  return (
    <header className="z-[999] relative">
      <motion.div
        className="fixed h-[7rem] left-1/2 w-full -translate-1/2 rounded-none border border-white opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top- sm:h-[2.8rem] sm:w-[36rem] sm:rounded-full"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      ></motion.div>

      <nav className="flex fixed top-7 left-1/2 h-12 -translate-1/2 sm:top-[1.8rem] sm:h-[initial] sm:py-0">
        <ul className="flex flex-wrap justify-center items-center gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5">
          {links.map((link) => (
            <motion.li
              key={link.hash}
              className="flex justify-center items-center h-3/4"
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <Link
                href={link.hash}
                className="flex w-full items-center justify-center px-2 hover:text-gray-950 transition py-1"
              >
                {link.name}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
