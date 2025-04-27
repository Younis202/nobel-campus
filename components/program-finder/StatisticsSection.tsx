"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FadeIn } from "@/components/animations/fade-in";
import {
  Book, 
  Globe, 
  Trophy,
  Award
} from "lucide-react";

export function StatisticsSection() {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);
  
  // Statistics data
  const statistics = [
    {
      icon: <Book className="h-8 w-8 text-yellow-500" />,
      number: "10,000+",
      label: "Programs Available",
      delay: 0.2
    },
    {
      icon: <Globe className="h-8 w-8 text-yellow-500" />,
      number: "70+",
      label: "Countries Represented",
      delay: 0.3
    },
    {
      icon: <Trophy className="h-8 w-8 text-yellow-500" />,
      number: "98%",
      label: "Student Satisfaction",
      delay: 0.4
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Enhanced natural texture background */}
      <div className="absolute inset-0 bg-[radial-gradient(#f3f4f6_1px,transparent_1px)] [background-size:20px_20px] opacity-20"></div>
      <div className="absolute top-20 -left-20 w-64 h-64 rounded-full bg-yellow-500/5 blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-teal-500/5 blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Flex container for statistics */}
        <div className="flex flex-wrap justify-center items-stretch gap-8">
          {statistics.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: stat.delay, ease: "easeOut" }}
              className="flex-1 min-w-[250px] max-w-sm bg-gradient-to-br from-white to-yellow-50/50 rounded-2xl p-8 border border-yellow-100 shadow-sm hover:shadow-md transition-all duration-300 relative overflow-hidden group"
            >
              {/* Background elements */}
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 via-transparent to-teal-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-yellow-500/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Content with animations */}
              <div className="relative z-10 flex flex-col items-center justify-between h-full text-center">
                <motion.div 
                  initial={{ scale: 0.8, rotate: -5 }}
                  animate={isVisible ? { scale: 1, rotate: 0 } : {}}
                  transition={{ duration: 0.5, delay: stat.delay + 0.2, type: "spring" }}
                  className="p-4 rounded-xl bg-yellow-100 mb-5 shadow-sm transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3"
                >
                  {stat.icon}
                </motion.div>
                
                <div className="flex flex-col items-center justify-center flex-grow">
                  <motion.h4 
                    initial={{ opacity: 0 }}
                    animate={isVisible ? { opacity: 1 } : {}}
                    transition={{ duration: 0.8, delay: stat.delay + 0.4 }}
                    className="text-3xl font-bold text-gray-800 mb-2"
                  >
                    {stat.number}
                  </motion.h4>
                  
                  <motion.p 
                    initial={{ opacity: 0 }}
                    animate={isVisible ? { opacity: 1 } : {}}
                    transition={{ duration: 0.8, delay: stat.delay + 0.5 }}
                    className="text-gray-600"
                  >
                    {stat.label}
                  </motion.p>
                </div>
                
                {/* Animated border bottom on hover */}
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-yellow-500 to-amber-500 group-hover:w-full transition-all duration-500"></div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Additional feature highlight */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-16 bg-white/90 backdrop-blur-md rounded-3xl shadow-lg border border-yellow-100 p-8 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 via-transparent to-teal-400/5"></div>
          <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <div className="p-3 inline-flex rounded-xl bg-yellow-100 mb-4">
                <Award className="h-6 w-6 text-yellow-500" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Expert-Verified Programs</h3>
              <p className="text-gray-600 leading-relaxed">
                Every educational program in our database is thoroughly vetted by our team of education specialists 
                to ensure quality, accreditation, and career relevance for students like you.
              </p>
            </div>
            
            <div className="flex items-center justify-center space-x-6 md:flex-shrink-0">
              {[1, 2, 3].map((i) => (
                <motion.div 
                  key={i}
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={isVisible ? { scale: 1, opacity: 1 } : {}}
                  transition={{ 
                    duration: 0.5, 
                    delay: 0.8 + (i * 0.15),
                    type: "spring",
                    stiffness: 200
                  }}
                  className="w-16 h-16 rounded-full flex items-center justify-center shadow-md"
                  style={{
                    background: i === 1 ? "#FEF3C7" : i === 2 ? "#E0F2FE" : "#DCFCE7",
                    border: `2px solid ${i === 1 ? "#F59E0B" : i === 2 ? "#0EA5E9" : "#22C55E"}`
                  }}
                >
                  <div className="text-2xl">{i === 1 ? "🏆" : i === 2 ? "🎓" : "✅"}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
      
      {/* Floating particle animations */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(10)].map((_, i) => (
          <div 
            key={i}
            className="particle-enhanced absolute rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 10 + 5}px`,
              height: `${Math.random() * 10 + 5}px`,
              background: i % 3 === 0 ? '#FEF3C7' : i % 3 === 1 ? '#E0F2FE' : '#DCFCE7',
              animationDuration: `${Math.random() * 10 + 10}s`
            }}
          ></div>
        ))}
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
          opacity: 0.5;
          filter: blur(1px);
        }
      `}</style>
    </section>
  );
}