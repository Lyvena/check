import React from 'react';
import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/use-toast"
import Dashboard from '@/components/Dashboard';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Index = () => {
  const { toast } = useToast()

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-center">Welcome to AI-PGF Checking Team</h1>
        <Dashboard />
        <div className="mt-8 text-center">
          <Button 
            onClick={() => {
              toast({
                title: "Welcome!",
                description: "Thanks for joining the AI-PGF Checking Team.",
              })
            }}
          >
            Join the Team
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;