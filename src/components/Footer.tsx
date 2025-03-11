
import React from 'react';
import { Facebook, Instagram, Twitter, Linkedin, ChevronRight } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Properties', href: '#properties' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' }
  ];
  
  const services = [
    { name: 'Property Buying', href: '#' },
    { name: 'Property Selling', href: '#' },
    { name: 'Property Renting', href: '#' },
    { name: 'Property Management', href: '#' },
    { name: 'Investment Consultation', href: '#' }
  ];
  
  const socialLinks = [
    { icon: <Facebook size={18} />, href: '#', label: 'Facebook' },
    { icon: <Instagram size={18} />, href: '#', label: 'Instagram' },
    { icon: <Twitter size={18} />, href: '#', label: 'Twitter' },
    { icon: <Linkedin size={18} />, href: '#', label: 'LinkedIn' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto">
        <div className="py-16 px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="mb-5">
              <a href="#home" className="flex items-center">
                <span className="text-cherry-500 font-bold text-2xl tracking-tight">DPM</span>
                <span className="text-white font-medium text-2xl ml-1">Properties</span>
              </a>
            </div>
            
            <p className="text-gray-400 mb-6 leading-relaxed">
              Premium real estate experiences curated by Kaustubh Parab. Connecting discerning clients with exceptional properties since 2012.
            </p>
            
            <div className="flex space-x-3">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="w-9 h-9 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-cherry-500 hover:text-white transition-colors duration-300"
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-5">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-gray-400 hover:text-cherry-500 transition-colors duration-200 flex items-center"
                  >
                    <ChevronRight size={16} className="mr-2" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-5">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a 
                    href={service.href} 
                    className="text-gray-400 hover:text-cherry-500 transition-colors duration-200 flex items-center"
                  >
                    <ChevronRight size={16} className="mr-2" />
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-5">Get In Touch</h3>
            <div className="space-y-4">
              <p className="text-gray-400">
                DPM Properties Office<br />
                Mumbai, Maharashtra, India
              </p>
              <p className="text-gray-400">
                <span className="block mb-1">Email: contact@dpmproperties.com</span>
                <span>Phone: +91 98765 43210</span>
              </p>
              <a 
                href="#contact" 
                className="cherry-gradient inline-block text-white font-medium px-6 py-2 rounded-full hover:shadow-lg transition-shadow duration-300 text-sm"
              >
                Send Inquiry
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <div className="border-t border-gray-800 py-6 text-center text-gray-400 text-sm">
        <div className="container mx-auto px-4">
          <p>
            © {currentYear} DPM Properties. All rights reserved. Designed & Developed by Kaustubh Parab.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
