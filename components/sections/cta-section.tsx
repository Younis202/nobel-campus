"use client";

import { useState } from "react";
import { FadeIn } from "@/components/animations/fade-in";
import { Button } from "@/components/ui/button";
import { 
  ArrowRight, 
  GraduationCap, 
  Globe, 
  BadgeCheck, 
  FileText,
  HeartHandshake,
  CalendarClock
} from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface BenefitItemProps {
  icon: ReactNode;
  text: string;
  description: string;
  index: number;
}

interface TestimonialCardProps {
  name: string;
  country: string;
  text: string;
  index: number;
}

interface StatItemProps {
  value: string;
  label: string;
}

// Extracted components for better organization and reusability
const BenefitItem = ({ icon, text, description, index }: BenefitItemProps) => (
  <motion.div
    key={index}
    initial={{ opacity: 0, y: 10 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.1, duration: 0.4 }}
    viewport={{ once: true }}
    className="flex gap-3"
  >
    <div className="mt-0.5 bg-teal-50 p-1.5 rounded-full flex-shrink-0">
      {icon}
    </div>
    <div>
      <p className="font-medium text-gray-800 mb-0.5">{text}</p>
      <p className="text-sm text-gray-500">{description}</p>
    </div>
  </motion.div>
);

const TestimonialCard = ({ name, country, text, index }: TestimonialCardProps) => (
  <motion.div 
    key={index}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.2 + (index * 0.15), duration: 0.5 }}
    viewport={{ once: true }}
    className="bg-white/80 backdrop-blur-sm p-3 rounded-lg shadow-sm"
  >
    <div className="flex items-start">
      <div className="h-8 w-8 rounded-full bg-gradient-to-r from-yellow-200 to-yellow-400 flex items-center justify-center text-yellow-800 font-bold text-sm flex-shrink-0">
        {name.charAt(0)}
      </div>
      <div className="ml-3">
        <div className="flex items-center gap-2">
          <span className="font-medium text-sm text-gray-800">{name}</span>
          <span className="text-xs text-gray-500">{country}</span>
        </div>
        <p className="text-xs text-gray-600 mt-1 line-clamp-2">"{text}"</p>
      </div>
    </div>
  </motion.div>
);

const StatItem = ({ value, label }: StatItemProps) => (
  <div>
    <div className="text-2xl md:text-3xl font-bold text-teal-600">{value}</div>
    <div className="text-xs text-gray-600">{label}</div>
  </div>
);

// Constants moved outside component for better performance
const BENEFITS = [
  {
    icon: <GraduationCap className="h-5 w-5 text-teal-500" />,
    text: "Expert guidance from admissions to graduation",
    description: "Our education consultants have helped thousands of students get into their dream universities."
  },
  {
    icon: <Globe className="h-5 w-5 text-teal-500" />,
    text: "Access to 500+ top-ranked universities worldwide",
    description: "We have partnerships with leading institutions across the US, UK, Canada, Australia, and more."
  },
  {
    icon: <BadgeCheck className="h-5 w-5 text-teal-500" />,
    text: "Scholarship matching and application assistance",
    description: "Our students have received over $3M in scholarships over the past year."
  },
  {
    icon: <FileText className="h-5 w-5 text-teal-500" />,
    text: "Complete visa application and interview prep",
    description: "We maintain a 97% visa approval success rate for our students."
  },
];

const TESTIMONIALS = [
  { name: "Sarah C.", country: "Singapore", text: "I never thought studying abroad was possible until Nobel Campus helped me find scholarships." },
  { name: "Carlos R.", country: "Mexico", text: "The visa process seemed impossible until my advisor walked me through each step." },
  { name: "Elena P.", country: "Russia", text: "From application to arrival, I had support every step of the way." }
];

const STATS = [
  { value: "97%", label: "Visa Success" },
  { value: "500+", label: "Universities" },
  { value: "75+", label: "Countries" }
];

