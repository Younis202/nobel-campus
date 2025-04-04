"use client";

import { FadeIn } from "@/components/animations/fade-in";
import { StaggerChildren } from "@/components/animations/stagger-children";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Blog() {
  const posts = [
    {
      title: "How to Sell Your House Fast in California",
      excerpt: "Learn the best strategies for selling your house quickly in today's California real estate market...",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      date: "March 15, 2024",
      category: "Selling Tips"
    },
    {
      title: "5 Signs It's Time to Sell Your Investment Property",
      excerpt: "Discover the key indicators that suggest it might be the right time to sell your investment property...",
      image: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      date: "March 10, 2024",
      category: "Investment"
    },
    {
      title: "Avoiding Foreclosure: Your Options Explained",
      excerpt: "Understanding your options when facing foreclosure and how to make the best decision for your situation...",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      date: "March 5, 2024",
      category: "Foreclosure"
    }
  ];

  return (
    <main className="py-20">
      <section className="container mx-auto px-4 mb-20">
        <FadeIn>
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
            Real Estate Insights & Tips
          </h1>
          <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto">
            Expert advice and insights about selling your home and the California real estate market.
          </p>
        </FadeIn>
      </section>

      <section className="container mx-auto px-4 mb-20">
        <StaggerChildren className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <article key={index} className="bg-white rounded-lg shadow-sm overflow-hidden">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-sm text-primary font-medium">{post.category}</span>
                  <span className="text-sm text-gray-500">{post.date}</span>
                </div>
                <h2 className="text-xl font-semibold mb-3">{post.title}</h2>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <Button variant="outline" className="w-full" asChild>
                  <Link href="#">
                    Read More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </article>
          ))}
        </StaggerChildren>
      </section>
    </main>
  );
}