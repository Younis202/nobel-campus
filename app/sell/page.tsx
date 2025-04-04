"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Building2, Clock, DollarSign, CheckCircle2 } from "lucide-react";
import { sendEmail } from "@/lib/email";
import { useToast } from "@/hooks/use-toast";

export default function Sell() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    address: "",
    name: "",
    email: "",
    phone: "",
    propertyType: "",
    message: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const result = await sendEmail(formData, 'Property');
      
      if (result.success) {
        toast({
          title: "Success!",
          description: "We've received your information and will contact you soon.",
        });
        
        setFormData({
          address: "",
          name: "",
          email: "",
          phone: "",
          propertyType: "",
          message: ""
        });
      } else {
        toast({
          variant: "destructive",
          title: "Error",
          description: "Failed to send your information. Please try again.",
        });
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Something went wrong. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <main className="py-20">
      {/* Hero Section */}
      <section className="container mx-auto px-4 mb-20">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">Get Your Cash Offer</h1>
        <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto">
          Fill out the form below and we'll provide you with a fair cash offer for your home within 24 hours.
        </p>
      </section>

      {/* Benefits Section */}
      <section className="bg-gray-50 py-16 mb-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <DollarSign className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Fair Cash Offer</h3>
              <p className="text-gray-600">Receive a competitive cash offer based on your home's current market value.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <Clock className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Quick Closing</h3>
              <p className="text-gray-600">Close in as little as 7 days or on your preferred timeline.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <CheckCircle2 className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">No Repairs Needed</h3>
              <p className="text-gray-600">Sell your home as-is. No repairs, cleaning, or upgrades required.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="container mx-auto px-4 max-w-3xl">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label htmlFor="address" className="text-sm font-medium">Property Address</label>
            <Input
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
              placeholder="Enter your property address"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium">Full Name</label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="phone" className="text-sm font-medium">Phone Number</label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium">Email Address</label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="propertyType" className="text-sm font-medium">Property Type</label>
              <select
                id="propertyType"
                name="propertyType"
                value={formData.propertyType}
                onChange={handleChange}
                className="w-full rounded-md border border-input bg-background px-3 py-2"
                required
              >
                <option value="">Select Type</option>
                <option value="single-family">Single Family Home</option>
                <option value="multi-family">Multi-Family Home</option>
                <option value="condo">Condo</option>
                <option value="townhouse">Townhouse</option>
              </select>
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-medium">Additional Information</label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us more about your property and your situation..."
              className="h-32"
            />
          </div>

          <Button type="submit" disabled={isSubmitting} className="w-full">
            {isSubmitting ? "Sending..." : "Get Your Cash Offer"}
          </Button>
        </form>

        <div className="mt-8 text-center text-sm text-gray-500">
          By submitting this form, you agree to be contacted about your property sale.
          We respect your privacy and will never share your information.
        </div>
      </section>
    </main>
  );
}