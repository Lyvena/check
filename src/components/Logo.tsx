import React from 'react';
import { Shield, Star } from 'lucide-react';

const Logo = () => {
  return (
    <div className="flex items-center space-x-2">
      <div className="relative">
        <Shield className="h-8 w-8 text-blue-600" />
        <Star className="h-4 w-4 text-yellow-400 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
      </div>
      <span className="text-2xl font-bold text-blue-600">AI-PGF</span>
    </div>
  );
};

export default Logo;