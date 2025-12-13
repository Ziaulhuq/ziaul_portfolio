import React from "react";
import SectionHeadings from "./sectionheading";
import { Send } from "lucide-react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="scroll-mt-28 sm:mb-28 mb-28 w-[min(100%, 38rem)]"
    >
      <SectionHeadings>Contact me</SectionHeadings>
      <p className="text-[0.9rem] text-gray-700">
        Please do contact me directly{" "}
        <a href="mailto:examplie@gmail.com" className="underline">
          example@gmail.com
        </a>{" "}
        or throughh this form
      </p>
      <form className="flex flex-col mt-10">
        <input
          type="email"
          placeholder="Your email"
          className="h-14 rounded-lg border p-4 border-black/10"
        />
        <textarea
          className="h-52 my-3 rounded-lg border border-black/10 p-4"
          placeholder="Your message"
        ></textarea>
        <button
          type="submit"
          className="group flex justify-center items-center gap-2 h-[3rem] w-[8rem] bg-gray-900 text-[0.9rem] text-white hover:bg-gray-950 rounded-full outline-none focus:scale-110 hover:scale-110 transition-all active:scale-105"
        >
          Submit{" "}
          <Send className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
        </button>
      </form>
    </section>
  );
};

export default Contact;
