import React from 'react';
import { Camera, Home, Search, PlusSquare, User } from 'lucide-react';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white border-b border-gray-200 z-50">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Camera className="w-8 h-8" />
          <span className="text-xl font-bold">Visage</span>
        </div>
        
        <div className="hidden md:flex items-center space-x-6">
          <button className="hover:bg-gray-100 p-2 rounded-lg transition-colors">
            <Home className="w-6 h-6" />
          </button>
          <button className="hover:bg-gray-100 p-2 rounded-lg transition-colors">
            <Search className="w-6 h-6" />
          </button>
          <button className="hover:bg-gray-100 p-2 rounded-lg transition-colors">
            <PlusSquare className="w-6 h-6" />
          </button>
          <button className="hover:bg-gray-100 p-2 rounded-lg transition-colors">
            <User className="w-6 h-6" />
          </button>
        </div>
      </div>
    </header>
  );
}