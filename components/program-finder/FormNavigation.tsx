"use client";

// components/program-finder/FormNavigation.tsx
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

interface FormNavigationProps {
  currentStep: number;
  totalSteps: number;
  onPrevious: () => void;
  onNext: () => void;
  isNextDisabled: boolean;
  isSubmitting: boolean;
}

export const FormNavigation: React.FC<FormNavigationProps> = ({
  currentStep,
  totalSteps,
  onPrevious,
  onNext,
  isNextDisabled,
  isSubmitting
}) => {
  return (
    <div className="flex justify-between items-center mt-16">
      {currentStep > 1 ? (
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Button
            variant="outline"
            onClick={onPrevious}
            className="flex items-center space-x-2 border-gray-200 hover:bg-gray-50 hover:border-gray-300 transition-all"
            disabled={isSubmitting}
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Previous</span>
          </Button>
        </motion.div>
      ) : (
        <div /> // Empty div for spacing
      )}

      <motion.div
        initial={{ opacity: 0, x: 10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
      >
        <Button
          onClick={onNext}
          className="flex items-center space-x-2 bg-gradient-to-r from-yellow-500 to-amber-500 hover:from-yellow-600 hover:to-amber-600 text-white shadow-md hover:shadow-lg transition-all"
          disabled={isNextDisabled || isSubmitting}
        >
          <span>{currentStep === totalSteps ? "Find Programs" : "Next"}</span>
          <ArrowRight className="h-4 w-4" />
        </Button>
      </motion.div>
    </div>
  );
};