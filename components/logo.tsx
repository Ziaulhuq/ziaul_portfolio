// "use client";

// import React from "react";
// import Image from "next/image";
// import { motion } from "framer-motion";
// import { Icons } from "@/lib/data";

// type iconProps = (typeof Icons)[number];

// const Logo = ({ src, alt, width, height }: iconProps) => {
//   return (
//     <section className="flex px-4 bg-amber-200">
//       <motion.div
//         className="flex items-center gap-2 mb-15 sm:mt-12 sm:mb-4 flex-shrink-0"
//         initial={{
//           x: 0,
//         }}
//         animate={{
//           x: "-100%",
//         }}
//         transition={{
//           repeat: Infinity,
//           ease: "linear",
//           duration: 30,
//         }}
//       >
//         {Icons.map((icons, index) => (
//           <Image
//             key={index}
//             src={icons.src}
//             alt={icons.alt}
//             width={icons.width}
//             height={icons.height}
//             className="md:w-[50px] md:h-[50px]"
//           />
//         ))}
//       </motion.div>
//       <motion.div
//         className="flex items-center gap-2 mb-15 sm:mt-12 sm:mb-4  flex-shrink-0"
//         initial={{
//           x: 0,
//         }}
//         animate={{
//           x: "-100%",
//         }}
//         transition={{
//           repeat: Infinity,
//           ease: "linear",
//           duration: 30,
//         }}
//       >
//         {Icons.map((icons, index) => (
//           <Image
//             key={index}
//             src={icons.src}
//             alt={icons.alt}
//             width={icons.width}
//             height={icons.height}
//             className="md:w-[50px] md:h-[50px]"
//           />
//         ))}
//       </motion.div>
//     </section>
//   );
// };

// export default Logo;
