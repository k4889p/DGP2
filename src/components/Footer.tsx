
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Linkedin, ChevronRight } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  const quickLinks = [
    { name: 'Home', to: '/#home' },
    { name: 'About', to: '/#about' },
    { name: 'Properties', to: '/#properties' },
    { name: 'Contact', to: '/#contact' }
  ];
  
  const services = [
    { name: 'Property Buying', to: '/#properties?status=buy' },
    { name: 'Property Selling', to: '/#properties?status=sell' },
    { name: 'Property Renting', to: '/#properties?status=rent' },
    { name: 'Property Management', to: '/#contact' },
    { name: 'Investment Consultation', to: '/#contact' }
  ];
  
  const socialLinks = [
    { icon: <Facebook size={18} />, href: 'https://facebook.com', label: 'Facebook' },
    { icon: <Instagram size={18} />, href: 'https://instagram.com', label: 'Instagram' },
    { icon: <Twitter size={18} />, href: 'https://twitter.com', label: 'Twitter' },
    { icon: <Linkedin size={18} />, href: 'https://linkedin.com', label: 'LinkedIn' }
  ];

  // Handler for smooth scrolling with custom behavior
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80; // Navbar offset
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({top: y, behavior: 'smooth'});
    }
  };

  // Process links to extract IDs for smooth scrolling
  const processLink = (to: string) => {
    if (to.includes('#')) {
      const parts = to.split('#');
      return parts[parts.length - 1];
    }
    return '';
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto">
        <div className="py-16 px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="mb-5">
              <Link to="/#home" className="flex items-center">
                <span className="text-cherry-500 font-bold text-2xl tracking-tight">DPM</span>
                <span className="text-white font-medium text-2xl ml-1">Properties</span>
              </Link>
            </div>
            
            <p className="text-gray-400 mb-6 leading-relaxed">
              Premium real estate experiences curated by Mrs. Deepali Parab. Connecting discerning clients with exceptional properties since 2012.
            </p>
            
            <div className="flex space-x-3">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
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
                    href={link.to}
                    onClick={(e) => handleClick(e, processLink(link.to))}
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
                    href={service.to}
                    onClick={(e) => handleClick(e, processLink(service.to))}
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
              G/061, Shagun Arcade, Opp.HDFC Bank,<br />
          Before Dindoshi Bus Depot, Filmcity Road, <br />
          Malad (E), Mumbai-400 097
              </p>
              <p className="text-gray-400">
                <span className="block mb-1">Email: dpmproperties20@gmail.com</span>
                <span>Phone: +91 90762 52228</span>
              </p>
              <a 
                href="#contact" 
                onClick={(e) => handleClick(e, 'contact')}
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