export function CtaSection() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="py-20 bg-gradient-to-b from-white to-yellow-50/50 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[url('/subtle-paper.png')] opacity-30" />
      <div className="absolute inset-0 bg-[url('/world-map-dots.svg')] bg-no-repeat bg-center opacity-5" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12 max-w-5xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
            {/* Left column: CTA content */}
            <div className="lg:w-3/5">
              <FadeIn>
                <div className="inline-block mb-6 px-3 py-1 bg-yellow-50 text-yellow-700 rounded-full text-sm font-medium border border-yellow-100">
                  Start Your Journey
                </div>
                
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
                  Your Global Education Journey Begins Here
                </h2>
                
                <p className="text-lg text-gray-600 mb-8">
                  Take the first step toward your international education adventure. 
                  Our experienced advisors are ready to guide you through every stage of your journey.
                </p>
                
                <div className="space-y-4 mb-8">
                  {BENEFITS.map((benefit, index) => (
                    <BenefitItem
                      key={index}
                      icon={benefit.icon}
                      text={benefit.text}
                      description={benefit.description}
                      index={index}
                    />
                  ))}
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 mb-6 items-center">
                  <Button
                    size="lg"
                    className="w-full sm:w-auto text-base px-8 bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 border-none text-white shadow-md hover:shadow-lg transition-all duration-300"
                    asChild
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                  >
                    <Link href="/apply" className="flex items-center justify-center">
                      Begin Application
                      <motion.div
                        animate={isHovered ? { x: 5 } : { x: 0 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      >
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </motion.div>
                    </Link>
                  </Button>
                  
                  <Link 
                    href="/consultation" 
                    className="w-full sm:w-auto text-base px-6 py-2.5 text-center border border-teal-100 text-teal-700 rounded-full hover:bg-teal-50 transition-colors flex items-center justify-center gap-2"
                  >
                    <CalendarClock className="h-4 w-4" /> 
                    Schedule Free Consultation
                  </Link>
                </div>
                
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <HeartHandshake className="h-4 w-4 text-yellow-500" />
                  <span>Join 10,000+ students from 75+ countries who found their path with us</span>
                </div>
              </FadeIn>
            </div>
            
            {/* Right column: Social proof */}
            <div className="lg:w-2/5 relative">
              <div className="aspect-[4/5] w-full bg-gray-50 rounded-xl overflow-hidden relative">
                {/* Background and decorative elements */}
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-50 to-teal-50 opacity-70" />
                
                <div className="absolute top-6 right-6">
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 0L23.5 16.5L40 20L23.5 23.5L20 40L16.5 23.5L0 20L16.5 16.5L20 0Z" fill="#F59E0B" fillOpacity="0.2"/>
                  </svg>
                </div>
                
                <div className="absolute bottom-8 left-6">
                  <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="15" cy="15" r="15" fill="#14B8A6" fillOpacity="0.2"/>
                  </svg>
                </div>
                
                {/* World map illustration */}
                <div className="absolute inset-0 flex items-center justify-center opacity-10">
                  <svg width="200" height="200" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#374151" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2 12H22" stroke="#374151" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 2C14.5013 4.73835 15.9228 8.29203 16 12C15.9228 15.708 14.5013 19.2616 12 22C9.49872 19.2616 8.07725 15.708 8 12C8.07725 8.29203 9.49872 4.73835 12 2Z" stroke="#374151" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                
                {/* Stats */}
                <div className="absolute top-8 left-0 w-full px-6">
                  <div className="flex justify-between text-center">
                    {STATS.map((stat, index) => (
                      <StatItem key={index} value={stat.value} label={stat.label} />
                    ))}
                  </div>
                </div>
                
                {/* Student testimonials */}
                <div className="absolute bottom-6 left-0 w-full px-6">
                  <h3 className="text-gray-700 font-medium text-center mb-3 text-sm">Student Voices</h3>
                  <div className="space-y-3">
                    {TESTIMONIALS.map((testimonial, index) => (
                      <TestimonialCard
                        key={index}
                        name={testimonial.name}
                        country={testimonial.country}
                        text={testimonial.text}
                        index={index}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* FAQ teaser */}
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        viewport={{ once: true }}
        className="mt-12 text-center"
      >
        <p className="text-gray-600">
          Have questions before applying? <Link href="/faq" className="text-teal-600 hover:text-teal-700 underline underline-offset-2">Check our FAQ</Link> or <Link href="/contact" className="text-teal-600 hover:text-teal-700 underline underline-offset-2">contact us</Link>.
        </p>
      </motion.div>
    </section>
  );
}