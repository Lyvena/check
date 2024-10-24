import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto px-4 text-center">
        <p>
          © 2024 <a 
            href="https://lyvena.xyz" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline"
          >
            Lyvena.
          </a> All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;