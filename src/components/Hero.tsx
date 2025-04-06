
import React, { useState } from 'react';
import { ChevronDown, Search, MapPin, Home, Tag, Building } from 'lucide-react';
import AnimatedText from './AnimatedText';
import FadeIn from './FadeIn';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const Hero: React.FC = () => {
  const [propertyType, setPropertyType] = useState<string>("");
  const [propertyStatus, setPropertyStatus] = useState<string>("");
  const [location, setLocation] = useState<string>("");

  const locations = [
    { value: "goregaon", label: "Goregaon" },
    { value: "andheri", label: "Andheri" }
  ];

  const propertyTypes = [
    { value: "apartment", label: "Apartment" },
    { value: "commercial", label: "Commercial" }
  ];

  const propertyStatuses = [
    { value: "buy", label: "Buy" },
    { value: "sell", label: "Sell" },
    { value: "rent", label: "Rent" }
  ];

  const handleSearch = () => {
    const propertiesSection = document.getElementById('properties');
    if (propertiesSection) {
      const headerOffset = 80;
      const elementPosition = propertiesSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });

      console.log("Search filters:", { propertyType, propertyStatus, location });
    }
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center py-20 overflow-hidden bg-gradient-to-b from-cherry-100/50 to-cherry-200/30"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(#E61E2A_1.5px,transparent_1.5px)] [background-size:30px_30px] opacity-10"></div>
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-cherry-200 rounded-full filter blur-[100px] opacity-20 animate-pulse"></div>
        <div className="absolute top-1/3 -right-24 w-96 h-96 bg-cherry-300 rounded-full filter blur-[120px] opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
      
      {/* Content container with overlay */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
          
          {/* Left side text content - 3 columns */}
          <div className="lg:col-span-3 text-left">
            <FadeIn className="mb-6" direction="left">
              <span className="inline-block px-6 py-2 bg-cherry-100 text-cherry-800 rounded-full text-lg font-bold shadow-lg border-l-8 border-cherry-500">
                Mumbai's Premium Property Solutions
              </span>
            </FadeIn>
            
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-6 leading-none">
              <AnimatedText 
                text="FIND YOUR"
                delay={150}
                className="text-gray-900"
              />
              <span className="block mt-2 text-7xl md:text-8xl lg:text-9xl font-black">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cherry-600 via-cherry-500 to-cherry-700 drop-shadow-[0_5px_5px_rgba(230,30,42,0.2)]">
                  DREAM HOME
                </span>
              </span>
            </h1>
            
            <FadeIn delay={600} className="mb-8" direction="up">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-cherry-500 to-cherry-600 opacity-50 blur-lg rounded-lg"></div>
                <div className="relative bg-white/80 backdrop-blur-sm p-6 rounded-lg border border-cherry-500/20 shadow-lg">
                  <h3 className="font-serif italic text-4xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-cherry-600 to-cherry-500">
                    REAL ESTATE
                  </h3>
                  <p className="text-xl font-light text-gray-800 leading-relaxed">
                    Expert solutions for your property needs. Premium properties handpicked for discerning clients in the heart of Mumbai.
                  </p>
                </div>
              </div>
            </FadeIn>
            
            {/* Stats and highlights */}
            <FadeIn delay={800} className="mt-8">
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-white/30 backdrop-blur-md rounded-lg p-4 border-l-4 border-cherry-500 transform hover:-translate-y-1 transition-all duration-300">
                  <div className="flex items-center space-x-2">
                    <Home className="text-cherry-600" size={28} />
                    <div>
                      <div className="text-gray-900 font-bold text-2xl">200+</div>
                      <div className="text-gray-700 text-sm">Properties</div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white/30 backdrop-blur-md rounded-lg p-4 border-l-4 border-cherry-500 transform hover:-translate-y-1 transition-all duration-300">
                  <div className="flex items-center space-x-2">
                    <MapPin className="text-cherry-600" size={28} />
                    <div>
                      <div className="text-gray-900 font-bold text-2xl">Prime</div>
                      <div className="text-gray-700 text-sm">Locations</div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white/30 backdrop-blur-md rounded-lg p-4 border-l-4 border-cherry-500 transform hover:-translate-y-1 transition-all duration-300">
                  <div className="flex items-center space-x-2">
                    <Tag className="text-cherry-600" size={28} />
                    <div>
                      <div className="text-gray-900 font-bold text-2xl">Best</div>
                      <div className="text-gray-700 text-sm">Value</div>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
          
          {/* Right side - Image and search panel - 2 columns */}
          <div className="lg:col-span-2">
            <FadeIn delay={300} direction="right">
              <div className="relative mb-8">
                {/* Decorative elements */}
                <div className="absolute -inset-4 bg-gradient-to-r from-cherry-300 to-cherry-400 rounded-2xl opacity-30 blur-lg"></div>
                <div className="absolute -inset-0.5 bg-gradient-to-r from-cherry-400 to-cherry-500 rounded-2xl opacity-50"></div>
                
                {/* Image container */}
                <div className="relative overflow-hidden rounded-2xl border-2 border-cherry-500/20 shadow-lg">
                  <div className="absolute inset-0 bg-black/10 z-10"></div>
                  <img 
                    src="/lovable-uploads/f13c4912-feb3-4a43-b6ef-aa00a2b3585b.png" 
                    alt="Luxury Property" 
                    loading="lazy"
                    className="w-full h-[350px] object-cover transform transition-transform duration-700 hover:scale-110"
                  />
                  
                  {/* Badge overlay */}
                  <div className="absolute top-4 right-4 bg-cherry-600/90 backdrop-blur-sm text-white px-4 py-2 rounded-full font-bold text-sm z-20">
                    Premium Selection
                  </div>
                </div>
              </div>
              
              {/* Property Search Box */}
              <div className="bg-white/80 backdrop-blur-lg p-6 rounded-2xl border border-cherry-500/10 shadow-2xl">
                <h3 className="text-xl font-semibold mb-4 text-gray-900 text-center">
                  <span className="border-b-2 border-cherry-500 pb-1">Find Your Perfect Property</span>
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-300 flex items-center">
                      <Building size={14} className="mr-1 text-cherry-400" />
                      Property Type
                    </label>
                    <Select value={propertyType} onValueChange={setPropertyType}>
                      <SelectTrigger className="w-full bg-gray-800/70 border-gray-700 text-white">
                        <SelectValue placeholder="Select type" />
                      </SelectTrigger>
                      <SelectContent className="bg-gray-800 text-white border-gray-700">
                        {propertyTypes.map((type) => (
                          <SelectItem key={type.value} value={type.value}>
                            {type.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-300 flex items-center">
                      <Tag size={14} className="mr-1 text-cherry-400" />
                      Looking to
                    </label>
                    <Select value={propertyStatus} onValueChange={setPropertyStatus}>
                      <SelectTrigger className="w-full bg-gray-800/70 border-gray-700 text-white">
                        <SelectValue placeholder="Buy/Sell/Rent" />
                      </SelectTrigger>
                      <SelectContent className="bg-gray-800 text-white border-gray-700">
                        {propertyStatuses.map((status) => (
                          <SelectItem key={status.value} value={status.value}>
                            {status.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-300 flex items-center">
                      <MapPin size={14} className="mr-1 text-cherry-400" />
                      Location
                    </label>
                    <Select value={location} onValueChange={setLocation}>
                      <SelectTrigger className="w-full bg-gray-800/70 border-gray-700 text-white">
                        <SelectValue placeholder="Select area" />
                      </SelectTrigger>
                      <SelectContent className="bg-gray-800 text-white border-gray-700">
                        {locations.map((loc) => (
                          <SelectItem key={loc.value} value={loc.value}>
                            {loc.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <button 
                  onClick={handleSearch}
                  className="w-full bg-gradient-to-r from-cherry-500 to-cherry-600 text-white font-bold px-6 py-3.5 rounded-lg text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:from-cherry-600 hover:to-cherry-700 flex items-center justify-center group"
                >
                  <Search size={20} className="mr-2 group-hover:animate-bounce" />
                  Explore Properties
                </button>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce-subtle">
        <a href="#about" className="flex flex-col items-center text-gray-700 hover:text-cherry-500 transition-colors duration-200">
          <span className="text-sm font-medium mb-2">Discover More</span>
          <ChevronDown size={20} />
        </a>
      </div>
    </section>
  );
};

export default Hero;

