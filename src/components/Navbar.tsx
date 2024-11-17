import React from 'react';
import { Container, Github } from 'lucide-react';

export function Navbar() {
  return (
    <nav className="bg-gray-900/50 backdrop-blur-sm border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Container className="h-8 w-8 text-blue-400" />
            <span className="ml-2 text-xl font-bold">Docker Web</span>
          </div>
          <div className="flex items-center space-x-4">
            <a href="https://github.com" className="hover:text-blue-400 transition-colors">
              <Github className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}