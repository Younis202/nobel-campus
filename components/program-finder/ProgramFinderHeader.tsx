"use client";

// components/program-finder/ProgramFinderHeader.tsx
import React from "react";
import { FadeIn } from "@/components/animations/fade-in";
import { Sparkles } from "lucide-react";

export const ProgramFinderHeader: React.FC = () => {
  return (
    <FadeIn>
      <div className="text-center max-w-3xl mx-auto mb-20">
        <div className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-gradient-to-r from-yellow-500/20 to-amber-500/20 backdrop-blur-sm mb-6 border border-yellow-200/30">
          <Sparkles className="text-yellow-500 h-4 w-4 mr-2" />
          <span className="text-sm font-medium uppercase tracking-wider text-yellow-600">Begin Your Journey</span>
        </div>
        <h2 className="text-5xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 via-amber-500 to-yellow-500 drop-shadow-sm">
          Discover Your Perfect Program
        </h2>
        <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
          Answer a few questions and let our intelligent matching system find programs 
          tailored perfectly to your educational aspirations and preferences
        </p>
      </div>
    </FadeIn>
  );
};