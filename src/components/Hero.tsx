
import React from 'react';
import { ChevronDown } from 'lucide-react';
import AnimatedText from './AnimatedText';
import FadeIn from './FadeIn';

const Hero: React.FC = () => {
  return (
    <section 
      id="home" 
      className="relative h-screen flex items-center justify-center overflow-hidden bg-white"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 z-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(#E61E2A_1px,transparent_1px)] [background-size:20px_20px]"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          <FadeIn className="mb-3">
            <span className="inline-block px-4 py-1.5 bg-cherry-50 text-cherry-600 rounded-full text-sm font-medium">
              Your Property Journey Begins Here
            </span>
          </FadeIn>
          
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-gray-900 tracking-tight mb-6 leading-tight">
            <AnimatedText 
              text="Discover Your Perfect Property with DPM" 
              delay={300}
            />
          </h1>
          
          <FadeIn delay={600} className="mb-10">
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Premium properties handpicked for discerning clients. Experience excellence in real estate with Kaustubh Parab and the DPM Properties team.
            </p>
          </FadeIn>
          
          <FadeIn delay={900}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href="#properties" 
                className="cherry-gradient text-white font-medium px-8 py-3 rounded-full text-lg shadow-lg hover:shadow-xl transition-shadow duration-300 min-w-[180px]"
              >
                Browse Properties
              </a>
              <a 
                href="#about" 
                className="bg-white text-gray-900 border border-gray-200 font-medium px-8 py-3 rounded-full text-lg hover:bg-gray-50 transition-colors duration-300 min-w-[180px]"
              >
                Learn More
              </a>
            </div>
          </FadeIn>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce-subtle">
        <a href="#about" className="flex flex-col items-center text-gray-500 hover:text-cherry-500 transition-colors duration-200">
          <span className="text-sm font-medium mb-2">Scroll Down</span>
          <ChevronDown size={20} />
        </a>
      </div>
    </section>
  );
};

export default Hero;
