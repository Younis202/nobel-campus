// components/navigation/TopBar.jsx
import React from "react";
import Link from "next/link";
import { Calendar, MapPin, ArrowRight } from "lucide-react";

const TopBar = () => {
  return (
    <div className="bg-gradient-to-r from-indigo-600 via-blue-600 to-teal-500 text-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-10 text-sm">
          <div className="hidden md:flex items-center space-x-6">
            <div className="flex items-center">
              <Calendar className="h-3.5 w-3.5 mr-1.5" />
              <span>Fall 2025 applications close June 15</span>
            </div>
            <div className="flex items-center">
              <MapPin className="h-3.5 w-3.5 mr-1.5" />
              <span>Study in 45+ countries worldwide</span>
            </div>
          </div>
          <div className="md:hidden text-center w-full">
            <span>Fall 2025 applications close June 15</span>
          </div>
          <Link href="/destinations" className="hidden md:flex items-center font-medium text-xs text-teal-100 hover:text-white transition-colors">
            Explore All Destinations <ArrowRight className="h-3 w-3 ml-1" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TopBar;