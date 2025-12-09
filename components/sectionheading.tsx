import React from "react";

type sectionHeadingProps = { children: React.ReactNode };

const SectionHeadings = ({ children }: sectionHeadingProps) => {
  return (
    <h2 className="font-bold text-lg sm:mt-5 text-center mt-[-40px] mb-5">
      {children}
    </h2>
  );
};

export default SectionHeadings;
