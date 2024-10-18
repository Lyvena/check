import React from 'react';
import { Button } from "@/components/ui/button"
import { User, Settings } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-blue-600">AI-PGF</div>
        <nav>
          <ul className="flex space-x-4">
            <li><Button variant="ghost">Dashboard</Button></li>
            <li><Button variant="ghost">Projects</Button></li>
            <li><Button variant="ghost">Team</Button></li>
          </ul>
        </nav>
        <div className="flex space-x-2">
          <Button variant="ghost" size="icon">
            <Settings className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <User className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;