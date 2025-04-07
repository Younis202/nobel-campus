"use client";

import { ClipboardCheck, Calculator, HandshakeIcon, Banknote } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FadeIn } from "@/components/animations/fade-in";
import { StaggerChildren } from "@/components/animations/stagger-children";

export default function HowItWorks() {
  const steps = [
    {
      icon: <ClipboardCheck className="h-12 w-12 text-primary" />,
      title: "Submit Property Details",
      description: "Tell us about your property - any condition, any situation."
    },
    {
      icon: <Calculator className="h-12 w-12 text-primary" />,
      title: "Get Your Offer",
      description: "We analyze local market data to provide you with the highest possible cash offer within 24 hours."
    },
    {
      icon: <Banknote className="h-12 w-12 text-primary" />,
      title: "Choose Your Timeline",
      description: "Pick your closing date. We can close in as little as 7 days or on your schedule."
    },
    {
      icon: <HandshakeIcon className="h-12 w-12 text-primary" />,
      title: "Get Paid",
      description: "Walk away with cash in hand. No repairs, no fees, no commissions."
    }
  ];

  const faqs = [
    {
      question: "How do you determine your offer price?",
      answer: "We analyze recent sales data, current market conditions, and property condition to provide the highest possible cash offer while still allowing for a reasonable profit margin after repairs and improvements."
    },
    {
      question: "Do you buy properties in any condition?",
      answer: "Yes! We buy houses in any condition - from like-new to severe damage. No repairs or cleaning needed."
    },
    {
      question: "Are there any fees or commissions?",
      answer: "Never. We cover all closing costs, and there are no realtor commissions. The offer we make is the amount you receive (minus standard title company fees)."
    },
    {
      question: "How quickly can you close?",
      answer: "We can close in as little as 7 days since we buy with cash. However, we're happy to work with your timeline if you need more time."
    },
    {
      question: "What types of properties do you buy?",
      answer: "We buy single-family homes, multi-family properties, condos, townhouses, and even vacant land. Any property type in any condition."
    },
    {
      question: "What if I have tenants?",
      answer: "No problem! We buy properties with tenants in place and handle all aspects of property management after closing."
    }
  ];

  return (
    <main className="py-20">
      {/* Hero Section */}
      <section className="container mx-auto px-4 mb-20">
        <FadeIn>
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">How We Buy Your House</h1>
          <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto">
            We've streamlined the home selling process to make it quick and hassle-free. Here's how we turn your property into cash in your pocket.
          </p>
        </FadeIn>
      </section>

      {/* Steps Section */}
      <section className="container mx-auto px-4 mb-20">
        <StaggerChildren className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center p-6 bg-white rounded-lg shadow-sm">
              <div className="flex justify-center mb-6">{step.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </StaggerChildren>
      </section>

      {/* FAQ Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <FadeIn>
            <h2 className="text-3xl font-bold text-center mb-12">Common Questions</h2>
          </FadeIn>
          <div className="max-w-3xl mx-auto">
            <StaggerChildren delayStep={0.1}>
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger>{faq.question}</AccordionTrigger>
                    <AccordionContent>{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </StaggerChildren>
          </div>
        </div>
      </section>
    </main>
  );
}