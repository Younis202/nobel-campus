"use client";
import { motion } from "framer-motion";
import { FadeIn } from "@/components/animations/fade-in";
import { StaggerChildren } from "@/components/animations/stagger-children";
import { Globe2, GraduationCap, Users, BookOpen, Award, Briefcase } from "lucide-react";

export function FeaturesSection() {
  const features = [
    {
      icon: Globe2,
      title: "Global Network",
      description: "Access to 100+ prestigious universities across 20+ countries worldwide.",
      stats: "100+ Universities",
      className: "card-yellow"
    },
    {
      icon: GraduationCap,
      title: "Academic Excellence",
      description: "World-class education with internationally recognized degrees and certifications.",
      stats: "95% Success Rate",
      className: "card-teal"
    },
    {
      icon: Users,
      title: "Cultural Exchange",
      description: "Immerse yourself in diverse cultures and build lifelong international connections.",
      stats: "20+ Countries",
      className: "card-yellow"
    },
    {
      icon: BookOpen,
      title: "Expert Guidance",
      description: "Personalized support from experienced counselors throughout your journey.",
      stats: "24/7 Support",
      className: "card-teal"
    },
    {
      icon: Award,
      title: "Scholarships",
      description: "Access to exclusive scholarships and financial aid opportunities.",
      stats: "$2M+ Awarded",
      className: "card-yellow"
    },
    {
      icon: Briefcase,
      title: "Career Support",
      description: "Career development resources and global employment opportunities.",
      stats: "85% Placement",
      className: "card-teal"
    }
  ];

  return (
    <section className="py-24 section-yellow relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-white to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <FadeIn>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block mb-4">
              <span className="badge-yellow">Why Choose Us</span>
            </div>
            <h2 className="text-4xl font-bold mb-6 text-gray-800">
              The <span className="text-[#eab308]">Nobel Campus</span> Advantage
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We provide comprehensive support and opportunities for your international education journey, helping you achieve your academic and career goals.
            </p>
          </div>
        </FadeIn>

        <StaggerChildren className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className={`${feature.className} p-6`}
            >
              <div className="flex flex-col h-full">
                {/* Icon */}
                <div className={index % 2 === 0 ? "icon-yellow mb-6" : "icon-teal mb-6"}>
                  <feature.icon className="h-5 w-5" />
                </div>
                
                {/* Content */}
                <div className="flex-grow">
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {feature.description}
                  </p>
                </div>
                
                {/* Footer with stats */}
                <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-500">{feature.stats}</span>
                  <div className={index % 2 === 0 ? "arrow-yellow rounded-full p-2 transition-transform duration-300" : "arrow-teal rounded-full p-2 transition-transform duration-300"}>
                    <svg className={index % 2 === 0 ? "w-4 h-4 text-[#eab308]" : "w-4 h-4 text-[#14b8a6]"} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </StaggerChildren>
        
        {/* CTA section */}
        <FadeIn>
          <div className="glass-yellow py-12 px-8 rounded-xl max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-6 text-gray-800">Ready to Start Your Global Education Journey?</h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Join thousands of students who have successfully achieved their international education goals with Nobel Campus.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <button className="btn-yellow">
                Explore Programs
              </button>
              <button className="border border-[#eab308] text-[#eab308] bg-white hover:bg-[#eab308]/5 font-medium py-3 px-6 rounded-full transition-all duration-300">
                Book Consultation
              </button>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}