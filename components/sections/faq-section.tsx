"use client";

import { FadeIn } from "@/components/animations/fade-in";
import { StaggerChildren } from "@/components/animations/stagger-children";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react";
import { useState } from "react";

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqCategories = [
    {
      name: "application",
      label: "Application Process",
      icon: "📝",
      color: "bg-blue-50 text-blue-600",
      questions: [
        {
          question: "What are the admission requirements?",
          answer:
            "Requirements vary by program and university but generally include academic transcripts, language proficiency tests (IELTS/TOEFL), and letters of recommendation. Contact us for specific program requirements.",
        },
        {
          question: "How long does the application process take?",
          answer:
            "The timeline varies but typically takes 2-4 months from application to acceptance. We recommend starting the process early to ensure enough time for visa processing.",
        },
        {
          question: "What documents do I need to prepare?",
          answer:
            "Typically, you'll need academic transcripts, language proficiency test scores, passport copies, personal statement, letters of recommendation, and financial statements. Our advisors will provide a complete checklist based on your specific program.",
        },
      ],
    },
    {
      name: "financial",
      label: "Financial Information",
      icon: "💰",
      color: "bg-green-50 text-green-600",
      questions: [
        {
          question: "How much does it cost to study abroad?",
          answer:
            "Costs vary by country and program. Many universities offer scholarships and financial aid. We'll help you find programs within your budget and available funding opportunities.",
        },
        {
          question: "Are scholarships available?",
          answer:
            "Yes, many universities and countries offer scholarships specifically for international students. Our team will help you identify and apply for scholarships you're eligible for.",
        },
        {
          question: "Can I work while studying abroad?",
          answer:
            "Work regulations vary by country. Many student visas allow part-time work during the academic year and full-time during breaks. We'll provide specific information for your destination country.",
        },
      ],
    },
    {
      name: "support",
      label: "Support Services",
      icon: "🤝",
      color: "bg-purple-50 text-purple-600",
      questions: [
        {
          question: "Can you help with visa applications?",
          answer:
            "Yes! We provide comprehensive visa application support, including document preparation, application review, and interview preparation.",
        },
        {
          question: "Do you offer accommodation assistance?",
          answer:
            "Yes, we help students find suitable accommodation options, whether university housing or private rentals, and provide guidance on living arrangements.",
        },
        {
          question: "What support services do you provide?",
          answer:
            "We offer end-to-end support including program selection, application assistance, visa guidance, pre-departure orientation, and ongoing support throughout your study period.",
        },
      ],
    },
  ];

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-32 relative overflow-hidden bg-gradient-to-b from-yellow-50 to-white">
      {/* Decorative elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(234,179,8,0.05),transparent_30%)]" />
      <div className="absolute top-40 -right-20 w-64 h-64 rounded-full bg-amber-400/5 blur-3xl" />
      <div className="absolute bottom-40 -left-20 w-64 h-64 rounded-full bg-primary/5 blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <FadeIn>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-amber-500 bg-clip-text text-transparent">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Find answers to common questions about studying abroad
            </p>
          </div>
        </FadeIn>

        <div className="max-w-4xl mx-auto">
          <Tabs defaultValue="application" className="w-full">
            <div className="flex justify-center mb-10">
              <TabsList className="p-1 bg-white border rounded-full shadow-sm">
                {faqCategories.map((category) => (
                  <TabsTrigger
                    key={category.name}
                    value={category.name}
                    className="rounded-full px-6 py-2 data-[state=active]:bg-primary data-[state=active]:text-white transition-all"
                  >
                    <span className="mr-2">{category.icon}</span>
                    {category.label}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            {faqCategories.map((category) => (
              <TabsContent
                key={category.name}
                value={category.name}
                className="mt-0"
              >
                <StaggerChildren className="space-y-4">
                  {category.questions.map((faq, index) => {
                    const isOpen = openIndex === index;
                    return (
                      <motion.div
                        key={index}
                        className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          duration: 0.3,
                          delay: index * 0.1,
                        }}
                      >
                        <motion.button
                          className={`w-full flex items-center justify-between p-6 text-left focus:outline-none hover:bg-gray-50 transition-colors ${
                            isOpen ? "bg-gray-50" : ""
                          }`}
                          onClick={() => toggleAccordion(index)}
                          whileTap={{ scale: 0.99 }}
                        >
                          <div className="flex items-center">
                            <div
                              className={`flex-shrink-0 w-10 h-10 rounded-full mr-4 ${category.color} flex items-center justify-center`}
                            >
                              <HelpCircle className="h-5 w-5" />
                            </div>
                            <h3 className="text-lg font-medium">
                              {faq.question}
                            </h3>
                          </div>
                          <div className="ml-4">
                            {isOpen ? (
                              <ChevronUp className="h-5 w-5 text-primary" />
                            ) : (
                              <ChevronDown className="h-5 w-5 text-gray-400" />
                            )}
                          </div>
                        </motion.button>

                        <AnimatePresence>
                          {isOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3 }}
                              className="overflow-hidden"
                            >
                              <div className="px-6 py-4 pb-6 border-t border-gray-100">
                                <p className="text-gray-600 leading-relaxed">
                                  {faq.answer}
                                </p>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    );
                  })}
                </StaggerChildren>
              </TabsContent>
            ))}
          </Tabs>

          <div className="mt-16 text-center">
            <div className="inline-block px-8 py-6 bg-white rounded-2xl shadow-sm border border-gray-100">
              <p className="text-gray-700 font-medium mb-2">
                Have more questions? We're here to help!
              </p>
              <button className="bg-primary hover:bg-primary/90 text-white font-medium py-3 px-8 rounded-full transition-all shadow-sm hover:shadow-md transform hover:-translate-y-0.5">
                Contact an Advisor
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
