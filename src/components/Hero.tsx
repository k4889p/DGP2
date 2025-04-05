
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
    { value: "malad", label: "Malad" },
    { value: "jogeshwari", label: "Jogeshwari" },
    { value: "andheri", label: "Andheri" },
    { value: "kandivali", label: "Kandivali" }
  ];

  const propertyTypes = [
    { value: "apartment", label: "Apartment" },
    { value: "villa", label: "Villa" },
    { value: "penthouse", label: "Penthouse" },
    { value: "office", label: "Office Space" },
    { value: "shop", label: "Retail Shop" }
  ];

  const propertyStatuses = [
    { value: "buy", label: "Buy" },
    { value: "sell", label: "Sell" },
    { value: "rent", label: "Rent" }
  ];

  const handleSearch = () => {
    // Scroll to properties section with search filters
    const propertiesSection = document.getElementById('properties');
    if (propertiesSection) {
      const headerOffset = 80;
      const elementPosition = propertiesSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });

      // In a real implementation, we would pass these filters to the Properties component
      console.log("Search filters:", { propertyType, propertyStatus, location });
    }
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center py-24 overflow-hidden bg-gray-50"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 z-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(#E61E2A_1px,transparent_1px)] [background-size:20px_20px]"></div>
      </div>
      
      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="text-left max-w-2xl mx-auto lg:mx-0">
            <FadeIn className="mb-3">
              <span className="inline-block px-4 py-1.5 bg-cherry-50 text-cherry-600 rounded-full text-sm font-medium">
                Your Property Journey Begins Here
              </span>
            </FadeIn>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight mb-6 leading-tight">
              <AnimatedText 
                text="Find Your Dream Property in Mumbai" 
                delay={300}
              />
            </h1>
            
            <FadeIn delay={600} className="mb-8">
              <p className="text-xl text-gray-600 leading-relaxed">
                Premium properties handpicked for discerning clients. Experience excellence in real estate with Kaustubh Parab and the DPM Properties team.
              </p>
            </FadeIn>
            
            {/* Property Search Box */}
            <FadeIn delay={800} className="mb-8">
              <div className="bg-white p-5 rounded-xl shadow-lg">
                <h3 className="text-lg font-semibold mb-4 text-gray-800">Find Your Perfect Property</h3>
                
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
                  className="w-full cherry-gradient text-white font-medium px-6 py-3 rounded-lg text-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex items-center justify-center"
                >
                  <Search size={18} className="mr-2" />
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
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1073&q=80" 
                alt="Luxury Property" 
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
