"use client";

// components/program-finder/FormStep.tsx
import React, { ReactNode } from "react";
import { motion } from "framer-motion";

interface FormStepProps {
  isActive: boolean;
  children: ReactNode;
}

export const FormStep: React.FC<FormStepProps> = ({ isActive, children }) => {
  return isActive ? (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  ) : null;
};