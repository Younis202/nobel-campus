"use client";

// components/program-finder/steps/Step1Academic.tsx
import React from "react";
import { Label } from "@/components/ui/label";
import { GraduationCap } from "lucide-react";
import { OptionCard } from "../OptionCard";
import { StepHeader } from "../StepHeader";

interface Step1AcademicProps {
  selectedValue: string;
  onChange: (value: string) => void;
}

export const Step1Academic: React.FC<Step1AcademicProps> = ({ selectedValue, onChange }) => {
  const options = [
    { value: "bachelor", label: "Bachelor's Degree", desc: "Undergraduate studies", icon: "🎓" },
    { value: "master", label: "Master's Degree", desc: "Advanced specialization", icon: "📚" },
    { value: "phd", label: "PhD", desc: "Research & academia", icon: "🔬" }
  ];

  return (
    <div className="space-y-8">
      <StepHeader 
        icon={<GraduationCap className="h-8 w-8 text-yellow-500" />}
        title="Academic Level"
        description="Select the academic qualification you wish to pursue"
      />
      
      <Label className="text-lg font-medium block mb-2">What level would you like to pursue?</Label>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {options.map((option) => (
          <OptionCard
            key={option.value}
            value={option.value}
            label={option.label}
            description={option.desc}
            icon={option.icon}
            isSelected={selectedValue === option.value}
            onClick={() => onChange(option.value)}
            variant="large"
          />
        ))}
      </div>
    </div>
  );
};