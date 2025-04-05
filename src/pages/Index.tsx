
import React, { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Properties from '@/components/Properties';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index: React.FC = () => {
  const [searchParams, setSearchParams] = useState({
    propertyType: '',
    propertyStatus: '',
    location: ''
  });

  useEffect(() => {
    // Smooth scrolling for anchor links with offset for fixed navbar
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const target = document.querySelector(this.getAttribute('href') as string);
        if (target) {
          const headerOffset = 80; // Offset for fixed navbar
          const elementPosition = (target as HTMLElement).getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
          
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      });
    });
    
    // Initial animations
    const animateOnLoad = () => {
      document.body.classList.add('loaded');
    };
    
    if (document.readyState === 'complete') {
      animateOnLoad();
    } else {
      window.addEventListener('load', animateOnLoad);
      return () => window.removeEventListener('load', animateOnLoad);
    }
    
    // Handle search params from URL
    const params = new URLSearchParams(window.location.search);
    const type = params.get('type');
    const status = params.get('status');
    const location = params.get('location');
    
    if (type || status || location) {
      setSearchParams({
        propertyType: type || '',
        propertyStatus: status || '',
        location: location || ''
      });
      
      // If search params exist, scroll to properties section
      setTimeout(() => {
        const propertiesSection = document.getElementById('properties');
        if (propertiesSection) {
          const headerOffset = 80;
          const elementPosition = propertiesSection.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
          
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }, 500);
    }
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Properties />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
