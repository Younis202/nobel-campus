"use client";

import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Building2, DollarSign, Clock } from "lucide-react";
import { sendToWhatsApp } from "@/lib/form-handlers";

export function ExitIntentPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasShown, setHasShown] = useState(false);
  const [formData, setFormData] = useState({
    address: "",
    name: "",
    phone: "",
    email: "",
  });

  useEffect(() => {
    const showTimer = setTimeout(() => {
      if (!hasShown && !sessionStorage.getItem("exitPopupShown")) {
        setIsOpen(true);
        setHasShown(true);
        sessionStorage.setItem("exitPopupShown", "true");
      }
    }, 5000);

    const handleMouseLeave = (e: MouseEvent) => {
      if (
        e.clientY <= 0 &&
        !hasShown &&
        !sessionStorage.getItem("exitPopupShown")
      ) {
        setIsOpen(true);
        setHasShown(true);
        sessionStorage.setItem("exitPopupShown", "true");
      }
    };

    const mouseTimer = setTimeout(() => {
      document.addEventListener("mouseleave", handleMouseLeave);
    }, 3000);

    sessionStorage.removeItem("exitPopupShown");

    return () => {
      clearTimeout(showTimer);
      clearTimeout(mouseTimer);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [hasShown]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendToWhatsApp(formData, 'Property');
    setIsOpen(false);
    setFormData({
      address: "",
      name: "",
      phone: "",
      email: "",
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Don't Leave Without Your Offer!</DialogTitle>
        </DialogHeader>
        
        <div className="grid grid-cols-3 gap-4 my-6">
          <div className="text-center">
            <DollarSign className="h-8 w-8 mx-auto text-primary mb-2" />
            <p className="text-sm">Get Cash Offer in 24hrs</p>
          </div>
          <div className="text-center">
            <Clock className="h-8 w-8 mx-auto text-primary mb-2" />
            <p className="text-sm">Close in 7 Days</p>
          </div>
          <div className="text-center">
            <Building2 className="h-8 w-8 mx-auto text-primary mb-2" />
            <p className="text-sm">Any Condition</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="address">Property Address</Label>
            <Input
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
              placeholder="Enter your property address"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
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
          
          <div className="space-y-2">
            <Label htmlFor="email">Email Address</Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <Button type="submit" className="w-full">
            Get Your Cash Offer Now
          </Button>
        </form>

        <p className="text-center text-sm text-muted-foreground mt-4">
          By submitting, you agree to receive text messages and emails about your offer at the number provided.
        </p>
      </DialogContent>
    </Dialog>
  );
}