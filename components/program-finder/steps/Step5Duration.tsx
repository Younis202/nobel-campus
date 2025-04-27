"use client";

// components/program-finder/steps/Step5Duration.tsx
import React from "react";
import { Label } from "@/components/ui/label";
import { Clock } from "lucide-react";
import { OptionCard } from "../OptionCard";
import { StepHeader } from "../StepHeader";

interface Step5DurationProps {
  selectedValue: string;
  onChange: (value: string) => void;
}

export const Step5Duration: React.FC<Step5DurationProps> = ({ selectedValue, onChange }) => {
  const options = [
    { value: "short", label: "1-2 Years", desc: "Fast-track programs", icon: "⚡" },
    { value: "standard", label: "3-4 Years", desc: "Standard duration", icon: "📆" },
    { value: "flexible", label: "Flexible Timing", desc: "Part-time & self-paced", icon: "🕰️" }
  ];

  return (
    <div className="space-y-8">
      <StepHeader 
        icon={<Clock className="h-8 w-8 text-yellow-500" />}
        title="Timeline"
        description="How long would you like your educational journey to be?"
      />
      
      <Label className="text-lg font-medium block mb-2">What's your preferred program duration?</Label>
      
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