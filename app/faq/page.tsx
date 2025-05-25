"use client";

import { FadeIn } from "@/components/animations/fade-in";
import { StaggerChildren } from "@/components/animations/stagger-children";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQ() {
  const faqs = [
    {
      question: "How does your home buying process work?",
      answer: "Our process is simple: 1) Submit your property details through our form, 2) We'll analyze your property and make a fair cash offer within 24 hours, 3) If you accept, we'll close on your timeline - as quick as 7 days or on your schedule."
    },
    {
      question: "Do you buy houses in any condition?",
      answer: "Yes! We buy houses in any condition - from perfect to severely damaged. No repairs or cleaning needed. We handle everything."
    },
    {
      question: "Are there any fees or commissions?",
      answer: "No! We don't charge any fees or commissions. The offer we make is what you get (minus standard title company fees)."
    },
    {
      question: "How do you determine your offer price?",
      answer: "We analyze recent comparable sales, current market conditions, estimated repair costs, and location to provide the highest possible cash offer while still allowing for a reasonable profit margin."
    },
    {
      question: "How quickly can you close?",
      answer: "We can close in as little as 7 days since we buy with cash. However, we're happy to work with your timeline if you need more time."
    },
    {
      question: "What types of properties do you buy?",
      answer: "We buy all types of residential properties: single-family homes, multi-family properties, condos, townhouses, and even vacant land."
    },
    {
      question: "Do you buy properties with tenants?",
      answer: "Yes! We buy properties with tenants in place and handle all aspects of property management after closing."
    },
    {
      question: "What areas do you serve?",
      answer: "We buy houses throughout California, focusing on Los Angeles, Santa Clarita, San Fernando Valley, Ventura County, Orange County, Riverside, and surrounding areas."
    }
  ];

  return (
    <main className="py-20">
      <section className="container mx-auto px-4 mb-20">
        <FadeIn>
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto">
            Get answers to common questions about selling your house to KNG Home Buyers.
          </p>
        </FadeIn>
      </section>

      <section className="container mx-auto px-4 max-w-3xl mb-20">
        <StaggerChildren>
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-white rounded-lg shadow-sm">
                <AccordionTrigger className="px-6">{faq.question}</AccordionTrigger>
                <AccordionContent className="px-6 pb-4">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </StaggerChildren>
      </section>
    </main>
  );
}