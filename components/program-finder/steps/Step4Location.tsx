"use client";

// components/program-finder/steps/Step4Location.tsx
import React from "react";
import { Label } from "@/components/ui/label";
import { Globe } from "lucide-react";
import { OptionCard } from "../OptionCard";
import { StepHeader } from "../StepHeader";

interface Step4LocationProps {
  selectedValue: string;
  onChange: (value: string) => void;
}

export const Step4Location: React.FC<Step4LocationProps> = ({ selectedValue, onChange }) => {
  const options = [
    { value: "north-america", label: "North America", desc: "US, Canada, Mexico", icon: "🌎" },
    { value: "europe", label: "Europe", desc: "UK, EU Countries", icon: "🌍" },
    { value: "asia", label: "Asia", desc: "China, Japan, Singapore", icon: "🌏" },
    { value: "australia", label: "Australia & NZ", desc: "Australia, New Zealand", icon: "🏝️" },
    { value: "remote", label: "Remote Learning", desc: "Study from anywhere", icon: "💻" },
    { value: "flexible", label: "Flexible Options", desc: "No location preference", icon: "🌐" }
  ];

  return (
    <div className="space-y-8">
      <StepHeader 
        icon={<Globe className="h-8 w-8 text-yellow-500" />}
        title="Dream Destination"
        description="Where in the world would you like to study?"
      />
      
      <Label className="text-lg font-medium block mb-2">Where would you like to study?</Label>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {options.map((option) => (
          <OptionCard
            key={option.value}
            value={option.value}
            label={option.label}
            description={option.desc}
            icon={option.icon}
            isSelected={selectedValue === option.value}
            onClick={() => onChange(option.value)}
            variant="wide"
          />
        ))}
      </div>
    </div>
  );
};