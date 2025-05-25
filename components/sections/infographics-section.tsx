"use client";
import { motion } from "framer-motion";
import { FadeIn } from "@/components/animations/fade-in";
import { GraduationCap, Globe2, Users, Award, Briefcase, BookOpen, ChevronRight, ArrowRight } from "lucide-react";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";

export function InfographicsSection() {
const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);  
  const stats = [
    {
      icon: GraduationCap,
      value: "95%",
      label: "Graduation Rate",
      description: "Of our students successfully complete their programs and achieve their educational goals",
      color: "text-yellow-500",
      iconBg: "bg-yellow-100/60"
    },
    {
      icon: Globe2,
      value: "45+",
      label: "Countries",
      description: "Representing our diverse student community from across the globe",
      color: "text-teal-500",
      iconBg: "bg-teal-100/60"
    },
    {
      icon: Users,
      value: "50,000+",
      label: "Alumni Network",
      description: "Global professionals connecting students with opportunities worldwide",
      color: "text-yellow-500",
      iconBg: "bg-yellow-100/60"
    },
    {
      icon: Award,
      value: "$2M+",
      label: "Scholarships",
      description: "Awarded to international students annually to support their dreams",
      color: "text-teal-500",
      iconBg: "bg-teal-100/60"
    },
    {
      icon: Briefcase,
      value: "85%",
      label: "Employment Rate",
      description: "Students employed within 6 months of graduation in their chosen field",
      color: "text-yellow-500",
      iconBg: "bg-yellow-100/60"
    },
    {
      icon: BookOpen,
      value: "150+",
      label: "Programs",
      description: "Across various fields of study tailored for international students",
      color: "text-teal-500",
      iconBg: "bg-teal-100/60"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-yellow-50 relative overflow-hidden">
      {/* Natural background elements */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
      <div className="absolute top-20 right-20 w-64 h-64 rounded-full bg-teal-400/5 animate-float" style={{ animationDuration: '15s' }} />
      <div className="absolute bottom-20 left-20 w-80 h-80 rounded-full bg-yellow-400/5 animate-float" style={{ animationDuration: '20s', animationDelay: '2s' }} />
      
      {/* Subtle floating particles like in testimonials */}
      <div className="absolute top-1/4 left-1/4 w-6 h-6 rounded-full bg-yellow-400/10 particle" style={{ animationDuration: '25s' }} />
      <div className="absolute top-1/3 right-1/3 w-8 h-8 rounded-full bg-teal-400/10 particle" style={{ animationDuration: '18s', animationDelay: '2s' }} />
      <div className="absolute bottom-1/4 right-1/4 w-5 h-5 rounded-full bg-yellow-400/10 particle" style={{ animationDuration: '22s', animationDelay: '5s' }} />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-12 md:mb-16"
        >
          <Badge className="badge-yellow mb-4">EXCELLENCE IN EDUCATION</Badge>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">
            Why Choose Us
          </h2>
          
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our track record speaks for itself — discover the advantages that set us apart in helping students achieve their international education goals
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -8,
                transition: { type: "spring", stiffness: 300 }
              }}
              className={`bg-white rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-lg border border-gray-100 relative overflow-hidden group transition-all duration-300 ease-in-out`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Enhanced gradient background with transition */}
              <div className="absolute inset-0 bg-gradient-to-br from-transparent to-gray-50/80 pointer-events-none group-hover:to-gray-50 transition-all duration-500" />
              
              {/* Decorative accent in corner with enhanced animation */}
              <div 
                className={`absolute -top-10 -right-10 w-24 h-24 rounded-full ${index % 2 === 0 ? 'bg-yellow-100/30' : 'bg-teal-100/30'} pointer-events-none transform group-hover:scale-125 group-hover:opacity-80 transition-all duration-500`} 
              />
              
              {/* Subtle border highlight on hover */}
              <div className={`absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-${index % 2 === 0 ? 'yellow' : 'teal'}-200/40 pointer-events-none transition-all duration-300`} />
              
              {/* Icon container with pulse effect on hover */}
              <div 
                className={`relative mb-6 w-12 h-12 rounded-full ${stat.iconBg} flex items-center justify-center transform group-hover:scale-110 transition-all duration-300`}
              >
                <stat.icon className={`h-6 w-6 ${stat.color} transition-transform duration-300 ease-in-out group-hover:rotate-3`} />
                <div className={`absolute inset-0 rounded-full ${index % 2 === 0 ? 'bg-yellow-400/10' : 'bg-teal-400/10'} scale-0 group-hover:scale-150 opacity-0 group-hover:opacity-100 transition-all duration-700 ease-out`} />
              </div>
              
              {/* Stat value with subtle animation */}
              <div className={`text-4xl font-bold mb-3 ${stat.color} transform transition-all duration-300 group-hover:translate-x-1`}>
                {stat.value}
              </div>
              
              {/* Label with animated underline */}
              <div className="relative text-xl font-semibold mb-3 text-gray-800 inline-block">
                {stat.label}
                <div className={`absolute bottom-0 left-0 w-0 h-0.5 ${index % 2 === 0 ? 'bg-yellow-300/60' : 'bg-teal-300/60'} group-hover:w-full transition-all duration-300 ease-out`} />
              </div>
              
              {/* Description with subtle opacity change */}
              <p className="text-gray-600 mb-6 transition-opacity duration-300 group-hover:text-gray-700">
                {stat.description}
              </p>
              
              {/* Learn more link with enhanced animation */}
              <div 
                className={`mt-4 inline-flex items-center ${stat.color} text-sm font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out transform translate-y-2 group-hover:translate-y-0`}
              >
                Learn more 
                <ArrowRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </div>

              {/* Overlay effect for more depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-transparent to-white opacity-0 group-hover:opacity-5 pointer-events-none transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a 
            href="#programs" 
            className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-teal-500 to-teal-600 text-white font-medium shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-teal-200 group relative overflow-hidden"
          >
            <span className="relative z-10">Explore Our Programs</span>
            <ChevronRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1 relative z-10" />
            <div className="absolute inset-0 bg-gradient-to-r from-teal-600 to-teal-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </a>
          <div className="mt-4 text-gray-500 text-sm">Discover over 150 programs designed for international students</div>
        </div>
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
          0% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.1);
            opacity: 0.8;
          }
          100% {
            transform: scale(1);
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
          animation: pulse 3s infinite ease-in-out;
        }
      `}</style>
    </section>
  );
}