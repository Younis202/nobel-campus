"use client";
import { motion } from "framer-motion";
import { ClipboardCheck, Search, FileCheck, Plane, ChevronRight, CheckCircle, ArrowRight } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

export function ProcessSection() {
const [activeStep, setActiveStep] = useState<number | null>(null);  
  const steps = [
    {
      icon: Search,
      title: "Explore Programs",
      description: "Browse our extensive range of programs and universities to find your perfect academic match.",
      colorClass: "teal",
      badge: "Step 1",
      benefits: ["Personalized recommendations", "Compare institutions", "Expert guidance"],
      details: "Access our database of over 10,000 programs across 500+ universities worldwide. Our education advisors help match your academic profile, budget, and career goals to the ideal study abroad opportunity."
    },
    {
      icon: ClipboardCheck,
      title: "Apply Online",
      description: "Complete our simplified application process with personalized guidance from our expert counselors.",
      colorClass: "yellow",
      badge: "Step 2",
      benefits: ["24/7 support", "Streamlined process", "Document review"],
      details: "Our application platform consolidates the complex university application process. Submit one application for multiple universities with supporting documents, and our counselors will review everything before submission."
    },
    {
      icon: FileCheck,
      title: "Get Accepted",
      description: "Receive your acceptance letter and prepare for your international education journey with our support.",
      colorClass: "teal",
      badge: "Step 3",
      benefits: ["Visa assistance", "Pre-departure guidance", "Scholarship support"],
      details: "Our students achieve a 95% acceptance rate to their chosen programs. Once you're accepted, we guide you through visa applications, accommodation arrangements, and financial planning to ensure a smooth transition."
    },
    {
      icon: Plane,
      title: "Start Your Journey",
      description: "Begin your international education adventure with comprehensive support every step of the way.",
      colorClass: "yellow",
      badge: "Step 4",
      benefits: ["Arrival assistance", "Local orientation", "Community access"],
      details: "From airport pickup to local orientation, we ensure your transition abroad is seamless. Join our global student community for networking events, cultural activities, and career development opportunities."
    }
  ];

  return (
    <section id="process" className="py-24 bg-gradient-to-b from-white to-yellow-50 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
      
      {/* Animated background elements */}
      <div className="absolute top-20 right-20 w-64 h-64 rounded-full bg-teal-400/5 animate-float" style={{ animationDuration: '15s' }} />
      <div className="absolute bottom-20 left-20 w-80 h-80 rounded-full bg-yellow-400/5 animate-float" style={{ animationDuration: '20s', animationDelay: '2s' }} />
      
      {/* Floating particles */}
      <div className="absolute top-1/4 left-1/4 w-6 h-6 rounded-full bg-yellow-400/10 particle" style={{ animationDuration: '25s' }} />
      <div className="absolute top-1/3 right-1/3 w-8 h-8 rounded-full bg-teal-400/10 particle" style={{ animationDuration: '18s', animationDelay: '2s' }} />
      <div className="absolute bottom-1/4 right-1/4 w-5 h-5 rounded-full bg-yellow-400/10 particle" style={{ animationDuration: '22s', animationDelay: '5s' }} />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <Badge className="badge-yellow mb-4">YOUR JOURNEY</Badge>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">
            Your Path to <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-teal-400">Global Education</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A seamless four-step process designed to transform your international education aspirations into reality
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="relative"
              onMouseEnter={() => setActiveStep(index)}
              onMouseLeave={() => setActiveStep(null)}
            >
              {/* Timeline dot */}
              <div className="absolute top-24 left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full hidden lg:block" style={{
                backgroundColor: step.colorClass === "teal" ? "#14b8a6" : "#eab308",
                boxShadow: `0 0 0 4px ${step.colorClass === "teal" ? "rgba(20, 184, 166, 0.2)" : "rgba(234, 179, 8, 0.2)"}`
              }}/>
                
              <div className={cn(
                "bg-white rounded-2xl p-6 shadow-sm border border-gray-100 h-full transition-all duration-500",
                "hover:shadow-xl relative overflow-hidden group",
                "before:absolute before:inset-0 before:bg-gradient-to-b",
                step.colorClass === "teal" 
                  ? "before:from-teal-50/0 before:to-teal-50/50 hover:border-teal-200/50" 
                  : "before:from-yellow-50/0 before:to-yellow-50/50 hover:border-yellow-200/50",
                "before:opacity-0 before:transition-opacity before:duration-500 hover:before:opacity-100"
              )}>
                {/* Step badge with enhanced animation */}
                <div className="absolute -top-0 -right-0 w-24 h-24">
                  <div 
                    className={cn(
                      "absolute top-0 right-0 w-full h-full transform rotate-45 translate-x-8 -translate-y-8 transition-all duration-500",
                      step.colorClass === "teal" 
                        ? "bg-teal-100/50 group-hover:bg-teal-100/80" 
                        : "bg-yellow-100/50 group-hover:bg-yellow-100/80"
                    )}
                  />
                  <div className="absolute top-4 right-4 text-xs font-bold text-gray-600 transition-all duration-300 group-hover:font-extrabold">
                    {step.badge}
                  </div>
                </div>
                
                {/* Icon with hover effect */}
                <div 
                  className={cn(
                    "w-12 h-12 rounded-full flex items-center justify-center mb-4 transition-all duration-500",
                    step.colorClass === "teal" 
                      ? "bg-teal-100/70 text-teal-600 group-hover:bg-teal-200 group-hover:text-teal-700 group-hover:scale-110" 
                      : "bg-yellow-100/70 text-yellow-600 group-hover:bg-yellow-200 group-hover:text-yellow-700 group-hover:scale-110"
                  )}
                >
                  <step.icon className="h-5 w-5 transition-transform duration-500 group-hover:scale-110" />
                </div>
                
                {/* Content with improved transitions */}
                <h3 className="text-xl font-bold mb-2 text-gray-800 transition-all duration-300 group-hover:translate-x-1">
                  {step.title}
                </h3>
                <p className="text-gray-600 mb-4 transition-all duration-300 group-hover:text-gray-700">
                  {step.description}
                </p>
                
                {/* Benefits with animated appearance */}
                <ul className="space-y-2 mb-4">
                  {step.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-center text-sm text-gray-600 transition-all duration-300 group-hover:translate-x-1">
                      <CheckCircle className={cn(
                        "h-4 w-4 mr-2 flex-shrink-0 transition-all duration-500",
                        step.colorClass === 'teal' 
                          ? "text-teal-500 group-hover:text-teal-600"
                          : "text-yellow-500 group-hover:text-yellow-600"
                      )} />
                      <span className="transition-colors duration-300 group-hover:text-gray-700">
                        {benefit}
                      </span>
                    </li>
                  ))}
                </ul>
                
                {/* Expandable details with improved transition */}
                <div 
                  className={cn(
                    "overflow-hidden transition-all duration-500",
                    activeStep === index 
                      ? "max-h-40 opacity-100 mt-2" 
                      : "max-h-0 opacity-0"
                  )}
                >
                  <div className="text-sm text-gray-500 pt-3 border-t border-gray-100">
                    <p>{step.details}</p>
                  </div>
                </div>
                
                {/* Learn more link with enhanced hover effect */}
                <div className="mt-4 pt-3 border-t border-gray-100">
                  <a 
                    href="#" 
                    className={cn(
                      "flex items-center text-sm font-medium transition-all duration-300",
                      step.colorClass === 'teal' 
                        ? "text-teal-600 group-hover:text-teal-700" 
                        : "text-yellow-600 group-hover:text-yellow-700"
                    )}
                  >
                    <span className="relative overflow-hidden inline-block">
                      <span className="transition-transform duration-300 inline-block group-hover:translate-y-full">
                        Learn more
                      </span>
                      <span className="absolute top-0 left-0 transition-transform duration-300 -translate-y-full group-hover:translate-y-0">
                        Discover more
                      </span>
                    </span>
                    <ArrowRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-2" />
                  </a>
                </div>
                
                {/* Card decoration elements that appear on hover */}
                <div className={cn(
                  "absolute -bottom-16 -right-16 w-32 h-32 rounded-full transition-opacity duration-500 opacity-0 group-hover:opacity-10",
                  step.colorClass === 'teal' ? "bg-teal-500" : "bg-yellow-500"
                )} />
              </div>
              
              {/* Connector arrow for desktop with enhanced animation */}
              {index < steps.length - 1 && (
                <div className="absolute top-24 -right-4 transform translate-x-1/2 z-10 hidden lg:block">
                  <div className={cn(
                    "w-6 h-6 rounded-full flex items-center justify-center bg-white shadow-sm border border-gray-100 transition-all duration-300",
                    activeStep === index || activeStep === index + 1 ? "scale-125 shadow-md" : ""
                  )}>
                    <ChevronRight className={cn(
                      "h-4 w-4 transition-all duration-300",
                      activeStep === index || activeStep === index + 1 ? "text-gray-600" : "text-gray-400"
                    )} />
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
        
        {/* CTA Section with improved hover effect */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <button className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-teal-500 to-teal-600 text-white font-medium shadow-sm hover:shadow-lg transition-all duration-500 hover:-translate-y-1 relative overflow-hidden group">
            <span className="relative z-10 transition-all duration-300 group-hover:font-bold">
              Begin Your Global Education Journey
            </span>
            <ChevronRight className="ml-2 h-5 w-5 relative z-10 transition-all duration-300 group-hover:ml-3 group-hover:scale-110" />
            <span className="absolute inset-0 bg-gradient-to-r from-teal-600 to-teal-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </button>
          <p className="mt-4 text-gray-500 text-sm">Join over 25,000+ students who've successfully studied abroad with our guidance</p>
        </motion.div>
      </div>
      
      {/* CSS for animations */}
      <style jsx global>{`
        @keyframes float {
          0% {
            transform: translateY(0) translateX(0);
          }
          50% {
            transform: translateY(-20px) translateX(10px);
          }
          100% {
            transform: translateY(0) translateX(0);
          }
        }
        
        @keyframes particle {
          0% {
            transform: translateY(0) translateX(0) scale(1);
          }
          33% {
            transform: translateY(-30px) translateX(20px) scale(1.1);
          }
          66% {
            transform: translateY(10px) translateX(-15px) scale(0.9);
          }
          100% {
            transform: translateY(0) translateX(0) scale(1);
          }
        }
        
        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
            opacity: 0.8;
          }
          50% {
            transform: scale(1.05);
            opacity: 1;
          }
        }
        
        .animate-float {
          animation-name: float;
          animation-iteration-count: infinite;
          animation-timing-function: ease-in-out;
        }
        
        .particle {
          animation-name: particle;
          animation-iteration-count: infinite;
          animation-timing-function: ease-in-out;
        }
        
        .animate-pulse-slow {
          animation: pulse 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}