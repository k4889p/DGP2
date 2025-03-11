
import React from 'react';
import { Check } from 'lucide-react';
import FadeIn from './FadeIn';

const About: React.FC = () => {
  const highlights = [
    "10+ years of industry experience",
    "Premium property portfolio",
    "Personalized client experience",
    "Expert market knowledge",
    "Transparent process from start to finish",
    "After-sale support and guidance"
  ];

  return (
    <section id="about" className="section-padding bg-gray-50">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <FadeIn direction="left">
            <div className="relative">
              <div className="bg-white rounded-2xl overflow-hidden shadow-elegant p-3">
                <div className="aspect-w-4 aspect-h-3 rounded-xl overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80" 
                    alt="Kaustubh Parab" 
                    className="object-cover h-full w-full"
                  />
                </div>
              </div>
              <div className="absolute -bottom-8 -right-8 w-32 h-32 cherry-gradient rounded-full flex items-center justify-center text-white font-bold text-xl p-5 text-center leading-tight shadow-lg">
                Trusted Excellence
              </div>
            </div>
          </FadeIn>
          
          <FadeIn direction="right" delay={200}>
            <div>
              <span className="text-cherry-500 font-medium text-sm uppercase tracking-wider">About Us</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-6">
                Elevating Real Estate Experiences at DPM Properties
              </h2>
              
              <p className="text-gray-700 mb-8 leading-relaxed">
                Founded by Kaustubh Parab, DPM Properties is committed to redefining the real estate experience. We combine industry expertise with personalized service to connect discerning clients with exceptional properties that meet their unique needs and preferences.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {highlights.map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="mt-1 flex-shrink-0">
                      <div className="w-5 h-5 rounded-full bg-cherry-500 flex items-center justify-center">
                        <Check size={12} className="text-white" />
                      </div>
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
              
              <a 
                href="#contact" 
                className="inline-block cherry-gradient text-white font-medium px-8 py-3 rounded-full hover:shadow-lg transition-shadow duration-300"
              >
                Connect With Us
              </a>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default About;
