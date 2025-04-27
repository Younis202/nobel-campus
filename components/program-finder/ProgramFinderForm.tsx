"use client";

// components/program-finder/ProgramFinderForm.tsx
import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { FormProgressBar } from "./FormProgressBar";
import { FormStep } from "./FormStep";
import { FormNavigation } from "./FormNavigation";
import { FormProcessing } from "./FormProcessing";
import { Step1Academic } from "./steps/Step1Academic";
import { Step2Field } from "./steps/Step2Field";
import { Step3Budget } from "./steps/Step3Budget";
import { Step4Location } from "./steps/Step4Location";
import { Step5Duration } from "./steps/Step5Duration";

interface ProgramFinderFormProps {
  onComplete: (formData: any) => void;
}

export const ProgramFinderForm: React.FC<ProgramFinderFormProps> = ({ onComplete }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isProcessing, setIsProcessing] = useState(false);
  const [formData, setFormData] = useState({
    academic: "",
    field: "",
    budget: "",
    location: "",
    duration: ""
  });
  
  const totalSteps = 5;
  
  const updateFormData = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };
  
  const goToPreviousStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };
  
  const goToNextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    } else {
      // Submit the form
      setIsProcessing(true);
      // Simulate API call
      setTimeout(() => {
        setIsProcessing(false);
        onComplete(formData);
      }, 3000);
    }
  };
  
  const isNextDisabled = () => {
    if (currentStep === 1) return !formData.academic;
    if (currentStep === 2) return !formData.field;
    if (currentStep === 3) return !formData.budget;
    if (currentStep === 4) return !formData.location;
    if (currentStep === 5) return !formData.duration;
    return false;
  };
  
  if (isProcessing) {
    return <FormProcessing />;
  }
  
  return (
    <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-8">
      <FormProgressBar currentStep={currentStep} />
      
      <AnimatePresence mode="wait">
        <FormStep isActive={currentStep === 1}>
          <Step1Academic
            selectedValue={formData.academic}
            onChange={(value) => updateFormData("academic", value)}
          />
        </FormStep>
        
        <FormStep isActive={currentStep === 2}>
          <Step2Field
            selectedValue={formData.field}
            onChange={(value) => updateFormData("field", value)}
          />
        </FormStep>
        
        <FormStep isActive={currentStep === 3}>
          <Step3Budget
            selectedValue={formData.budget}
            onChange={(value) => updateFormData("budget", value)}
          />
        </FormStep>
        
        <FormStep isActive={currentStep === 4}>
          <Step4Location
            selectedValue={formData.location}
            onChange={(value) => updateFormData("location", value)}
          />
        </FormStep>
        
        <FormStep isActive={currentStep === 5}>
          <Step5Duration
            selectedValue={formData.duration}
            onChange={(value) => updateFormData("duration", value)}
          />
        </FormStep>
      </AnimatePresence>
      
      <FormNavigation
        currentStep={currentStep}
        totalSteps={totalSteps}
        onPrevious={goToPreviousStep}
        onNext={goToNextStep}
        isNextDisabled={isNextDisabled()}
        isSubmitting={isProcessing}
      />
    </div>
  );
};