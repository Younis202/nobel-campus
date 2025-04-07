"use client";

import { Card } from "@/components/ui/card";

export default function AccountPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">My Account</h1>
      
      <div className="grid gap-6">
        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Account Details</h2>
          <p className="text-gray-600">
            Your account information will be displayed here.
          </p>
        </Card>
      </div>
    </main>
  );
}