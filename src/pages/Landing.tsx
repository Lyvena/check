import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Shield, CheckCircle, Users, Rocket, Brain, Zap, ArrowRight } from 'lucide-react';

const Landing = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <section className="bg-gradient-to-b from-blue-50 to-white py-20">
          <div className="container mx-auto px-4 text-center">
            <div className="animate-fade-in-down">
              <h1 className="text-5xl font-bold text-blue-600 mb-6">AI-PGF Checking Team</h1>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Join our team of experts in reviewing and validating AI projects for maximum impact and efficiency.
                Powered by advanced AI technology to ensure thorough and accurate assessments.
              </p>
              <Link to="/auth">
                <Button size="lg" className="text-lg px-8 group transition-all duration-300 hover:scale-105">
                  Get Started 
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-6 transform hover:scale-105 transition-transform duration-300">
                <Shield className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Quality Assurance</h3>
                <p className="text-gray-600">Ensure the highest standards in AI project validation with our advanced checking system</p>
              </div>
              <div className="text-center p-6 transform hover:scale-105 transition-transform duration-300">
                <Brain className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">AI-Powered Analysis</h3>
                <p className="text-gray-600">Leverage cutting-edge AI technology for comprehensive project evaluation</p>
              </div>
              <div className="text-center p-6 transform hover:scale-105 transition-transform duration-300">
                <Users className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Collaborative Team</h3>
                <p className="text-gray-600">Work with a network of skilled reviewers and AI assistants</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Our AI Features</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <Rocket className="w-10 h-10 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Automated Assessment</h3>
                <p className="text-gray-600">AI-powered analysis of project documentation and code quality</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <Zap className="w-10 h-10 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Smart Recommendations</h3>
                <p className="text-gray-600">Get intelligent suggestions for project improvements</p>
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