"use client";

// components/program-finder/steps/Step2Field.tsx
import React from "react";
import { Label } from "@/components/ui/label";
import { Book } from "lucide-react";
import { OptionCard } from "../OptionCard";
import { StepHeader } from "../StepHeader";

interface Step2FieldProps {
  selectedValue: string;
  onChange: (value: string) => void;
}

export const Step2Field: React.FC<Step2FieldProps> = ({ selectedValue, onChange }) => {
  const options = [
    { value: "business", label: "Business & Management", desc: "Leadership, finance, marketing", icon: "📊" },
    { value: "engineering", label: "Engineering & Technology", desc: "Innovation and problem-solving", icon: "⚙️" },
    { value: "medicine", label: "Medicine & Health Sciences", desc: "Healthcare and well-being", icon: "🩺" },
    { value: "arts", label: "Arts & Design", desc: "Creativity and expression", icon: "🎨" },
    { value: "sciences", label: "Natural Sciences", desc: "Research and discovery", icon: "🔬" },
    { value: "humanities", label: "Humanities & Social Sciences", desc: "Human experience and society", icon: "📚" }
  ];

  return (
    <div className="space-y-8">
      <StepHeader 
        icon={<Book className="h-8 w-8 text-yellow-500" />}
        title="Field of Interest"
        description="Choose the field that aligns with your career aspirations"
      />
      
      <Label className="text-lg font-medium block mb-2">Which field captures your interest?</Label>
      
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