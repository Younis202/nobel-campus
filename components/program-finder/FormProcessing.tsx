"use client";

// components/program-finder/FormProcessing.tsx (completing the component)
import React from "react";
import { motion } from "framer-motion";
import { Search } from "lucide-react";

export const FormProcessing: React.FC = () => {
  return (
    <div className="min-h-48 flex flex-col items-center justify-center space-y-6 py-12">
      <div className="relative">
        <div className="w-16 h-16 border-4 border-yellow-200 rounded-full"></div>
        <motion.div 
          className="absolute top-0 left-0 w-16 h-16 border-4 border-t-yellow-500 border-r-yellow-500 border-b-transparent border-l-transparent rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <Search className="w-6 h-6 text-yellow-500" />
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-center"
      >
        <h3 className="text-xl font-semibold text-gray-800 mb-2">Finding Your Perfect Match</h3>
        <p className="text-gray-500">Our algorithm is analyzing thousands of programs to find your ideal fit...</p>
      </motion.div>
      
      {/* Progress indicators */}
      <div className="w-full max-w-md mt-6">
        <div className="flex justify-between text-sm text-gray-400 mb-2">
          <span>Analyzing preferences</span>
          <span>Matching programs</span>
        </div>
        <div className="h-1 bg-gray-100 rounded-full overflow-hidden">
          <motion.div 
            className="h-full bg-gradient-to-r from-yellow-400 to-amber-500"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 2.5, repeat: Infinity }}
          />
        </div>
      </div>
    </div>
  );
};