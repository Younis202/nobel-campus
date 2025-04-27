"use client";

// components/program-finder/steps/Step3Budget.tsx
import React from "react";
import { Label } from "@/components/ui/label";
import { Wallet } from "lucide-react";
import { OptionCard } from "../OptionCard";
import { StepHeader } from "../StepHeader";

interface Step3BudgetProps {
  selectedValue: string;
  onChange: (value: string) => void;
}

export const Step3Budget: React.FC<Step3BudgetProps> = ({ selectedValue, onChange }) => {
  const options = [
    { value: "budget", label: "Under $15,000", desc: "Budget-friendly options", icon: "💰" },
    { value: "moderate", label: "$15,000 - $30,000", desc: "Mid-range investment", icon: "💵" },
    { value: "premium", label: "Over $30,000", desc: "Premium education", icon: "💎" }
  ];

  return (
    <div className="space-y-8">
      <StepHeader 
        icon={<Wallet className="h-8 w-8 text-yellow-500" />}
        title="Budget Planning"
        description="Let us know your yearly investment capacity for education"
      />
      
      <Label className="text-lg font-medium block mb-2">What's your budget range per year?</Label>
      
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