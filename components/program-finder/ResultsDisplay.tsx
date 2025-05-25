"use client";

// components/program-finder/ResultsDisplay.tsx
import React from "react";
import { motion } from "framer-motion";
import { ProgramCard, ProgramType } from "./ProgramCard";
import { Button } from "@/components/ui/button";
import { Sliders, RefreshCw } from "lucide-react";

interface ResultsDisplayProps {
  programs: ProgramType[];
  onReset: () => void;
}

export const ResultsDisplay: React.FC<ResultsDisplayProps> = ({ programs, onReset }) => {
  return (
    <div className="space-y-8">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex justify-between items-center"
      >
        <div>
          <h2 className="text-3xl font-bold mb-2">Your Matched Programs</h2>
          <p className="text-gray-500">We found {programs.length} programs matching your criteria</p>
        </div>
        <div className="flex space-x-4">
          <Button variant="outline" className="flex items-center space-x-2">
            <Sliders className="h-4 w-4" />
            <span>Filter Results</span>
          </Button>
          <Button variant="outline" className="flex items-center space-x-2" onClick={onReset}>
            <RefreshCw className="h-4 w-4" />
            <span>Start Over</span>
          </Button>
        </div>
      </motion.div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {programs.map((program, index) => (
          <ProgramCard key={program.id} program={program} index={index} />
        ))}
      </div>
      
      <div className="flex justify-center">
        <Button variant="outline" className="px-8 py-6 text-lg">
          Load More Programs
        </Button>
      </div>
    </div>
  );
};