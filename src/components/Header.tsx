import React from 'react';
import { Button } from "@/components/ui/button"
import { User, Settings } from 'lucide-react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/">
          <Logo />
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li><Button variant="ghost" asChild><Link to="/">Dashboard</Link></Button></li>
            <li><Button variant="ghost" asChild><Link to="/projects">Projects</Link></Button></li>
            <li><Button variant="ghost" asChild><Link to="/team">Team</Link></Button></li>
            <li><Button variant="ghost" asChild><Link to="/contact">Contact</Link></Button></li>
          </ul>
        </nav>
        <div className="flex space-x-2">
          <Button variant="ghost" size="icon">
            <Settings className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <Link to="/auth">
              <User className="h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;