"use client";

// components/program-finder/BackgroundElements.tsx
import React from "react";

export const BackgroundElements: React.FC = () => {
  return (
    <>
      {/* Natural texture background */}
      <div className="absolute inset-0 bg-[radial-gradient(#f3f4f6_1px,transparent_1px)] [background-size:20px_20px] opacity-20"></div>
      <div className="absolute top-40 -left-32 w-64 h-64 rounded-full bg-yellow-500/5 blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-teal-500/5 blur-3xl"></div>
      <div className="absolute top-10 right-10 w-20 h-20 rounded-full bg-orange-200/20 blur-xl"></div>
      
      {/* Abstract shapes with depth effect */}
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
      
      {/* Floating particles */}
      <div className="absolute top-1/4 left-1/4 w-6 h-6 rounded-full bg-yellow-400/10 particle-enhanced" style={{ animationDuration: '25s' }}></div>
      <div className="absolute top-1/3 right-1/3 w-8 h-8 rounded-full bg-teal-400/10 particle-enhanced" style={{ animationDuration: '18s', animationDelay: '2s' }}></div>
      <div className="absolute bottom-1/4 right-1/4 w-5 h-5 rounded-full bg-yellow-400/10 particle-enhanced" style={{ animationDuration: '22s', animationDelay: '5s' }}></div>
      <div className="absolute top-2/3 left-1/3 w-4 h-4 rounded-full bg-teal-400/10 particle-enhanced" style={{ animationDuration: '20s', animationDelay: '3s' }}></div>
      
      {/* Custom CSS for particle animations */}
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
    </>
  );
};