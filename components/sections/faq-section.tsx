"use client";

import { FadeIn } from "@/components/animations/fade-in";
import { StaggerChildren } from "@/components/animations/stagger-children";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FaqSection() {
  const faqs = [
    {
      question: "What are the admission requirements?",
      answer: "Requirements vary by program and university but generally include academic transcripts, language proficiency tests (IELTS/TOEFL), and letters of recommendation. Contact us for specific program requirements."
    },
    {
      question: "How much does it cost to study abroad?",
      answer: "Costs vary by country and program. Many universities offer scholarships and financial aid. We'll help you find programs within your budget and available funding opportunities."
    },
    {
      question: "Can you help with visa applications?",
      answer: "Yes! We provide comprehensive visa application support, including document preparation, application review, and interview preparation."
    },
    {
      question: "How long does the application process take?",
      answer: "The timeline varies but typically takes 2-4 months from application to acceptance. We recommend starting the process early to ensure enough time for visa processing."
    },
    {
      question: "Do you offer accommodation assistance?",
      answer: "Yes, we help students find suitable accommodation options, whether university housing or private rentals, and provide guidance on living arrangements."
    },
    {
      question: "What support services do you provide?",
      answer: "We offer end-to-end support including program selection, application assistance, visa guidance, pre-departure orientation, and ongoing support throughout your study period."
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50/80 to-white/20 pointer-events-none" />
      
      <div className="container mx-auto px-4">
        <FadeIn>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Find answers to common questions about studying abroad
            </p>
          </div>
        </FadeIn>

        <div className="max-w-3xl mx-auto">
          <StaggerChildren>
            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-white rounded-lg shadow-sm border border-gray-100"
                >
                  <AccordionTrigger className="px-6 hover:no-underline">
                    <span className="text-left">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </StaggerChildren>
        </div>
      </div>
    </section>
  );
}