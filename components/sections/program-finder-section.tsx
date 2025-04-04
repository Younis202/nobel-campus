"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FadeIn } from "@/components/animations/fade-in";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  GraduationCap,
  Book, 
  Wallet, 
  Globe, 
  Clock,
  Sparkles,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Star,
  Trophy,
  Search,
  LightbulbIcon,
  BarChart
} from "lucide-react";

export function ProgramFinderSection() {
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState({
    studyLevel: "",
    fieldOfStudy: "",
    budget: "",
    location: "",
    duration: ""
  });
  const [isAnimating, setIsAnimating] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [processingAnimation, setProcessingAnimation] = useState(false);

  const handleNext = () => {
    if (step < 5) {
      setIsAnimating(true);
      setTimeout(() => {
        setStep(step + 1);
        setIsAnimating(false);
      }, 300);
    }
  };

  const handlePrevious = () => {
    if (step > 1) {
      setIsAnimating(true);
      setTimeout(() => {
        setStep(step - 1);
        setIsAnimating(false);
      }, 300);
    }
  };

const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  setProcessingAnimation(true);
  
  // Simulate processing time
  setTimeout(() => {
    setProcessingAnimation(false);
    setFormSubmitted(true);
    console.log(answers);
  }, 2000);
};

  const isStepComplete = () => {
    switch (step) {
      case 1: return answers.studyLevel !== "";
      case 2: return answers.fieldOfStudy !== "";
      case 3: return answers.budget !== "";
      case 4: return answers.location !== "";
      case 5: return answers.duration !== "";
      default: return false;
    }
  };

  const getCurrentIcon = () => {
    switch (step) {
      case 1: return <GraduationCap className="h-8 w-8 text-yellow-500" />;
      case 2: return <Book className="h-8 w-8 text-yellow-500" />;
      case 3: return <Wallet className="h-8 w-8 text-yellow-500" />;
      case 4: return <Globe className="h-8 w-8 text-yellow-500" />;
      case 5: return <Clock className="h-8 w-8 text-yellow-500" />;
      default: return null;
    }
  };

  const getStepTitle = () => {
    switch (step) {
      case 1: return "Academic Level";
      case 2: return "Field of Interest";
      case 3: return "Budget Planning";
      case 4: return "Dream Destination";
      case 5: return "Timeline";
      default: return "";
    }
  };

  const getStepDescription = () => {
    switch (step) {
      case 1: return "Select the academic qualification you wish to pursue";
      case 2: return "Choose the field that aligns with your career aspirations";
      case 3: return "Let us know your yearly investment capacity for education";
      case 4: return "Where in the world would you like to study?";
      case 5: return "How long would you like your educational journey to be?";
      default: return "";
    }
  };

  const testimonials = [
    {
      text: "This tool helped me find the perfect master's program that matched all my needs. Highly recommended!",
      author: "Sarah J., Current MBA Student",
      rating: 5,
      avatar: "👩🏽‍🎓"
    },
    {
      text: "I found my dream program in Australia within minutes. The matching system is incredibly accurate!",
      author: "Mark T., Engineering Student",
      rating: 5,
      avatar: "👨🏻‍🎓"
    },
    {
      text: "As an international student, this tool saved me countless hours of research. Simply fantastic!",
      author: "Elena R., PhD Candidate",
      rating: 5,
      avatar: "👩🏼‍🎓"
    }
  ];
  
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonialIndex((prev) => (prev + 1) % testimonials.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-32 relative overflow-hidden bg-gradient-to-b from-white via-yellow-50/30 to-white">
      {/* Enhanced natural texture background */}
      <div className="absolute inset-0 bg-[radial-gradient(#f3f4f6_1px,transparent_1px)] [background-size:20px_20px] opacity-20"></div>
      <div className="absolute top-40 -left-32 w-64 h-64 rounded-full bg-yellow-500/5 blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-teal-500/5 blur-3xl"></div>
      <div className="absolute top-10 right-10 w-20 h-20 rounded-full bg-orange-200/20 blur-xl"></div>
      
      {/* Advanced subtle abstract shapes with depth effect */}
      <div className="absolute top-1/3 left-10 w-40 h-40 opacity-30">
        <div className="relative w-full h-full">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 opacity-40 rotate-12">
            <path fill="#eab308" d="M47.7,-57.2C59.9,-47.3,66.6,-31.5,68.5,-15.9C70.5,-0.3,67.7,15.1,60.2,27.5C52.8,39.9,40.6,49.4,27.4,55.3C14.1,61.3,-0.3,63.7,-14.9,61C-29.5,58.2,-44.4,50.3,-53.8,38C-63.3,25.6,-67.4,8.8,-65.2,-6.9C-63,-22.7,-54.6,-37.5,-42.5,-47.4C-30.5,-57.4,-15.2,-62.6,0.9,-63.7C17,-64.8,34,-67,47.7,-57.2Z" transform="translate(100 100)" />
          </svg>
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 opacity-20 -rotate-12 scale-90">
            <path fill="#14b8a6" d="M47.7,-57.2C59.9,-47.3,66.6,-31.5,68.5,-15.9C70.5,-0.3,67.7,15.1,60.2,27.5C52.8,39.9,40.6,49.4,27.4,55.3C14.1,61.3,-0.3,63.7,-14.9,61C-29.5,58.2,-44.4,50.3,-53.8,38C-63.3,25.6,-67.4,8.8,-65.2,-6.9C-63,-22.7,-54.6,-37.5,-42.5,-47.4C-30.5,-57.4,-15.2,-62.6,0.9,-63.7C17,-64.8,34,-67,47.7,-57.2Z" transform="translate(100 100)" />
          </svg>
        </div>
      </div>
      
      <div className="absolute bottom-1/4 right-10 w-32 h-32 opacity-30">
        <div className="relative w-full h-full">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 opacity-40 rotate-45">
            <path fill="#14b8a6" d="M45.3,-53.1C58.9,-42.9,70.2,-28.7,73.4,-12.9C76.6,2.9,71.6,20.3,62.2,34.4C52.8,48.5,38.8,59.4,23.2,65.8C7.6,72.2,-9.7,74.1,-25.4,69.6C-41.2,65.1,-55.3,54.1,-63.6,39.8C-71.9,25.4,-74.3,7.7,-71.4,-8.6C-68.5,-24.9,-60.3,-39.8,-47.9,-50.1C-35.5,-60.4,-17.7,-66.1,-0.8,-65.2C16.2,-64.2,31.7,-63.4,45.3,-53.1Z" transform="translate(100 100)" />
          </svg>
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 opacity-20 -rotate-15 scale-95">
            <path fill="#eab308" d="M45.3,-53.1C58.9,-42.9,70.2,-28.7,73.4,-12.9C76.6,2.9,71.6,20.3,62.2,34.4C52.8,48.5,38.8,59.4,23.2,65.8C7.6,72.2,-9.7,74.1,-25.4,69.6C-41.2,65.1,-55.3,54.1,-63.6,39.8C-71.9,25.4,-74.3,7.7,-71.4,-8.6C-68.5,-24.9,-60.3,-39.8,-47.9,-50.1C-35.5,-60.4,-17.7,-66.1,-0.8,-65.2C16.2,-64.2,31.7,-63.4,45.3,-53.1Z" transform="translate(100 100)" />
          </svg>
        </div>
      </div>
      
      {/* Enhanced floating particles with gentle light effect */}
      <div className="absolute top-1/4 left-1/4 w-6 h-6 rounded-full bg-yellow-400/10 particle-enhanced" style={{ animationDuration: '25s' }}></div>
      <div className="absolute top-1/3 right-1/3 w-8 h-8 rounded-full bg-teal-400/10 particle-enhanced" style={{ animationDuration: '18s', animationDelay: '2s' }}></div>
      <div className="absolute bottom-1/4 right-1/4 w-5 h-5 rounded-full bg-yellow-400/10 particle-enhanced" style={{ animationDuration: '22s', animationDelay: '5s' }}></div>
      <div className="absolute top-2/3 left-1/3 w-4 h-4 rounded-full bg-teal-400/10 particle-enhanced" style={{ animationDuration: '20s', animationDelay: '3s' }}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <FadeIn>
          <div className="text-center max-w-3xl mx-auto mb-20">
            <div className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-gradient-to-r from-yellow-500/20 to-amber-500/20 backdrop-blur-sm mb-6 border border-yellow-200/30">
              <Sparkles className="text-yellow-500 h-4 w-4 mr-2" />
              <span className="text-sm font-medium uppercase tracking-wider text-yellow-600">Begin Your Journey</span>
            </div>
            <h2 className="text-5xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 via-amber-500 to-yellow-500 drop-shadow-sm">
              Discover Your Perfect Program
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
              Answer a few questions and let our intelligent matching system find programs 
              tailored perfectly to your educational aspirations and preferences
            </p>
          </div>
        </FadeIn>

        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            {formSubmitted ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="bg-white/90 backdrop-blur-md rounded-3xl shadow-xl border border-yellow-100 p-10 text-center relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 via-transparent to-teal-400/5"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Trophy className="h-8 w-8 text-yellow-500" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Perfect Matches Found!</h3>
                  <p className="text-gray-600 mb-6">We've found programs that match your preferences perfectly.</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    {[1, 2, 3].map((i) => (
                      <motion.div 
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.2 }}
                        className="bg-gradient-to-br from-white to-yellow-50/70 p-5 rounded-xl shadow-sm border border-yellow-100"
                      >
                        <div className="flex items-start space-x-2 mb-2">
                          <div className="p-2 rounded-lg bg-yellow-100">
                            {i === 1 ? <GraduationCap className="h-5 w-5 text-yellow-500" /> :
                             i === 2 ? <Book className="h-5 w-5 text-yellow-500" /> :
                             <Globe className="h-5 w-5 text-yellow-500" />}
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold text-gray-800">
                              {i === 1 ? "International Business" : 
                               i === 2 ? "Global Leadership" : 
                               "Digital Innovation"}
                            </h4>
                            <div className="text-sm text-yellow-600 font-medium">
                              {i === 1 ? "Harvard University" : 
                               i === 2 ? "Oxford University" : 
                               "Stanford University"}
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center justify-between text-xs text-gray-500 mt-1">
                          <span>Match Score:</span>
                          <div className="flex items-center">
                            <span className="font-medium text-yellow-600 mr-1">
                              {i === 1 ? "98%" : i === 2 ? "96%" : "95%"}
                            </span>
                            <Star className="h-3 w-3 fill-yellow-500 text-yellow-500" />
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                  
                  <Button 
                    className="px-8 py-3 bg-gradient-to-r from-yellow-500 to-amber-500 text-white hover:from-yellow-600 hover:to-amber-600 shadow-md hover:shadow-lg transition-all duration-300 rounded-full"
                  >
                    View All Matches
                  </Button>
                </div>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="bg-white/90 backdrop-blur-md rounded-3xl shadow-xl border border-yellow-100 relative overflow-hidden"
              >
                {/* Enhanced card with subtle gradient border */}
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 via-transparent to-teal-400/5"></div>
                <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-yellow-500/5 rounded-full blur-3xl"></div>
                
                {/* Content container with proper padding */}
                <div className="relative z-10 p-10">
                  {/* Progress section with elegant styling */}
                  <div className="mb-12">
                    <div className="flex justify-between items-center mb-10 px-4">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <div key={i} className="flex flex-col items-center relative">
                          <div className="relative">
                            <motion.div 
                              className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-500
                              ${i < step ? "bg-gradient-to-br from-yellow-500 to-amber-500 text-white shadow-md" : 
                                i === step ? "bg-white border-2 border-yellow-500 text-yellow-500 shadow-md" : 
                                "bg-white border-2 border-gray-200 text-gray-300"}`}
                              animate={i === step ? { scale: [1, 1.05, 1] } : {}}
                              transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
                            >
                              {i < step ? (
                                <CheckCircle2 className="h-5 w-5" />
                              ) : (
                                <span className="text-sm font-medium">{i}</span>
                              )}
                            </motion.div>
                            
                            {/* Enhanced glow for current step */}
                            {i === step && (
                              <div className="absolute -inset-2 rounded-full bg-yellow-500/20 blur-md -z-10 animate-pulse"></div>
                            )}
                          </div>
                          
                          {/* Progress label */}
                          <div className={`mt-2 text-xs font-medium transition-colors duration-300 ${i === step ? 'text-yellow-600' : i < step ? 'text-gray-600' : 'text-gray-400'}`}>
                            {i === 1 ? "Level" : 
                             i === 2 ? "Field" : 
                             i === 3 ? "Budget" : 
                             i === 4 ? "Location" : 
                             "Duration"}
                          </div>
                          
                          {/* Connecting line with enhanced animation */}
                          {i < 5 && (
                            <div className="h-0.5 w-32 mt-6 absolute -right-16 top-5">
                              <motion.div 
                                className={`h-full ${i < step ? "bg-gradient-to-r from-yellow-500 to-amber-500" : "bg-gray-200"}`}
                                initial={{ width: i < step ? "100%" : "0%" }}
                                animate={{ width: i < step ? "100%" : "0%" }}
                                transition={{ duration: 0.5, delay: 0.1 }}
                              ></motion.div>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Step header with enhanced styling */}
                  <div className="mb-10 flex items-center">
                    <div className="p-3 rounded-2xl bg-gradient-to-br from-yellow-500/10 to-amber-500/10 mr-5 border border-yellow-200/30 shadow-sm">
                      {getCurrentIcon()}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">
                        {getStepTitle()}
                      </h3>
                      <p className="text-gray-500">
                        {getStepDescription()}
                      </p>
                    </div>
                  </div>

                  <form onSubmit={handleSubmit}>
                    <AnimatePresence mode="wait">
                      {processingAnimation ? (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="min-h-48 flex flex-col items-center justify-center space-y-6 py-12"
                        >
                          <div className="relative">
                            <div className="w-16 h-16 border-4 border-yellow-200 border-t-yellow-500 rounded-full animate-spin"></div>
                            <div className="absolute inset-0 flex items-center justify-center">
                              <Search className="h-6 w-6 text-yellow-500" />
                            </div>
                          </div>
                          <p className="text-lg font-medium text-gray-700">Finding perfect matches...</p>
                          <div className="flex space-x-2 text-sm text-gray-500">
                            <motion.span
                              animate={{ opacity: [0.5, 1, 0.5] }}
                              transition={{ duration: 1.5, repeat: Infinity }}
                            >
                              Analyzing preferences
                            </motion.span>
                            <motion.span
                              animate={{ opacity: [0.5, 1, 0.5] }}
                              transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
                            >
                              •
                            </motion.span>
                            <motion.span
                              animate={{ opacity: [0.5, 1, 0.5] }}
                              transition={{ duration: 1.5, repeat: Infinity, delay: 1 }}
                            >
                              Matching programs
                            </motion.span>
                          </div>
                        </motion.div>
                      ) : (
                        <motion.div
                          key={step}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -20 }}
                          transition={{ duration: 0.4, ease: "easeOut" }}
                          className="space-y-8 min-h-48"
                        >
                          {step === 1 && (
                            <div className="space-y-8">
                              <Label className="text-lg font-medium block mb-2">What level would you like to pursue?</Label>
                              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {[
                                  { value: "bachelor", label: "Bachelor's Degree", desc: "Undergraduate studies", icon: "🎓" },
                                  { value: "master", label: "Master's Degree", desc: "Advanced specialization", icon: "📚" },
                                  { value: "phd", label: "PhD", desc: "Research & academia", icon: "🔬" }
                                ].map((option) => (
                                  <motion.div 
                                    key={option.value}
                                    whileHover={{ scale: 1.03, y: -5 }}
                                    whileTap={{ scale: 0.98 }}
                                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                                    className={`group relative rounded-2xl p-6 cursor-pointer transition-all overflow-hidden
                                      ${answers.studyLevel === option.value 
                                        ? "ring-2 ring-yellow-500 ring-offset-2 shadow-lg" 
                                        : "border border-gray-200 hover:border-yellow-400/40 hover:shadow-md shadow-sm"}`}
                                    onClick={() => setAnswers({ ...answers, studyLevel: option.value })}
                                  >
                                    {/* Enhanced background gradient on selected/hover */}
                                    <div className={`absolute inset-0 transition-opacity duration-300 
                                      ${answers.studyLevel === option.value 
                                        ? "opacity-100" 
                                        : "opacity-0 group-hover:opacity-60"} 
                                      bg-gradient-to-br from-yellow-500/10 via-yellow-500/5 to-amber-100/20`}>
                                    </div>
                                    
                                    {/* Subtle animated background pattern */}
                                    <div className="absolute inset-0 opacity-5 pattern-dots pattern-yellow-500 pattern-bg-transparent pattern-size-2"></div>
                                    
                                    {/* Card content with enhanced animations */}
                                    <div className="relative z-10">
                                      <div className="text-3xl mb-3 transform transition-transform duration-300 group-hover:scale-110">{option.icon}</div>
                                      <div className="font-semibold text-lg mb-1">{option.label}</div>
                                      <div className="text-sm text-gray-500 transition-colors duration-300 group-hover:text-gray-700">{option.desc}</div>
                                      
                                      {/* Enhanced check indicator with animation */}
                                      {answers.studyLevel === option.value ? (
                                        <motion.div 
                                          initial={{ scale: 0 }}
                                          animate={{ scale: 1 }}
                                          className="absolute top-4 right-4 w-6 h-6 rounded-full bg-gradient-to-br from-yellow-500 to-amber-500 flex items-center justify-center shadow-sm"
                                        >
                                          <CheckCircle2 className="h-4 w-4 text-white" />
                                        </motion.div>
                                      ) : (
                                        <div className="absolute top-4 right-4 w-6 h-6 rounded-full border-2 border-dashed border-gray-200 group-hover:border-yellow-300 transition-colors duration-300"></div>
                                      )}
                                      
                                      {/* Reveal animation for selection */}
                                      {answers.studyLevel === option.value && (
                                        <motion.div 
                                          initial={{ width: 0 }}
                                          animate={{ width: "100%" }}
                                          className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-yellow-500 to-amber-500"
                                        ></motion.div>
                                      )}
                                    </div>
                                  </motion.div>
                                ))}
                              </div>
                            </div>
                          )}

                          {step === 2 && (
                            <div className="space-y-8">
                              <Label className="text-lg font-medium block mb-2">Which field captures your interest?</Label>
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                {[
                                  { value: "business", label: "Business & Management", desc: "Leadership, finance, marketing", icon: "📊" },
                                  { value: "engineering", label: "Engineering & Technology", desc: "Innovation and problem-solving", icon: "⚙️" },
                                  { value: "medicine", label: "Medicine & Health Sciences", desc: "Healthcare and well-being", icon: "🩺" },
                                  { value: "arts", label: "Arts & Design", desc: "Creativity and expression", icon: "🎨" },
                                  { value: "sciences", label: "Natural Sciences", desc: "Research and discovery", icon: "🔬" },
                                  { value: "humanities", label: "Humanities & Social Sciences", desc: "Human experience and society", icon: "📚" }
                                ].map((option) => (
                                  <motion.div 
                                    key={option.value}
                                    whileHover={{ scale: 1.02, x: 3 }}
                                    whileTap={{ scale: 0.98 }}
                                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                                    className={`group relative rounded-2xl p-5 cursor-pointer transition-all
                                      ${answers.fieldOfStudy === option.value 
                                        ? "ring-2 ring-yellow-500 ring-offset-2 shadow-lg" 
                                        : "border border-gray-200 hover:border-yellow-400/40 hover:shadow-md shadow-sm"}`}
                                    onClick={() => setAnswers({ ...answers, fieldOfStudy: option.value })}
                                  >
                                    {/* Enhanced background gradient */}
                                    <div className={`absolute inset-0 transition-all duration-300 rounded-2xl
                                      ${answers.fieldOfStudy === option.value 
                                        ? "opacity-100 bg-gradient-to-br from-yellow-500/15 via-yellow-500/5 to-amber-100/20" 
                                        : "opacity-0 group-hover:opacity-60 bg-gradient-to-br from-yellow-500/5 via-yellow-500/2 to-amber-100/10"}`}>
                                    </div>
                                    
                                    {/* Card content with enhanced animations */}
                                    <div className="relative z-10 flex items-center">
                                      <div className="text-3xl mr-4 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">{option.icon}</div>
                                      <div className="flex-1">
                                        <div className="font-semibold transition-all duration-300 group-hover:translate-x-1">{option.label}</div>
                                        <div className="text-sm text-gray-500 transition-colors duration-300 group-hover:text-gray-700">{option.desc}</div>
                                      </div>
                                      
                                      {/* Enhanced check indicator with animation */}
                                      {answers.fieldOfStudy === option.value ? (
                                        <motion.div 
                                          initial={{ scale: 0 }}
                                          animate={{ scale: 1 }}
                                          className="absolute top-4 right-4 w-6 h-6 rounded-full bg-gradient-to-br from-yellow-500 to-amber-500 flex items-center justify-center shadow-sm"
                                        >
                                          <CheckCircle2 className="h-4 w-4 text-white" />
                                        </motion.div>
                                      ) : (
                                        <div className="absolute top-4 right-4 w-6 h-6 rounded-full border-2 border-dashed border-gray-200 group-hover:border-yellow-300 transition-colors duration-300"></div>
                                      )}
                                    </div>
                                  </motion.div>
                                ))}
                              </div>
                            </div>
                          )}

                          {step === 3 && (
                            <div className="space-y-8">
                              <Label className="text-lg font-medium block mb-2">What's your budget range per year?</Label>
                              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {[
                                  { value: "budget", label: "Under $15,000", desc: "Budget-friendly options", icon: "💰" },
                                  { value: "moderate", label: "$15,000 - $30,000", desc: "Mid-range investment", icon: "💵" },
                                  { value: "premium", label: "Over $30,000", desc: "Premium education", icon: "💎" }
                                ].map((option) => (
                                  <motion.div 
                                    key={option.value}
                                    whileHover={{ scale: 1.03, y: -5 }}
                                    whileTap={{ scale: 0.98 }}
                                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                                    className={`group relative rounded-2xl p-6 cursor-pointer transition-all overflow-hidden
                                      ${answers.budget === option.value 
                                        ? "ring-2 ring-yellow-500 ring-offset-2 shadow-lg" 
                                        : "border border-gray-200 hover:border-yellow-400/40 hover:shadow-md shadow-sm"}`}
                                    onClick={() => setAnswers({ ...answers, budget: option.value })}
                                  >
                                    {/* Enhanced background gradient on selected/hover */}
                                    <div className={`absolute inset-0 transition-opacity duration-300 
                                      ${answers.budget === option.value 
                                        ? "opacity-100" 
                                        : "opacity-0 group-hover:opacity-60"} 
                                      bg-gradient-to-br from-yellow-500/10 via-yellow-500/5 to-amber-100/20`}>
                                    </div>
                                    
                                    {/* Card content with enhanced animations */}
                                    <div className="relative z-10">
                                      <div className="text-3xl mb-3 transform transition-transform duration-300 group-hover:scale-110">{option.icon}</div>
                                      <div className="font-semibold text-lg mb-1">{option.label}</div>
                                      <div className="text-sm text-gray-500 transition-colors duration-300 group-hover:text-gray-700">{option.desc}</div>
                                      
                                      {/* Enhanced check indicator with animation */}
                                      {answers.budget === option.value ? (
                                        <motion.div 
                                          initial={{ scale: 0 }}
                                          animate={{ scale: 1 }}
                                          className="absolute top-4 right-4 w-6 h-6 rounded-full bg-gradient-to-br from-yellow-500 to-amber-500 flex items-center justify-center shadow-sm"
                                        >
                                          <CheckCircle2 className="h-4 w-4 text-white" />
                                        </motion.div>
                                      ) : (
                                        <div className="absolute top-4 right-4 w-6 h-6 rounded-full border-2 border-dashed border-gray-200 group-hover:border-yellow-300 transition-colors duration-300"></div>
                                      )}
                                      
                                      {/* Reveal animation for selection */}
                                      {answers.budget === option.value && (
                                        <motion.div 
                                          initial={{ width: 0 }}
                                          animate={{ width: "100%" }}
                                          className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-yellow-500 to-amber-500"
                                        ></motion.div>
                                      )}
                                    </div>
                                  </motion.div>
                                ))}
                              </div>
                            </div>
                          )}

                          {step === 4 && (
                            <div className="space-y-8">
                              <Label className="text-lg font-medium block mb-2">Where would you like to study?</Label>
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                {[
                                  { value: "north-america", label: "North America", desc: "US, Canada, Mexico", icon: "🌎" },
                                  { value: "europe", label: "Europe", desc: "UK, EU Countries", icon: "🌍" },
                                  { value: "asia", label: "Asia", desc: "China, Japan, Singapore", icon: "🌏" },
                                  { value: "australia", label: "Australia & NZ", desc: "Australia, New Zealand", icon: "🏝️" },
                                  { value: "remote", label: "Remote Learning", desc: "Study from anywhere", icon: "💻" },
                                  { value: "flexible", label: "Flexible Options", desc: "No location preference", icon: "🌐" }
                                ].map((option) => (
                                  <motion.div 
                                    key={option.value}
                                    whileHover={{ scale: 1.02, x: 3 }}
                                    whileTap={{ scale: 0.98 }}
                                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                                    className={`group relative rounded-2xl p-5 cursor-pointer transition-all
                                      ${answers.location === option.value 
                                        ? "ring-2 ring-yellow-500 ring-offset-2 shadow-lg" 
                                        : "border border-gray-200 hover:border-yellow-400/40 hover:shadow-md shadow-sm"}`}
                                    onClick={() => setAnswers({ ...answers, location: option.value })}
                                  >
                                    {/* Enhanced background gradient */}
                                    <div className={`absolute inset-0 transition-all duration-300 rounded-2xl
                                      ${answers.location === option.value 
                                        ? "opacity-100 bg-gradient-to-br from-yellow-500/15 via-yellow-500/5 to-amber-100/20" 
                                        : "opacity-0 group-hover:opacity-60 bg-gradient-to-br from-yellow-500/5 via-yellow-500/2 to-amber-100/10"}`}>
                                    </div>
                                    
                                    {/* Card content with enhanced animations */}
                                    <div className="relative z-10 flex items-center">
                                      <div className="text-3xl mr-4 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">{option.icon}</div>
                                      <div className="flex-1">
                                        <div className="font-semibold transition-all duration-300 group-hover:translate-x-1">{option.label}</div>
                                        <div className="text-sm text-gray-500 transition-colors duration-300 group-hover:text-gray-700">{option.desc}</div>
                                      </div>
                                      
                                      {/* Enhanced check indicator with animation */}
                                      {answers.location === option.value ? (
                                        <motion.div 
                                          initial={{ scale: 0 }}
                                          animate={{ scale: 1 }}
                                          className="absolute top-4 right-4 w-6 h-6 rounded-full bg-gradient-to-br from-yellow-500 to-amber-500 flex items-center justify-center shadow-sm"
                                        >
                                          <CheckCircle2 className="h-4 w-4 text-white" />
                                        </motion.div>
                                      ) : (
                                        <div className="absolute top-4 right-4 w-6 h-6 rounded-full border-2 border-dashed border-gray-200 group-hover:border-yellow-300 transition-colors duration-300"></div>
                                      )}
                                    </div>
                                  </motion.div>
                                ))}
                              </div>
                            </div>
                          )}

                          {step === 5 && (
                            <div className="space-y-8">
                              <Label className="text-lg font-medium block mb-2">What's your preferred program duration?</Label>
                              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {[
                                  { value: "short", label: "1-2 Years", desc: "Fast-track programs", icon: "⚡" },
                                  { value: "standard", label: "3-4 Years", desc: "Standard duration", icon: "📆" },
                                  { value: "flexible", label: "Flexible Timing", desc: "Part-time & self-paced", icon: "🕰️" }
                                ].map((option) => (
                                  <motion.div 
                                    key={option.value}
                                    whileHover={{ scale: 1.03, y: -5 }}
                                    whileTap={{ scale: 0.98 }}
                                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                                    className={`group relative rounded-2xl p-6 cursor-pointer transition-all overflow-hidden
                                      ${answers.duration === option.value 
                                        ? "ring-2 ring-yellow-500 ring-offset-2 shadow-lg" 
                                        : "border border-gray-200 hover:border-yellow-400/40 hover:shadow-md shadow-sm"}`}
                                    onClick={() => setAnswers({ ...answers, duration: option.value })}
                                  >
                                    {/* Enhanced background gradient on selected/hover */}
                                    <div className={`absolute inset-0 transition-opacity duration-300 
                                      ${answers.duration === option.value 
                                        ? "opacity-100" 
                                        : "opacity-0 group-hover:opacity-60"} 
                                      bg-gradient-to-br from-yellow-500/10 via-yellow-500/5 to-amber-100/20`}>
                                    </div>
                                    
                                    {/* Card content with enhanced animations */}
                                    <div className="relative z-10">
                                      <div className="text-3xl mb-3 transform transition-transform duration-300 group-hover:scale-110">{option.icon}</div>
                                      <div className="font-semibold text-lg mb-1">{option.label}</div>
                                      <div className="text-sm text-gray-500 transition-colors duration-300 group-hover:text-gray-700">{option.desc}</div>
                                      
                                      {/* Enhanced check indicator with animation */}
                                      {answers.duration === option.value ? (
                                        <motion.div 
                                          initial={{ scale: 0 }}
                                          animate={{ scale: 1 }}
                                          className="absolute top-4 right-4 w-6 h-6 rounded-full bg-gradient-to-br from-yellow-500 to-amber-500 flex items-center justify-center shadow-sm"
                                        >
                                          <CheckCircle2 className="h-4 w-4 text-white" />
                                        </motion.div>
                                      ) : (
                                        <div className="absolute top-4 right-4 w-6 h-6 rounded-full border-2 border-dashed border-gray-200 group-hover:border-yellow-300 transition-colors duration-300"></div>
                                      )}
                                      
                                      {/* Reveal animation for selection */}
                                      {answers.duration === option.value && (
                                        <motion.div 
                                          initial={{ width: 0 }}
                                          animate={{ width: "100%" }}
                                          className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-yellow-500 to-amber-500"
                                        ></motion.div>
                                      )}
                                    </div>
                                  </motion.div>
                                ))}
                              </div>
                            </div>
                          )}
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Navigation buttons */}
                    {!processingAnimation && (
                      <div className="flex justify-between items-center mt-12">
                        <Button
                          type="button"
                          onClick={handlePrevious}
                          disabled={step === 1}
                          className={`flex items-center space-x-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all
                            ${step === 1 
                              ? "bg-gray-100 text-gray-400 cursor-not-allowed" 
                              : "bg-white hover:bg-gray-50 text-gray-700 border border-gray-200 hover:border-yellow-300 shadow-sm hover:shadow"}`}
                        >
                          <ArrowLeft className="h-4 w-4" />
                          <span>Previous</span>
                        </Button>
                        
                        {step < 5 ? (
                          <Button
                            type="button"
                            onClick={handleNext}
                            disabled={!isStepComplete()}
                            className={`flex items-center space-x-2 px-6 py-2.5 rounded-full text-sm font-medium transition-all
                              ${!isStepComplete() 
                                ? "bg-gray-100 text-gray-400 cursor-not-allowed" 
                                : "bg-gradient-to-r from-yellow-500 to-amber-500 hover:from-yellow-600 hover:to-amber-600 text-white shadow-md hover:shadow-lg"}`}
                          >
                            <span>Continue</span>
                            <ArrowRight className="h-4 w-4" />
                          </Button>
                        ) : (
                          <Button
                            type="submit"
                            disabled={!isStepComplete()}
                            className={`flex items-center space-x-2 px-6 py-2.5 rounded-full text-sm font-medium transition-all
                              ${!isStepComplete() 
                                ? "bg-gray-100 text-gray-400 cursor-not-allowed" 
                                : "bg-gradient-to-r from-yellow-500 to-amber-500 hover:from-yellow-600 hover:to-amber-600 text-white shadow-md hover:shadow-lg"}`}
                          >
                            <span>Find My Perfect Match</span>
                            <Search className="h-4 w-4" />
                          </Button>
                        )}
                      </div>
                    )}
                  </form>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Testimonials section */}
        <div className="mt-24 max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-gradient-to-r from-yellow-500/10 to-amber-500/10 backdrop-blur-sm mb-4 border border-yellow-200/30">
              <Star className="text-yellow-500 h-4 w-4 mr-2 fill-yellow-500" />
              <span className="text-sm font-medium uppercase tracking-wider text-yellow-600">Success Stories</span>
            </div>
            <h3 className="text-3xl font-bold text-gray-800">What Our Students Say</h3>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 via-transparent to-teal-400/5 rounded-3xl"></div>
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonialIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
                className="bg-white/80 backdrop-blur-md rounded-3xl shadow-lg border border-yellow-100 p-8 relative z-10"
              >
                <div className="flex flex-col md:flex-row items-center gap-6">
                  <div className="text-6xl">{testimonials[currentTestimonialIndex].avatar}</div>
                  <div className="flex-1">
                    <div className="flex mb-2">
                      {[...Array(testimonials[currentTestimonialIndex].rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                      ))}
                    </div>
                    <p className="text-lg italic text-gray-700 mb-4">"{testimonials[currentTestimonialIndex].text}"</p>
                    <p className="font-medium text-gray-800">{testimonials[currentTestimonialIndex].author}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
            
            <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentTestimonialIndex(i)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 
                    ${i === currentTestimonialIndex ? "bg-yellow-500 w-8" : "bg-gray-300 hover:bg-yellow-300"}`}
                  aria-label={`View testimonial ${i + 1}`}
                ></button>
              ))}
            </div>
          </div>
        </div>
        
        {/* Statistics section */}
        <div className="mt-24 mb-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-white to-yellow-50/50 rounded-2xl p-6 border border-yellow-100 shadow-sm flex flex-col items-center text-center">
              <div className="p-3 rounded-xl bg-yellow-100 mb-4">
                <GraduationCap className="h-6 w-6 text-yellow-500" />
              </div>
              <h4 className="text-2xl font-bold text-gray-800 mb-1">1,200+</h4>
              <p className="text-gray-600">Universities & Colleges</p>
            </div>
            <div className="bg-gradient-to-br from-white to-yellow-50/50 rounded-2xl p-6 border border-yellow-100 shadow-sm flex flex-col items-center text-center">
              <div className="p-3 rounded-xl bg-yellow-100 mb-4">
                <Book className="h-6 w-6 text-yellow-500" />
              </div>
              <h4 className="text-2xl font-bold text-gray-800 mb-1">10,000+</h4>
              <p className="text-gray-600">Programs Available</p>
            </div>
            <div className="bg-gradient-to-br from-white to-yellow-50/50 rounded-2xl p-6 border border-yellow-100 shadow-sm flex flex-col items-center text-center">
              <div className="p-3 rounded-xl bg-yellow-100 mb-4">
                <Trophy className="h-6 w-6 text-yellow-500" />
              </div>
              <h4 className="text-2xl font-bold text-gray-800 mb-1">98%</h4>
              <p className="text-gray-600">Student Satisfaction</p>
            </div>
          </div>
        </div>
        
        {/* Call to action */}
        <div className="text-center mt-20">
          <Button className="px-8 py-3 bg-gradient-to-r from-yellow-500 to-amber-500 text-white hover:from-yellow-600 hover:to-amber-600 shadow-md hover:shadow-lg transition-all duration-300 rounded-full text-lg font-medium">
            Begin Your Educational Journey
          </Button>
        </div>
      </div>

      {/* Add custom CSS for enhanced particle animations */}
      <style jsx global>{`
        @keyframes float {
          0% { transform: translateY(0px) translateX(0px); }
          25% { transform: translateY(-10px) translateX(5px); }
          50% { transform: translateY(0px) translateX(10px); }
          75% { transform: translateY(10px) translateX(5px); }
          100% { transform: translateY(0px) translateX(0px); }
        }
        
        .particle-enhanced {
          animation: float linear infinite;
          opacity: 0.7;
        }
      `}</style>
    </section>
  );
}