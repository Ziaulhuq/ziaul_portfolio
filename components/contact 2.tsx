"use client";
import React from "react";
import SectionHeadings from "./sectionheading";
import { Send } from "lucide-react";
import { motion } from "framer-motion";
import { useActionState } from "react";
import { type FormState, handleFormData } from "@/action/server-action";

const Contact = () => {
  const [currentState, formAction, isPending] = useActionState<
    FormState,
    FormData
  >(handleFormData, {});
  return (
    <motion.section
      id="contact"
      className="scroll-mt-28 ml-1 sm:mb-20 mb-8 bg-amber-400 w-[80%]"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
    >
      <SectionHeadings>Contact me</SectionHeadings>
      <p className="text-[0.9rem] text-gray-700 text-center mb-8">
        Please do contact me directly{" "}
        <a href="mailto:examplie@gmail.com" className="underline">
          example@gmail.com
        </a>{" "}
        or throughh this form
      </p>

      <div className="flex flex-col sm:flex-row gap-[30px]">
        <div className="order-2">
          <form action={formAction} className="flex flex-col mt-10">
            <input
              type="email"
              name="email"
              placeholder="Your email"
              className="h-14 rounded-lg border p-4 border-black/10 focus:border focus:border-black-10 hover:border hover:border-black-10 outline-black"
              maxLength={500}
              disabled={isPending}
            />
            <textarea
              className="h-52 my-3 rounded-lg border border-black/10 p-4 outline-black"
              placeholder="Your message"
              name="message"
              maxLength={500}
              disabled={isPending}
            ></textarea>
            <button
              type="submit"
              className="group flex justify-center items-center gap-2 h-[3rem] mx-auto w-[8rem] bg-gray-900 text-[0.9rem] text-white hover:bg-gray-950 rounded-full outline-none focus:scale-110 hover:scale-110 transition-all active:scale-105 mb-4"
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
        <div className="flex-1 flex-col flex items-start md:justify-center order-1 md:order-none ">
          <h2>Contact No : +6588520107</h2>
          <p>Email : ziaulhuqbe@gmail.com</p>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
