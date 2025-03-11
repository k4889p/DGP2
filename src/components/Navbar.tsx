
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Properties', href: '#properties' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav 
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out',
        scrolled ? 'glass py-3' : 'bg-transparent py-5'
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#home" className="flex items-center">
          <span className="text-cherry-500 font-bold text-2xl tracking-tight">DPM</span>
          <span className="text-gray-900 font-medium text-2xl ml-1">Properties</span>
        </a>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-gray-800 hover:text-cherry-500 transition-colors duration-200 font-medium"
            >
              {item.name}
            </a>
          ))}
        </div>
        
        {/* Contact Button */}
        <a
          href="#contact"
          className="hidden md:block cherry-gradient text-white font-medium py-2 px-6 rounded-full hover:shadow-lg transition-shadow duration-300"
        >
          Get in touch
        </a>
        
        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-gray-800 hover:text-cherry-500 transition-colors duration-200"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      <div
        className={cn(
          'md:hidden fixed inset-0 z-40 bg-white transform transition-transform duration-300 ease-in-out pt-20',
          isOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <div className="flex flex-col items-center space-y-8 p-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-xl text-gray-800 hover:text-cherry-500 transition-colors duration-200"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </a>
          ))}
          <a
            href="#contact"
            className="cherry-gradient text-white font-medium py-3 px-8 rounded-full mt-4 text-center w-full"
            onClick={() => setIsOpen(false)}
          >
            Get in touch
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
