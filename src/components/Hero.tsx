
import React, { useState } from 'react';
import { ChevronDown, Search, MapPin, Home, Tag } from 'lucide-react';
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
      className="relative min-h-screen flex items-center py-24 overflow-hidden bg-gradient-to-br from-gray-50 to-white"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(#E61E2A_1px,transparent_1px)] [background-size:20px_20px]"></div>
      </div>
      
      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content with NEW STYLE */}
          <div className="text-left max-w-2xl mx-auto lg:mx-0">
            <FadeIn className="mb-4">
              <span className="inline-block px-4 py-1.5 bg-cherry-100 text-cherry-800 rounded-full text-sm font-bold shadow-md">
                Premium Real Estate Solutions
              </span>
            </FadeIn>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 tracking-tight mb-6 leading-tight">
              <AnimatedText 
                text="Find Your Dream Property" 
                delay={300}
                className="text-transparent bg-clip-text bg-gradient-to-r from-cherry-600 to-cherry-400"
              />
              <div className="text-4xl md:text-5xl lg:text-6xl mt-2 text-gray-700">
                in <span className="text-cherry-500">Mumbai</span>
              </div>
            </h1>
            
            <FadeIn delay={600} className="mb-8">
              <p className="text-xl font-light text-gray-700 leading-relaxed border-l-4 border-cherry-500 pl-4 italic">
                Premium properties handpicked for discerning clients. Experience excellence with DPM Properties.
              </p>
            </FadeIn>
            
            {/* Property Search Box */}
            <FadeIn delay={800} className="mb-8">
              <div className="bg-white p-6 rounded-2xl shadow-2xl border border-gray-100">
                <h3 className="text-xl font-semibold mb-4 text-gray-800 text-center">Find Your Perfect Property</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Property Type</label>
                    <Select value={propertyType} onValueChange={setPropertyType}>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select type" />
                      </SelectTrigger>
                      <SelectContent>
                        {propertyTypes.map((type) => (
                          <SelectItem key={type.value} value={type.value}>
                            {type.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Looking to</label>
                    <Select value={propertyStatus} onValueChange={setPropertyStatus}>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Buy/Sell/Rent" />
                      </SelectTrigger>
                      <SelectContent>
                        {propertyStatuses.map((status) => (
                          <SelectItem key={status.value} value={status.value}>
                            {status.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Location</label>
                    <Select value={location} onValueChange={setLocation}>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select area" />
                      </SelectTrigger>
                      <SelectContent>
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
                  className="w-full bg-gradient-to-r from-cherry-500 to-cherry-600 text-white font-bold px-6 py-3.5 rounded-lg text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center"
                >
                  <Search size={20} className="mr-2" />
                  Search Properties
                </button>
              </div>
            </FadeIn>
            
            <FadeIn delay={1000}>
              <div className="flex items-center space-x-6 text-gray-600">
                <div className="flex items-center">
                  <Home size={20} className="mr-2 text-cherry-500" />
                  <span>200+ Properties</span>
                </div>
                <div className="flex items-center">
                  <MapPin size={20} className="mr-2 text-cherry-500" />
                  <span>Prime Locations</span>
                </div>
                <div className="flex items-center">
                  <Tag size={20} className="mr-2 text-cherry-500" />
                  <span>Best Value</span>
                </div>
              </div>
            </FadeIn>
          </div>
          
          {/* Right side - Image */}
          <FadeIn delay={400} className="hidden lg:block">
            <div className="relative">
              <div className="absolute -inset-4 bg-cherry-500 rounded-tl-3xl rounded-br-3xl opacity-10 transform rotate-3"></div>
              <img 
                src="/lovable-uploads/f13c4912-feb3-4a43-b6ef-aa00a2b3585b.png" 
                alt="Luxury Property" 
                loading="lazy"
                className="rounded-tl-3xl rounded-br-3xl shadow-2xl object-cover h-[600px] w-full transform -rotate-3 transition-transform duration-500 hover:rotate-0"
              />
              
              <div className="absolute -bottom-8 -left-8 bg-white p-4 rounded-lg shadow-lg">
                <div className="flex items-center space-x-2">
                  <div className="p-2 bg-cherry-50 rounded-full">
                    <Home size={24} className="text-cherry-500" />
                  </div>
                  <div>
                    <p className="text-gray-800 font-medium">Trusted by</p>
                    <p className="text-cherry-500 font-bold">500+ Clients</p>
                  </div>
                </div>
              </div>
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

