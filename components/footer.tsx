import React from "react";

const Footer = () => {
  return (
    <footer className="mb-10 pb-7 px-5 ml-10 text-center text-gray-500">
      <small className="mb-2">&copy; 2024 Ziaul. All rights reserved.</small>
      <p className="text-xs mt-2">
        <span className="font-semibold">About this website:</span> built with
        React & Next.js (App Router & server Actions), TypeScript, Tailwind CSS,
        Framer Motion, React Email & Resend, Vercel hosting.
      </p>
    </footer>
  );
};

export default Footer;
