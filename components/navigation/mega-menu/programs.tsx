"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ChevronRight } from "lucide-react";
import Link from "next/link";
import React from "react";

// Define program data directly in the component since it's not in NavigationData.ts
const programsData = [
  {
    title: "Undergraduate Programs",
    programs: [
      { name: "Bachelor of Science", href: "/programs/undergraduate/science" },
      { name: "Bachelor of Arts", href: "/programs/undergraduate/arts" },
      {
        name: "Bachelor of Engineering",
        href: "/programs/undergraduate/engineering",
      },
      {
        name: "Bachelor of Business",
        href: "/programs/undergraduate/business",
      },
    ],
    viewAllLink: "/programs/undergraduate",
  },
  {
    title: "Graduate Programs",
    programs: [
      { name: "Master of Science", href: "/programs/graduate/science" },
      { name: "Master of Arts", href: "/programs/graduate/arts" },
      { name: "Master of Engineering", href: "/programs/graduate/engineering" },
      { name: "MBA", href: "/programs/graduate/mba" },
    ],
    viewAllLink: "/programs/graduate",
  },
  {
    title: "Special Programs",
    programs: [
      { name: "Summer Courses", href: "/programs/special/summer" },
      { name: "Language Programs", href: "/programs/special/language" },
      { name: "Exchange Programs", href: "/programs/special/exchange" },
      { name: "Research Programs", href: "/programs/special/research" },
    ],
    viewAllLink: "/programs/special",
  },
];

interface ProgramsMegaMenuProps {
  activeDropdown: string | null;
  dropdownRef: React.RefObject<HTMLDivElement>;
  handleMouseEnter: (path: string) => void;
  handleMouseLeave: () => void;
}

const ProgramsMegaMenu: React.FC<ProgramsMegaMenuProps> = ({
  activeDropdown,
  dropdownRef,
  handleMouseEnter,
  handleMouseLeave,
}) => {
  const prefersReducedMotion = useReducedMotion();

  if (activeDropdown !== "/programs") return null;

  // Simplified animation for better performance
  const menuAnimation = {
    initial: { opacity: 0, y: prefersReducedMotion ? 0 : 5 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0 },
    transition: { duration: 0.2, ease: "easeOut" },
  };

  return (
    <motion.div
      ref={dropdownRef}
      initial={menuAnimation.initial}
      animate={menuAnimation.animate}
      exit={menuAnimation.exit}
      transition={menuAnimation.transition}
      onMouseEnter={() => handleMouseEnter("/programs")}
      onMouseLeave={handleMouseLeave}
      className="absolute left-1/2 transform -translate-x-1/2 max-w-4xl w-full bg-white shadow-lg rounded-xl border border-gray-100 z-40 mt-2"
      style={{
        willChange: "opacity, transform",
        transformOrigin: "top center",
      }}
    >
      <div className="grid grid-cols-3 gap-6 p-6">
        {programsData.map((category) => (
          <div key={category.title} className="space-y-4">
            <h3 className="font-bold text-gray-900">{category.title}</h3>
            <ul className="space-y-2">
              {category.programs.map((program) => (
                <li key={program.name}>
                  <Link
                    href={program.href}
                    className="text-sm text-gray-600 hover:text-primary flex items-center"
                  >
                    <span className="mr-1">•</span> {program.name}
                  </Link>
                </li>
              ))}
            </ul>
            {category.viewAllLink && (
              <Link
                href={category.viewAllLink}
                className="text-sm flex items-center text-primary hover:text-primary-dark font-medium"
              >
                View all {category.title.toLowerCase()}
                <ArrowRight className="ml-1 h-3.5 w-3.5" />
              </Link>
            )}
          </div>
        ))}
      </div>

      <div className="bg-gray-50 p-4 rounded-b-xl border-t border-gray-100">
        <Link
          href="/program-finder"
          className="flex items-center justify-between text-sm font-medium text-primary hover:text-primary-dark"
        >
          <span>Not sure what program fits you? Try our Program Finder</span>
          <ChevronRight className="h-4 w-4" />
        </Link>
      </div>
    </motion.div>
  );
};

export default ProgramsMegaMenu;
