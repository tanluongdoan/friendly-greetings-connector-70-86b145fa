
import React from 'react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  return (
    <nav className="bg-white px-4 py-4 flex items-center justify-between">
      <div className="text-2xl font-bold">
        <span className="uppercase">La Notté</span>
        <span className="block text-xs uppercase text-gray-500">Nail Studio</span>
      </div>
      
      <div className="hidden md:flex items-center space-x-6">
        <NavItem label="ABOUT" hasDropdown />
        <NavItem label="PAGES" hasDropdown />
        <NavItem label="MENU" />
        <NavItem label="BOOKING" />
        <NavItem label="BLOG" />
        <Button variant="default" className="bg-pink-500 hover:bg-pink-600">CONTACTS</Button>
      </div>
      
      <button className="md:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </nav>
  );
};

const NavItem = ({ label, hasDropdown = false }: { label: string, hasDropdown?: boolean }) => {
  return (
    <div className="relative group">
      <a href="#" className="text-gray-700 hover:text-pink-500 flex items-center">
        {label}
        {hasDropdown && (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4 ml-1">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        )}
      </a>
    </div>
  );
};

export default Navbar;
