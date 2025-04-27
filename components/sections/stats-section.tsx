"use client";

import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GraduationCap, Globe2, Building2, Star, Award, ChevronRight, Users, TrendingUp } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export function StatsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState([0, 0, 0, 0]);
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const [showDetailsFor, setShowDetailsFor] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement | null>(null);
  
  const stats = [
    {
      icon: GraduationCap,
      value: "10,000+",
      numericValue: 10000,
      label: "Students Placed",
      description: "Successfully studying at prestigious universities worldwide",
      achievement: "95% graduation rate",
      color: "yellow",
      details: {
        title: "Our Student Success Story",
        metrics: [
          { label: "Undergraduate placements", value: "7,800+" },
          { label: "Graduate placements", value: "2,200+" },
          { label: "Scholarship recipients", value: "35%" }
        ],
        fact: "Our students have earned over $45M in scholarships"
      }
    },
    {
      icon: Building2,
      value: "100+",
      numericValue: 100,
      label: "Partner Universities",
      description: "Exclusive relationships with top-ranked institutions globally",
      achievement: "Including 25 top-100 universities",
      color: "teal",
      details: {
        title: "Global University Network",
        metrics: [
          { label: "Universities in Europe", value: "42" },
          { label: "Universities in North America", value: "35" },
          { label: "Universities in Asia-Pacific", value: "23" }
        ],
        fact: "Direct admission agreements with 15 Ivy League & Russell Group universities"
      }
    },
    {
      icon: Globe2,
      value: "20+",
      numericValue: 20,
      label: "Countries",
      description: "Diverse global study destinations across continents",
      achievement: "From Singapore to Canada",
      color: "yellow",
      details: {
        title: "Global Presence",
        metrics: [
          { label: "Countries with local offices", value: "12" },
          { label: "Support languages", value: "15+" },
          { label: "Local partnership programs", value: "30+" }
        ],
        fact: "24/7 support in all time zones for our international students"
      }
    },
    {
      icon: Star,
      value: "95%",
      numericValue: 95,
      label: "Success Rate",
      description: "Exceptional student satisfaction and application approvals",
      achievement: "4.8/5 average rating",
      color: "teal",
      details: {
        title: "Why Students Choose Us",
        metrics: [
          { label: "Visa approval rate", value: "98%" },
          { label: "Application acceptance", value: "95%" },
          { label: "Would recommend us", value: "97%" }
        ],
        fact: "Named 'Top Education Consultant' for 5 consecutive years"
      }
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.disconnect();
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    
    const duration = 2000;
    const interval = 20;
    const steps = duration / interval;
    
    let currentStep = 0;
    
    const timer = setInterval(() => {
      currentStep += 1;
      const progress = Math.min(currentStep / steps, 1);
      const easedProgress = easeOutCubic(progress);
      
      setCounts(
        stats.map(stat => {
          return Math.floor(easedProgress * stat.numericValue);
        })
      );
      
      if (currentStep >= steps) {
        clearInterval(timer);
      }
    }, interval);
    
    return () => clearInterval(timer);
  }, [isVisible]);

  // Easing function for smoother animation
  const easeOutCubic = (x: number): number => {
    return 1 - Math.pow(1 - x, 3);
  };

  // Handle card interactions
  const handleCardClick = (index: number) => {
    setShowDetailsFor(showDetailsFor === index ? null : index);
  };

  return (
    <section 
      ref={sectionRef}
      className="py-24 bg-gradient-to-b from-yellow-50 to-white relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
      
      {/* Animated circles - matching video testimonials section */}
      <div className="absolute top-20 left-20 w-64 h-64 rounded-full bg-teal-400/5 animate-float" style={{ animationDuration: '15s' }} />
      <div className="absolute bottom-20 right-20 w-80 h-80 rounded-full bg-yellow-400/5 animate-float" style={{ animationDuration: '20s', animationDelay: '2s' }} />
      
      {/* Enhanced floating particles with glow effect */}
      <div className="absolute top-1/3 right-1/4 w-6 h-6 rounded-full bg-yellow-400/20 particle glow-yellow" style={{ animationDuration: '25s' }} />
      <div className="absolute top-2/3 left-1/3 w-8 h-8 rounded-full bg-teal-400/20 particle glow-teal" style={{ animationDuration: '18s', animationDelay: '2s' }} />
      <div className="absolute bottom-1/3 right-1/3 w-5 h-5 rounded-full bg-yellow-400/20 particle glow-yellow" style={{ animationDuration: '22s', animationDelay: '5s' }} />
      <div className="absolute top-1/2 left-1/4 w-4 h-4 rounded-full bg-teal-400/20 particle glow-teal" style={{ animationDuration: '28s', animationDelay: '3s' }} />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <Badge className="badge-yellow mb-4">OUR GLOBAL IMPACT</Badge>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">
            Transforming <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-yellow-600">Education</span> Journeys
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            For over a decade, Nobel Campus has been connecting ambitious students with world-class educational opportunities
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-12">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className={`rounded-2xl overflow-hidden bg-white shadow-md border border-gray-100 
                transition-all duration-500 cursor-pointer relative group
                ${activeCard === index ? 'ring-2 ring-offset-2' : ''}
                ${stat.color === 'teal' ? 'hover:ring-teal-200 hover:border-teal-200/50' : 'hover:ring-yellow-200 hover:border-yellow-200/50'}
                ${showDetailsFor === index ? 'shadow-xl' : 'hover:shadow-xl'}
              `}
              onClick={() => handleCardClick(index)}
              onMouseEnter={() => setActiveCard(index)}
              onMouseLeave={() => setActiveCard(null)}
            >
              {/* Card shine effect overlay */}
              <div className="absolute inset-0 origin-[10%_10%] bg-gradient-to-br from-white/40 via-white/5 to-transparent opacity-0 
                group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
                
              <div className="p-6 relative z-10">
                {/* Achievement Badge with enhanced animation */}
                <div className="mb-6">
                  <div className={`${stat.color === 'teal' ? 'badge-teal' : 'badge-yellow'} text-xs inline-block
                    transform transition-all duration-300 group-hover:scale-110`}>
                    {stat.achievement}
                  </div>
                </div>
                
                {/* Icon with enhanced animation */}
                <div className={`w-14 h-14 rounded-full flex items-center justify-center mb-6 mx-auto shadow-sm
                  transition-all duration-500 group-hover:scale-110 group-hover:shadow-md relative overflow-hidden
                  ${stat.color === 'teal' 
                    ? 'bg-gradient-to-br from-teal-100 to-teal-50 group-hover:from-teal-200 group-hover:to-teal-100' 
                    : 'bg-gradient-to-br from-yellow-100 to-yellow-50 group-hover:from-yellow-200 group-hover:to-yellow-100'
                  }`}>
                  <stat.icon className={`h-6 w-6 transition-all duration-500 ${stat.color === 'teal' ? 'text-teal-500' : 'text-yellow-500'} 
                    group-hover:scale-110 group-hover:rotate-[360deg]`} />
                    
                  {/* Pulsing background effect */}
                  <div className={`absolute inset-0 rounded-full ${stat.color === 'teal' ? 'bg-teal-400/20' : 'bg-yellow-400/20'} 
                    scale-0 group-hover:scale-150 opacity-0 group-hover:opacity-100 transition-all duration-1000`}></div>
                </div>
                
                {/* Counter with enhanced animation */}
                <div className="text-4xl font-bold mb-2 text-gray-800 relative overflow-hidden group-hover:text-transparent 
                  transition-all duration-300 group-hover:bg-clip-text group-hover:bg-gradient-to-r 
                  group-hover:from-gray-800 group-hover:to-gray-600">
                  <span className="relative block transition-transform duration-500 group-hover:translate-y-0">
                    {isVisible ? 
                      (counts[index] >= stat.numericValue ? stat.value : counts[index]) 
                      : "0"}
                  </span>
                </div>
                
                {/* Label with hover effect */}
                <div className="text-lg font-medium mb-3 text-gray-700 transition-all duration-300 group-hover:text-gray-900">
                  {stat.label}
                </div>
                
                {/* Description with hover effect */}
                <p className="text-gray-600 text-sm leading-relaxed mb-4 transition-all duration-300 group-hover:text-gray-700">
                  {stat.description}
                </p>
                
                {/* Animated divider */}
                <div className={`h-0.5 w-16 mx-auto rounded-full transition-all duration-500 group-hover:w-24
                  ${stat.color === 'teal' 
                    ? 'bg-gradient-to-r from-teal-200 to-teal-300 group-hover:from-teal-300 group-hover:to-teal-400' 
                    : 'bg-gradient-to-r from-yellow-200 to-yellow-300 group-hover:from-yellow-300 group-hover:to-yellow-400'
                  }`} />
                  
                {/* Click to expand indicator */}
                <div className={`flex items-center justify-center mt-3 text-xs font-medium transition-all duration-300
                  ${showDetailsFor === index ? 'opacity-0' : 'opacity-70 group-hover:opacity-100'}
                  ${stat.color === 'teal' ? 'text-teal-600' : 'text-yellow-600'}`}>
                  <span>Click for details</span>
                  <ChevronRight className="h-3 w-3 ml-1 transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </div>
                
              {/* Expandable details panel */}
              <AnimatePresence>
                {showDetailsFor === index && (
                  <motion.div 
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className={`px-6 pb-6 overflow-hidden border-t
                      ${stat.color === 'teal' ? 'border-teal-100 bg-teal-50/30' : 'border-yellow-100 bg-yellow-50/30'}`}
                  >
                    <div className="pt-4">
                      <h4 className={`font-semibold mb-3 text-sm
                        ${stat.color === 'teal' ? 'text-teal-700' : 'text-yellow-700'}`}>
                        {stat.details.title}
                      </h4>
                      
                      <div className="space-y-2 mb-3">
                        {stat.details.metrics.map((metric, i) => (
                          <motion.div 
                            key={i}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="flex justify-between text-sm"
                          >
                            <span className="text-gray-600">{metric.label}</span>
                            <span className="font-medium text-gray-900">{metric.value}</span>
                          </motion.div>
                        ))}
                      </div>
                      
                      <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className={`text-xs rounded-lg p-2 mt-3 flex items-center
                          ${stat.color === 'teal' ? 'bg-teal-100/50 text-teal-700' : 'bg-yellow-100/50 text-yellow-700'}`}
                      >
                        <TrendingUp className="h-3 w-3 mr-1 flex-shrink-0" />
                        <span>{stat.details.fact}</span>
                      </motion.div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
              
              {/* Card background decoration */}
              <div className={`absolute bottom-0 right-0 w-32 h-32 -mb-16 -mr-16 rounded-full transition-opacity duration-500
                opacity-0 group-hover:opacity-5 pointer-events-none
                ${stat.color === 'teal' ? 'bg-teal-500' : 'bg-yellow-500'}`} />
            </motion.div>
          ))}
        </div>
        
        {/* New global stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mb-16 bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-100">
            <div className="p-6 flex items-center justify-center md:justify-start space-x-4">
              <div className="w-12 h-12 rounded-full bg-yellow-100/70 flex items-center justify-center flex-shrink-0">
                <Users className="h-5 w-5 text-yellow-600" />
              </div>
              <div>
                <div className="text-sm text-gray-500">Students Counseled</div>
                <div className="text-xl font-bold text-gray-800">50,000+</div>
              </div>
            </div>
            <div className="p-6 flex items-center justify-center md:justify-start space-x-4">
              <div className="w-12 h-12 rounded-full bg-teal-100/70 flex items-center justify-center flex-shrink-0">
                <Award className="h-5 w-5 text-teal-600" />
              </div>
              <div>
                <div className="text-sm text-gray-500">Scholarships Secured</div>
                <div className="text-xl font-bold text-gray-800">$45M+</div>
              </div>
            </div>
            <div className="p-6 flex items-center justify-center md:justify-start space-x-4">
              <div className="w-12 h-12 rounded-full bg-yellow-100/70 flex items-center justify-center flex-shrink-0">
                <Globe2 className="h-5 w-5 text-yellow-600" />
              </div>
              <div>
                <div className="text-sm text-gray-500">Local Offices</div>
                <div className="text-xl font-bold text-gray-800">12 Countries</div>
              </div>
            </div>
          </div>
        </motion.div>
        
        {/* Enhanced CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="group inline-block">
            <button className="btn-teal py-3 px-8 rounded-full inline-flex items-center gap-2 shadow-md
              transition-all duration-500 relative overflow-hidden group-hover:shadow-xl group-hover:scale-105">
              <span className="relative z-10">
                <Award className="h-5 w-5 mr-1 transition-transform duration-500 group-hover:rotate-12" />
                Discover Our Programs
              </span>
              <ChevronRight className="h-5 w-5 relative z-10 transition-all duration-300 
                opacity-0 w-0 group-hover:opacity-100 group-hover:w-5 group-hover:ml-1" />
              
              {/* Button background animation */}
              <span className="absolute inset-0 bg-gradient-to-r from-teal-600 to-teal-500 
                opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
              {/* Button shine effect */}
              <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent
                translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
            </button>
          </div>
          <p className="mt-4 text-gray-500 text-sm opacity-90 transition-opacity duration-300 hover:opacity-100">
            Join over 25,000+ students who've successfully studied abroad with our guidance
          </p>
        </motion.div>
      </div>
      
      <style jsx global>{`
        .badge-yellow {
          background: linear-gradient(to right, rgba(234, 179, 8, 0.1), rgba(245, 158, 11, 0.1));
          color: #d97706;
          padding: 0.35rem 0.8rem;
          border-radius: 9999px;
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 0.025em;
          text-transform: uppercase;
        }
        
        .badge-teal {
          background: linear-gradient(to right, rgba(20, 184, 166, 0.1), rgba(13, 148, 136, 0.1));
          color: #0d9488;
          padding: 0.35rem 0.8rem;
          border-radius: 9999px;
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 0.025em;
        }
        
        .btn-teal {
          background: linear-gradient(to right, #14b8a6, #0d9488);
          color: white;
          font-weight: 600;
          transition: all 0.3s ease;
        }
        
        .btn-teal:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 25px -5px rgba(14, 116, 144, 0.3);
        }
        
        @keyframes float {
          0% {
            transform: translateY(0) translateX(0);
          }
          50% {
            transform: translateY(-10px) translateX(10px);
          }
          100% {
            transform: translateY(0) translateX(0);
          }
        }
        
        .animate-float {
          animation: float 20s ease-in-out infinite;
        }
        
        @keyframes particle {
          0% {
            transform: translateY(0) translateX(0);
          }
          25% {
            transform: translateY(-30px) translateX(30px);
          }
          50% {
            transform: translateY(0) translateX(60px);
          }
          75% {
            transform: translateY(30px) translateX(30px);
          }
          100% {
            transform: translateY(0) translateX(0);
          }
        }
        
        .particle {
          animation: particle 30s ease-in-out infinite;
        }
        
        .glow-yellow {
          box-shadow: 0 0 15px 5px rgba(234, 179, 8, 0.15);
        }
        
        .glow-teal {
          box-shadow: 0 0 15px 5px rgba(20, 184, 166, 0.15);
        }
        
        @keyframes rotate {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </section>
  );
}