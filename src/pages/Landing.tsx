import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Shield, CheckCircle, Users } from 'lucide-react';

const Landing = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <section className="bg-gradient-to-b from-blue-50 to-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold text-blue-600 mb-6">AI-PGF Checking Team</h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Join our team of experts in reviewing and validating AI projects for maximum impact and efficiency.
            </p>
            <Link to="/auth">
              <Button size="lg" className="text-lg px-8">Get Started</Button>
            </Link>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-6">
                <Shield className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Quality Assurance</h3>
                <p className="text-gray-600">Ensure the highest standards in AI project validation</p>
              </div>
              <div className="text-center p-6">
                <CheckCircle className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <p className="text-xl font-semibold mb-2">Expert Review</p>
                <p className="text-gray-600">Detailed analysis by experienced professionals</p>
              </div>
              <div className="text-center p-6">
                <Users className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Collaborative Team</h3>
                <p className="text-gray-600">Work with a network of skilled reviewers</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Landing;