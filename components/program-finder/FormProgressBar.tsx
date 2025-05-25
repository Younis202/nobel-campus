"use client";

// components/program-finder/FormProgressBar.tsx
import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

interface FormProgressBarProps {
  currentStep: number;
}

export const FormProgressBar: React.FC<FormProgressBarProps> = ({ currentStep }) => {
  return (
    <div className="flex justify-between items-center mb-10 px-4">
      {[1, 2, 3, 4, 5].map((step) => (
        <div key={step} className="flex flex-col items-center relative">
          <div className="relative">
            <motion.div 
              className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-500
              ${step < currentStep ? "bg-gradient-to-br from-yellow-500 to-amber-500 text-white shadow-md" : 
                step === currentStep ? "bg-white border-2 border-yellow-500 text-yellow-500 shadow-md" : 
                "bg-white border-2 border-gray-200 text-gray-300"}`}
              animate={step === currentStep ? { scale: [1, 1.05, 1] } : {}}
              transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
            >
              {step < currentStep ? (
                <CheckCircle2 className="h-5 w-5" />
              ) : (
                <span className="text-sm font-medium">{step}</span>
              )}
            </motion.div>
            
            {/* Enhanced glow for current step */}
            {step === currentStep && (
              <div className="absolute -inset-2 rounded-full bg-yellow-500/20 blur-md -z-10 animate-pulse"></div>
            )}
          </div>
          
          {/* Progress label */}
          <div className={`mt-2 text-xs font-medium transition-colors duration-300 ${step === currentStep ? 'text-yellow-600' : step < currentStep ? 'text-gray-600' : 'text-gray-400'}`}>
            {step === 1 ? "Level" : 
             step === 2 ? "Field" : 
             step === 3 ? "Budget" : 
             step === 4 ? "Location" : 
             "Duration"}
          </div>
          
          {/* Connecting line with enhanced animation */}
          {step < 5 && (
            <div className="h-0.5 w-32 mt-6 absolute -right-16 top-5">
              <motion.div 
                className={`h-full ${step < currentStep ? "bg-gradient-to-r from-yellow-500 to-amber-500" : "bg-gray-200"}`}
                initial={{ width: step < currentStep ? "100%" : "0%" }}
                animate={{ width: step < currentStep ? "100%" : "0%" }}
                transition={{ duration: 0.5, delay: 0.1 }}
              ></motion.div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};