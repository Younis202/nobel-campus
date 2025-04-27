"use client";

// components/program-finder/OptionCard.tsx
import React, { ReactNode } from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

interface OptionCardProps {
  value: string;
  label: string;
  description: string;
  icon: ReactNode;
  isSelected: boolean;
  onClick: () => void;
  variant?: "large" | "wide"; // For different card layouts
}

export const OptionCard: React.FC<OptionCardProps> = ({ 
  value, 
  label, 
  description, 
  icon, 
  isSelected, 
  onClick,
  variant = "large"
}) => {
  const isLarge = variant === "large";
  
  // Different animation and layout based on variant
  const containerClasses = isLarge 
    ? "rounded-2xl p-6 cursor-pointer transition-all overflow-hidden"
    : "rounded-2xl p-5 cursor-pointer transition-all";
  
  const hoverAnimation = isLarge
    ? { scale: 1.03, y: -5 }
    : { scale: 1.02, x: 3 };
  
  const contentLayout = isLarge
    ? "relative z-10" // Column layout
    : "relative z-10 flex items-center"; // Row layout
  
  return (
    <motion.div 
      whileHover={hoverAnimation}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      className={`group relative ${containerClasses}
        ${isSelected 
          ? "ring-2 ring-yellow-500 ring-offset-2 shadow-lg" 
          : "border border-gray-200 hover:border-yellow-400/40 hover:shadow-md shadow-sm"}`}
      onClick={onClick}
    >
      {/* Background gradient */}
      <div className={`absolute inset-0 transition-opacity duration-300 
        ${isSelected 
          ? "opacity-100" 
          : "opacity-0 group-hover:opacity-60"} 
        bg-gradient-to-br from-yellow-500/10 via-yellow-500/5 to-amber-100/20`}>
      </div>
      
      {/* Content layout differs based on variant */}
      <div className={contentLayout}>
        {isLarge ? (
          // Large card layout (column)
          <>
            <div className="text-3xl mb-3 transform transition-transform duration-300 group-hover:scale-110">{icon}</div>
            <div className="font-semibold text-lg mb-1">{label}</div>
            <div className="text-sm text-gray-500 transition-colors duration-300 group-hover:text-gray-700">{description}</div>
          </>
        ) : (
          // Wide card layout (row)
          <>
            <div className="text-3xl mr-4 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">{icon}</div>
            <div className="flex-1">
              <div className="font-semibold transition-all duration-300 group-hover:translate-x-1">{label}</div>
              <div className="text-sm text-gray-500 transition-colors duration-300 group-hover:text-gray-700">{description}</div>
            </div>
          </>
        )}
        
        {/* Selection indicator */}
        {isSelected ? (
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="absolute top-4 right-4 w-6 h-6 rounded-full bg-gradient-to-br from-yellow-500 to-amber-500 flex items-center justify-center shadow-sm"
          >
            <CheckCircle2 className="h-4 w-4 text-white" />
          </motion.div>
        ) : (
          <div className="absolute top-4 right-4 w-6 h-6 rounded-full border-2 border-dashed border-gray-200 group-hover:border-yellow-300 transition-colors duration-300"></div>
        )}
        
        {/* Bottom highlight for selected items in large variant */}
        {isLarge && isSelected && (
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-yellow-500 to-amber-500"
          ></motion.div>
        )}
      </div>
    </motion.div>
  );
};