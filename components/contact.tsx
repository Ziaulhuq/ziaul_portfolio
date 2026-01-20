"use client";
import React from "react";
import SectionHeadings from "./sectionheading";
import { Send } from "lucide-react";
import { motion } from "framer-motion";
import { useActionState } from "react";
import { type FormState, handleFormData } from "@/action/server-action";
import { SquareUserRound } from "lucide-react";
import { Mail } from "lucide-react";
import { MapPinHouse } from "lucide-react";

const Contact = () => {
  const [currentState, formAction, isPending] = useActionState<
    FormState,
    FormData
  >(handleFormData, {});
  return (
    <motion.section
      id="contact"
      className="scroll-mt-28 ml-1 sm:mb-20 mb-8 w-[75%]"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 5,
      }}
    >
      <SectionHeadings>Contact me</SectionHeadings>
      <p className="text-[0.9rem] text-gray-700 text-center mb-6">
        Please do contact me directly{" "}
        <a href="mailto:examplie@gmail.com" className="underline">
          example@gmail.com
        </a>{" "}
        or through this form
      </p>

      <div className="grid grid-cols-1  sm:grid-col-3 md:grid-cols-5 gap-8 justify-around items-start">
        <div className="col-span-2 flex flex-col gap-3 mt-4">
          <motion.div className="mb-5 flex justify-center sm:flex sm:place-content-start">
            <motion.svg
              width="10rem"
              height="10rem"
              viewBox="-2.4 -2.4 28.80 28.80"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              transform="rotate(0)"
              initial={{ rotate: -180 }}
              animate={{ rotate: 0, transition: { duration: 1 } }}
            >
              <g id="SVGRepo_bgCarrier"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <motion.path
                  d="M14.05 6C15.0268 6.19057 15.9244 6.66826 16.6281 7.37194C17.3318 8.07561 17.8095 8.97326 18 9.95M14.05 2C16.0793 2.22544 17.9716 3.13417 19.4163 4.57701C20.8609 6.01984 21.7721 7.91101 22 9.94M18.5 21C9.93959 21 3 14.0604 3 5.5C3 5.11378 3.01413 4.73086 3.04189 4.35173C3.07375 3.91662 3.08968 3.69907 3.2037 3.50103C3.29814 3.33701 3.4655 3.18146 3.63598 3.09925C3.84181 3 4.08188 3 4.56201 3H7.37932C7.78308 3 7.98496 3 8.15802 3.06645C8.31089 3.12515 8.44701 3.22049 8.55442 3.3441C8.67601 3.48403 8.745 3.67376 8.88299 4.05321L10.0491 7.26005C10.2096 7.70153 10.2899 7.92227 10.2763 8.1317C10.2643 8.31637 10.2012 8.49408 10.0942 8.64506C9.97286 8.81628 9.77145 8.93713 9.36863 9.17882L8 10C9.2019 12.6489 11.3501 14.7999 14 16L14.8212 14.6314C15.0629 14.2285 15.1837 14.0271 15.3549 13.9058C15.5059 13.7988 15.6836 13.7357 15.8683 13.7237C16.0777 13.7101 16.2985 13.7904 16.74 13.9509L19.9468 15.117C20.3262 15.255 20.516 15.324 20.6559 15.4456C20.7795 15.553 20.8749 15.6891 20.9335 15.842C21 16.015 21 16.2169 21 16.6207V19.438C21 19.9181 21 20.1582 20.9007 20.364C20.8185 20.5345 20.663 20.7019 20.499 20.7963C20.3009 20.9103 20.0834 20.9262 19.6483 20.9581C19.2691 20.9859 18.8862 21 18.5 21Z"
                  stroke="#000000"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  initial={{ opacity: 0, pathLength: 0 }}
                  whileInView={{
                    opacity: 1,
                    pathLength: 1,
                    transition: {
                      duration: 4,
                      ease: "easeInOut",
                    },
                  }}
                ></motion.path>{" "}
              </g>
            </motion.svg>
          </motion.div>
          <h2 className="flex gap-3 font-bold">
            <span className="text-purple-500">
              <SquareUserRound />
            </span>{" "}
            +6588520107
          </h2>
          <p className="flex gap-3 font-black">
            <span className="text-purple-500">
              <Mail />
            </span>
            <span>ziaulhuqbe@gmail.com</span>
          </p>
          <p className="flex gap-3 font-semibold leading-8">
            <span className="text-purple-500">
              <MapPinHouse />
            </span>
            Blk 31 Telok Blangah Rise,
            <br />
            #10-326, Singapore - 090031
          </p>
        </div>
        <div className="col-span-3 ">
          <form action={formAction} className="flex flex-col mt-10">
            <input
              type="email"
              name="email"
              placeholder="Your email"
              className="h-14 rounded-lg border p-4 border-purple-500 focus:border focus:border-black-10 hover:border hover:border-black-10 outline-black"
              maxLength={500}
              disabled={isPending}
            />
            <textarea
              className="h-52 my-3 rounded-lg border border-purple-500 p-4 outline-black"
              placeholder="Your message"
              name="message"
              maxLength={500}
              disabled={isPending}
            ></textarea>
            <button
              type="submit"
              className="group flex justify-center items-center gap-2 h-[3rem] mx-auto w-[8rem] bg-gradient-to-b from-purple-600 via-sky-600 to-purple-700 text-[0.9rem] text-white hover:bg-gray-950 rounded-full outline-none focus:scale-110 font-bold  hover:scale-110 transition-all active:scale-105 mb-4"
            >
              {isPending ? "submitting" : "submit"}{" "}
              <Send className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
            </button>
          </form>
          {isPending ? (
            <p className="text-center text-md font-semibold">Loading...</p>
          ) : currentState?.success ? (
            <p className="text-center mt-3 text-green-700 font-semibold ">
              {currentState?.message}
            </p>
          ) : (
            currentState.success === false && (
              <p className="text-center text-md mt-3 font-semibold text-red-800">
                failed to send, Email & password cannot be empty
              </p>
            )
          )}
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
