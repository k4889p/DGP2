
import React, { useState, useEffect } from 'react';
import { Menu, X, Home, Info, Building, MessageSquare, Phone } from 'lucide-react';
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
    
    // Close menu on resize (if desktop view appears)
    const handleResize = () => {
      if (window.innerWidth >= 768 && isOpen) {
        setIsOpen(false);
      }
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, [scrolled, isOpen]);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (isOpen && !target.closest('#mobile-menu') && !target.closest('#menu-toggle')) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const navItems = [
    { name: 'Home', href: '#home', icon: <Home size={16} className="mr-1" /> },
    { name: 'About', href: '#about', icon: <Info size={16} className="mr-1" /> },
    { name: 'Properties', href: '#properties', icon: <Building size={16} className="mr-1" /> },
    { name: 'Testimonials', href: '#testimonials', icon: <MessageSquare size={16} className="mr-1" /> },
    { name: 'Contact', href: '#contact', icon: <Phone size={16} className="mr-1" /> },
  ];

  return (
    <nav 
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out',
        scrolled ? 'glass py-2' : 'bg-transparent py-4'
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#home" className="flex items-center z-50 relative">
          <div className={cn(
            "flex items-center transition-all duration-300",
            scrolled ? "scale-90" : "scale-100"
          )}>
            <img 
              src="/lovable-uploads/e8ce2bdc-c6f8-491f-b9d7-9e31b6124da9.png" 
              alt="DPM Properties Logo" 
              className="h-14 mr-3" 
            />
            <div className="flex flex-col items-start">
              <h1 className="font-bold text-xl leading-tight text-gray-900">
                <span className="text-cherry-600">DPM</span> Properties
              </h1>
              <p className="text-sm font-medium text-gray-600 tracking-wide leading-tight">
                Real Estate
              </p>
            </div>
          </div>
        </a>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-gray-800 hover:text-cherry-500 transition-colors duration-200 font-medium flex items-center group"
            >
              <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 transform -translate-x-2 group-hover:translate-x-0">
                {item.icon}
              </span>
              <span>{item.name}</span>
            </a>
          ))}
        </div>
        
        {/* Contact Button */}
        <a
          href="#contact"
          className="hidden md:flex cherry-gradient text-white font-medium py-2 px-6 rounded-full hover:shadow-lg transition-all duration-300 items-center hover:scale-105"
        >
          <Phone size={16} className="mr-2" />
          Get in touch
        </a>
        
        {/* Mobile Menu Button */}
        <button
          id="menu-toggle"
          onClick={toggleMenu}
          className="md:hidden text-gray-800 hover:text-cherry-500 transition-colors duration-200 z-50 relative"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          <div className="relative h-6 w-6 flex items-center justify-center">
            {isOpen ? 
              <X size={24} className="absolute animate-scale-up" /> : 
              <Menu size={24} className="absolute animate-scale-up" />
            }
          </div>
        </button>
      </div>
      
      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={cn(
          'md:hidden fixed inset-0 z-40 bg-white/95 backdrop-blur-sm transform transition-transform duration-300 ease-in-out pt-20',
          isOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <div className="flex flex-col items-center space-y-6 p-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-xl text-gray-800 hover:text-cherry-500 transition-colors duration-200 flex items-center"
              onClick={() => setIsOpen(false)}
            >
              <span className="mr-3 text-cherry-500">
                {item.icon}
              </span>
              {item.name}
            </a>
          ))}
          
          <a
            href="#contact"
            className="cherry-gradient text-white font-medium py-3 px-8 rounded-full mt-4 text-center w-full flex items-center justify-center"
            onClick={() => setIsOpen(false)}
          >
            <Phone size={18} className="mr-2" />
            Get in touch
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
