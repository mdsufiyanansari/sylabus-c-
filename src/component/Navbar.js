import React from "react";
import { motion } from "framer-motion";

const topics = [
  "Introduction",
  "Basic Syntax",
  "Data Types",
  "Variables",
  "Operators",
  "Control Flow",
  "Functions",
  "Arrays",
  "Pointers",
  "References",
  "Classes and Objects",
  "Inheritance",
  "Polymorphism",
  "Templates",
  "Standard Library",
  "File I/O",
  "Exception Handling",
];

const generatePdfFileName = (topic) => {
  // Convert topic to a suitable file name format
  return topic.replace(/ /g, "_") + ".pdf";
};

const Navbar = () => {
  return (
    <div className="w-full lg:w-64 overflow-y-auto h-screen bg-gradient-to-tr from-gray-600 to-gray-200 p-2 text-white">
      <div className="p-4 text-xl font-bold">C++ Topics</div>
      <ul>
        {topics.map((topic, index) => (
          <motion.li
            key={index}
            initial={{ y: -200, opacity: 0 }} // Initial animation state
            animate={{ y: 0, opacity: 1 }} // Animation when component mounts
            transition={{ delay: index * 0.1 }} // Staggered delay for each item
            className="p-2 hover:bg-gray-300 rounded-b-2xl font-semibold shadow-md shadow-black text-xl border mt-2 cursor-pointer"
          >
            <a>{topic}</a>
          </motion.li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
