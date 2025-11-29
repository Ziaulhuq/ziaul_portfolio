"use client";
import { motion } from "framer-motion";

const SectionDivider = () => {
  return (
    <motion.div
      className="w-[1px] z-[999] h-14 my-10 bg-gray-300 rounded-full translate-1/2 hidden sm:block"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.125, duration: 0.4 }}
    ></motion.div>
  );
};

export default SectionDivider;
