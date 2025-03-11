
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import FadeIn from './FadeIn';
import { cn } from '@/lib/utils';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  text: string;
  image: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: 'Priya Sharma',
    role: 'Homeowner',
    text: 'Working with Kaustubh and DPM Properties was a game-changer for us. Their attention to detail and understanding of our needs helped us find our dream home much faster than we expected. The entire process was smooth and transparent.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80'
  },
  {
    id: 2,
    name: 'Rajesh Patel',
    role: 'Property Investor',
    text: 'As a seasoned investor, I have high standards when it comes to property investments. DPM Properties consistently delivers opportunities that align with my investment strategy. Their market insight and professionalism are unmatched.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80'
  },
  {
    id: 3,
    name: 'Ananya Desai',
    role: 'First-time Buyer',
    text: 'As a first-time homebuyer, I was nervous about the entire process. Kaustubh took the time to explain everything and guided me through each step. Their patience and expertise made buying my first apartment a joyful experience.',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80'
  }
];

const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % TESTIMONIALS.length);
  };
  
  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  return (
    <section id="testimonials" className="section-padding cherry-gradient text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-15">
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px]"></div>
      </div>
      
      <div className="container mx-auto relative z-10">
        <FadeIn>
          <div className="text-center mb-16">
            <span className="text-white/80 font-medium text-sm uppercase tracking-wider">Testimonials</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-2 mb-6">
              What Our Clients Say
            </h2>
            <p className="text-lg text-white/80 max-w-3xl mx-auto">
              Hear from our satisfied clients about their experience working with DPM Properties and Kaustubh Parab.
            </p>
          </div>
        </FadeIn>
        
        <div className="max-w-6xl mx-auto">
          <div className="relative">
            <FadeIn key={activeIndex} direction="none">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 md:p-12 relative shadow-elegant">
                <div className="absolute top-6 left-6 text-cherry-100 opacity-30">
                  <Quote size={60} />
                </div>
                
                <div className="relative z-10">
                  <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                    <div className="md:w-1/4 flex-shrink-0">
                      <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white/20 mx-auto">
                        <img 
                          src={TESTIMONIALS[activeIndex].image} 
                          alt={TESTIMONIALS[activeIndex].name} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    
                    <div className="md:w-3/4">
                      <blockquote className="text-lg md:text-xl text-center md:text-left mb-6 font-light leading-relaxed">
                        "{TESTIMONIALS[activeIndex].text}"
                      </blockquote>
                      
                      <div className="text-center md:text-left">
                        <div className="font-bold text-lg">{TESTIMONIALS[activeIndex].name}</div>
                        <div className="text-white/70">{TESTIMONIALS[activeIndex].role}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
            
            <div className="flex justify-center mt-8 space-x-4">
              <button 
                onClick={prevTestimonial}
                className="w-10 h-10 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20 transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={20} />
              </button>
              
              <div className="flex space-x-2">
                {TESTIMONIALS.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={cn(
                      "w-3 h-3 rounded-full transition-all duration-300",
                      index === activeIndex ? "bg-white scale-110" : "bg-white/30"
                    )}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
              
              <button 
                onClick={nextTestimonial}
                className="w-10 h-10 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20 transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
