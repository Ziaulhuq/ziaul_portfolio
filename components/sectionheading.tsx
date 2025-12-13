import React from "react";

type sectionHeadingProps = { children: React.ReactNode };

const SectionHeadings = ({ children }: sectionHeadingProps) => {
  return (
    <h2 className="font-bold text-lg sm:mt-5 text-center mt-[-40px] mb-2">
      {children}
    </h2>
  );
};

export default SectionHeadings;
