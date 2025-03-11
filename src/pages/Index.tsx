
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Properties from '@/components/Properties';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index: React.FC = () => {
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
