"use client";

// components/program-finder/StepHeader.tsx
import React, { ReactNode } from "react";

interface StepHeaderProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export const StepHeader: React.FC<StepHeaderProps> = ({ icon, title, description }) => {
  return (
    <div className="mb-10 flex items-center">
      <div className="p-3 rounded-2xl bg-gradient-to-br from-yellow-500/10 to-amber-500/10 mr-5 border border-yellow-200/30 shadow-sm">
        {icon}
      </div>
      <div>
        <h3 className="text-2xl font-bold text-gray-900">{title}</h3>
        <p className="text-gray-500">{description}</p>
      </div>
    </div>
  );
};