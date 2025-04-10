
// import React, { useState } from 'react';
// import { ChevronDown, Search, MapPin, Home, Tag, Building } from 'lucide-react';
// import AnimatedText from './AnimatedText';
// import FadeIn from './FadeIn';
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

// const Hero: React.FC = () => {
//   const [propertyType, setPropertyType] = useState<string>("");
//   const [propertyStatus, setPropertyStatus] = useState<string>("");
//   const [location, setLocation] = useState<string>("");

//   const locations = [
//     { value: "goregaon", label: "Goregaon" },
//     { value: "andheri", label: "Andheri" },
//     { value: "jogeshwari", label: "jogeshwari" }
//   ];

//   const propertyTypes = [
//     { value: "apartment", label: "Apartment" },
//     { value: "commercial", label: "Commercial" }
//   ];

//   const propertyStatuses = [
//     { value: "buy", label: "Buy" },
//     { value: "sell", label: "Sell" },
//     { value: "rent", label: "Rent" }
//   ];

//   const handleSearch = () => {
//     const propertiesSection = document.getElementById('properties');
//     if (propertiesSection) {
//       const headerOffset = 80;
//       const elementPosition = propertiesSection.getBoundingClientRect().top;
//       const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

//       window.scrollTo({
//         top: offsetPosition,
//         behavior: 'smooth'
//       });

//       console.log("Search filters:", { propertyType, propertyStatus, location });
//     }
//   };

//   return (
//     <section
//       id="home"
//       className="relative min-h-screen flex items-center py-20 pb-36 overflow-hidden bg-gradient-to-b from-white-100/50 to-black-200/30"
//     >
//       {/* Animated background elements */}
//       <div className="absolute inset-0 z-0">
//         <div className="absolute inset-0 bg-[radial-gradient(#fff_1.5px,transparent_1.5px)] [background-size:30px_30px] opacity-10"></div>
//         <div className="absolute -top-24 -left-24 w-96 h-96 bg-gray-200 rounded-full filter blur-[100px] opacity-20 animate-pulse"></div>
//         <div className="absolute top-1/3 -right-24 w-96 h-96 bg-gray-300 rounded-full filter blur-[120px] opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
//       </div>

//       {/* Content container with overlay */}
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//         <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">

//           {/* Left side text content - 3 columns */}
//           <div className="lg:col-span-3 text-left relative top-10">
//             <FadeIn className="mb-6" direction="left">
//               <span className="inline-block px-6 py-2 bg-yellow-100 text-yellow-800 rounded-full text-lg font-bold shadow-lg border-l-8 border-yellow-500">
//                 <h1>Mumbai's Premium Property Solutions</h1>
//               </span>
//             </FadeIn>

//             <h1 className="text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-6 leading-none">
//               <AnimatedText
//                 text="FIND YOUR"
//                 delay={150}
//                 className="text-yellow-900"
//               />
//               <span className="block mt-2 text-7xl md:text-8xl lg:text-9xl font-black">
//                 <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 via-yellow-500 to-yellow-700 drop-shadow-[0_5px_5px_rgba(230,30,42,0.2)]">
//                   DREAM HOME
//                 </span>
//               </span>
//             </h1>

//             <FadeIn delay={600} className="mb-8" direction="up">
//               <div className="relative">
//                 <div className="absolute -inset-1 bg-gradient-to-r from-black-500 to-black-600 opacity-50 blur-lg rounded-lg"></div>
//                 <div className="relative bg-white/80 backdrop-blur-sm p-6 rounded-lg border border-black-500/20 shadow-lg">
//                   <h3 className="font-serif italic text-4xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-yellow-700 to-yellow-600">
//                     REAL ESTATE
//                   </h3>
//                   {/* <p className="text-xl font-light text-gray-800 leading-relaxed">
//                     Expert solutions for your property needs. Premium properties handpicked for discerning clients in the heart of Mumbai.
//                   </p> */}
//                   <p>
//                     At DPM Property, we specialize in <strong>property management</strong> services tailored to individual and corporate needs in <strong>Mumbai</strong>.
//                   </p>

//                 </div>
//               </div>
//             </FadeIn>

//             <FadeIn delay={800} className="mt-8">
//               <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
//                 <div className="bg-white/30 backdrop-blur-md rounded-lg p-4 border-l-4 border-yellow-500 hover:-translate-y-1 transition-all duration-300 flex items-center space-x-3">
//                   <MapPin className="text-yellow-600 min-w-[28px]" size={32} />
//                   <div>
//                     <div className="text-gray-900 font-bold text-xl">Prime</div>
//                     <div className="text-gray-700 text-sm">Locations</div>
//                   </div>
//                 </div>

//                 <div className="bg-white/30 backdrop-blur-md rounded-lg p-4 border-l-4 border-yellow-500 hover:-translate-y-1 transition-all duration-300 flex items-center space-x-3">
//                   <Tag className="text-yellow-600 min-w-[28px]" size={32} />
//                   <div>
//                     <div className="text-gray-900 font-bold text-xl">Best</div>
//                     <div className="text-gray-700 text-sm">Value</div>
//                   </div>
//                 </div>
//               </div>
//             </FadeIn>

//           </div>

//           {/* Right side - Image and search panel - 2 columns */}
//           <div className="lg:col-span-2">
//             <FadeIn delay={300} direction="right">
//               <div className="relative mb-8">
//                 {/* Decorative elements */}
//                 <div className="absolute -inset-4 bg-gradient-to-r from-black/10 to-black/10 rounded-2xl shadow-[0_4px_30px_rgba(200,200,200,0.5)] border border-gray-200 blur-lg"></div>
//                 <div className="absolute -inset-0.5 bg-gradient-to-r from-black/10 to-black/10 rounded-2xl opacity-50 border border-gray-200 shadow-md"></div>


//                 {/* Image container */}
//                 <div className="relative overflow-hidden rounded-2xl border-2 border-gray-500/20 shadow-lg">
//                   <div className="absolute inset-0 bg-black/10 z-10"></div>
//                   <img
//                     src="https://plus.unsplash.com/premium_photo-1710282123801-70619239ee2f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG9tZSUyMGJ1aWxkaW5nJTIwcHJvcGVydHR5JTIwcmVkfGVufDB8fDB8fHww"
//                     alt="Luxury Property"
//                     loading="lazy"
//                     className="w-full h-[350px] object-cover transform transition-transform duration-700 hover:scale-110"
//                   />

//                   {/* Badge overlay */}
//                   <div className="absolute top-4 right-4 bg-yellow-600/90 backdrop-blur-sm text-white px-4 py-2 rounded-full font-bold text-sm z-20">
//                     Premium Selection
//                   </div>
//                 </div>
//               </div>

//               {/* Property Search Box */}
//               {/* <div className="bg-white/80 backdrop-blur-lg p-6 rounded-2xl border border-cherry-500/10 shadow-2xl">
//                 <h3 className="text-xl font-semibold mb-4 text-gray-900 text-center">
//                   <span className="border-b-2 border-cherry-500 pb-1">Find Your Perfect Property</span>
//                 </h3>
                
//                 <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
//                   <div className="space-y-2">
//                     <label className="text-sm font-medium text-gray-300 flex items-center">
//                       <Building size={14} className="mr-1 text-cherry-400" />
//                       Property Type
//                     </label>
//                     <Select value={propertyType} onValueChange={setPropertyType}>
//                       <SelectTrigger className="w-full bg-gray-800/70 border-gray-700 text-white">
//                         <SelectValue placeholder="Select type" />
//                       </SelectTrigger>
//                       <SelectContent className="bg-gray-800 text-white border-gray-700">
//                         {propertyTypes.map((type) => (
//                           <SelectItem key={type.value} value={type.value}>
//                             {type.label}
//                           </SelectItem>
//                         ))}
//                       </SelectContent>
//                     </Select>
//                   </div>
                  
//                   <div className="space-y-2">
//                     <label className="text-sm font-medium text-gray-300 flex items-center">
//                       <Tag size={14} className="mr-1 text-cherry-400" />
//                       Looking to
//                     </label>
//                     <Select value={propertyStatus} onValueChange={setPropertyStatus}>
//                       <SelectTrigger className="w-full bg-gray-800/70 border-gray-700 text-white">
//                         <SelectValue placeholder="Buy/Sell/Rent" />
//                       </SelectTrigger>
//                       <SelectContent className="bg-gray-800 text-white border-gray-700">
//                         {propertyStatuses.map((status) => (
//                           <SelectItem key={status.value} value={status.value}>
//                             {status.label}
//                           </SelectItem>
//                         ))}
//                       </SelectContent>
//                     </Select>
//                   </div>
                  
//                   <div className="space-y-2">
//                     <label className="text-sm font-medium text-gray-300 flex items-center">
//                       <MapPin size={14} className="mr-1 text-cherry-400" />
//                       Location
//                     </label>
//                     <Select value={location} onValueChange={setLocation}>
//                       <SelectTrigger className="w-full bg-gray-800/70 border-gray-700 text-white">
//                         <SelectValue placeholder="Select area" />
//                       </SelectTrigger>
//                       <SelectContent className="bg-gray-800 text-white border-gray-700">
//                         {locations.map((loc) => (
//                           <SelectItem key={loc.value} value={loc.value}>
//                             {loc.label}
//                           </SelectItem>
//                         ))}
//                       </SelectContent>
//                     </Select>
//                   </div>
//                 </div>
                
//                 <button 
//                   onClick={handleSearch}
//                   className="w-full bg-gradient-to-r from-cherry-500 to-cherry-600 text-white font-bold px-6 py-3.5 rounded-lg text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:from-cherry-600 hover:to-cherry-700 flex items-center justify-center group"
//                 >
//                   <Search size={20} className="mr-2 group-hover:animate-bounce" />
//                   Explore Properties
//                 </button>
//               </div> */}
//               {/* Why Choose Us Panel */}
//               <div className="bg-white/80 backdrop-blur-lg p-6 rounded-2xl border border-yellow-500/10 shadow-2xl max-w-3xl mx-auto text-center">
//                 <h3 className="text-2xl font-semibold mb-8 text-gray-900">
//                   <span className="border-b-2 border-yellow-500 pb-1">Why Choose DPM Property</span>
//                 </h3>

//                 <div className="grid grid-cols-1 gap-6">
//                   {/* Feature 1 */}
//                   <div className="flex flex-col items-center text-center">
//                     <Home className="text-yellow-600 mb-2" size={24} />
//                     <p className="text-gray-900 font-bold">Luxury Mumbai Specialists</p>
//                     <p className="text-gray-600 text-sm max-w-md">
//                       We know every skyline, street and secret deal in the city.
//                     </p>
//                   </div>

//                   {/* Feature 2 */}
//                   <div className="flex flex-col items-center text-center">
//                     <Building className="text-yellow-600 mb-2" size={24} />
//                     <p className="text-gray-900 font-bold">Tailored Property Matches</p>
//                     <p className="text-gray-600 text-sm max-w-md">
//                       We handpick homes that match your lifestyle, not just your budget.
//                     </p>
//                   </div>

//                   {/* Feature 3 */}
//                   <div className="flex flex-col items-center text-center">
//                     <Tag className="text-yellow-600 mb-2" size={24} />
//                     <p className="text-gray-900 font-bold">Best Value, No Compromise</p>
//                     <p className="text-gray-600 text-sm max-w-md">
//                       Unmatched listings with premium finishes at fair prices.
//                     </p>
//                   </div>

//                   {/* Feature 4 */}
//                   <div className="flex flex-col items-center text-center">
//                     <MapPin className="text-yellow-600 mb-2" size={24} />
//                     <p className="text-gray-900 font-bold">Prime Locations Only</p>
//                     <p className="text-gray-600 text-sm max-w-md">
//                       From Bandra to Andheri – we only show top-tier properties.
//                     </p>
//                   </div>
//                 </div>
//               </div>

//             </FadeIn>
//           </div>
//         </div>
//       </div>

//       {/* Scroll indicator */}
//       <div className="absolute bottom-10 w-full flex justify-center animate-bounce-subtle z-50">
//         <a
//           href="#about"
//           className="flex flex-col items-center text-gray-700 hover:text-yellow-500 transition-colors duration-200"
//         >
//           <span className="text-sm font-medium mb-2">Discover More</span>
//           <ChevronDown size={20} />
//         </a>
//       </div>

//     </section>
//   );
// };

// export default Hero;



import React, { useState } from 'react';
import { ChevronDown, Search, MapPin, Home, Tag, Building } from 'lucide-react';
import AnimatedText from './AnimatedText';
import FadeIn from './FadeIn';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const Hero: React.FC = () => {
  const [propertyType, setPropertyType] = useState<string>('');
  const [propertyStatus, setPropertyStatus] = useState<string>('');
  const [location, setLocation] = useState<string>('');

  const locations = [
    { value: "goregaon", label: "Goregaon" },
    { value: "andheri", label: "Andheri" },
    { value: "jogeshwari", label: "Jogeshwari" }
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
      className="relative min-h-screen flex items-center py-20 pb-36 overflow-hidden bg-gradient-to-b from-white-100/50 to-black-200/30"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(#fff_1.5px,transparent_1.5px)] [background-size:30px_30px] opacity-10"></div>
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-gray-200 rounded-full filter blur-[100px] opacity-20 animate-pulse"></div>
        <div className="absolute top-1/3 -right-24 w-96 h-96 bg-gray-300 rounded-full filter blur-[120px] opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
          {/* Left Text */}
          <div className="lg:col-span-3 text-left relative top-10">
            <FadeIn className="mb-6" direction="left">
              <span className="inline-block px-6 py-2 bg-yellow-100 text-yellow-800 rounded-full text-lg font-bold shadow-lg border-l-8 border-yellow-500">
                Mumbai's Premium Property Solutions
              </span>
            </FadeIn>

            <h1 className="text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-6 leading-none">
              <AnimatedText
                text="FIND YOUR"
                delay={150}
                className="text-yellow-900"
              />
              <span className="block mt-2 text-7xl md:text-8xl lg:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 via-yellow-500 to-yellow-700 drop-shadow-[0_5px_5px_rgba(230,30,42,0.2)]">
                DREAM HOME
              </span>
            </h1>

            <FadeIn delay={600} className="mb-8" direction="up">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-black-500 to-black-600 opacity-50 blur-lg rounded-lg"></div>
                <div className="relative bg-white/80 backdrop-blur-sm p-6 rounded-lg border border-black-500/20 shadow-lg">
                  <h3 className="font-serif italic text-4xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-yellow-700 to-yellow-600">
                    REAL ESTATE
                  </h3>
                  <p>
                    At DPM Property, we specialize in <strong>property management</strong> services tailored to individual and corporate needs in <strong>Mumbai</strong>.
                  </p>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={800} className="mt-8">
              <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
                <div className="bg-white/30 backdrop-blur-md rounded-lg p-4 border-l-4 border-yellow-500 hover:-translate-y-1 transition-all duration-300 flex items-center space-x-3">
                  <MapPin className="text-yellow-600 min-w-[28px]" size={32} />
                  <div>
                    <div className="text-gray-900 font-bold text-xl">Prime</div>
                    <div className="text-gray-700 text-sm">Locations</div>
                  </div>
                </div>

                <div className="bg-white/30 backdrop-blur-md rounded-lg p-4 border-l-4 border-yellow-500 hover:-translate-y-1 transition-all duration-300 flex items-center space-x-3">
                  <Tag className="text-yellow-600 min-w-[28px]" size={32} />
                  <div>
                    <div className="text-gray-900 font-bold text-xl">Best</div>
                    <div className="text-gray-700 text-sm">Value</div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Right Panel */}
          <div className="lg:col-span-2">
            <FadeIn delay={300} direction="right">
              <div className="relative mb-8">
                <div className="absolute -inset-4 bg-gradient-to-r from-black/10 to-black/10 rounded-2xl shadow-[0_4px_30px_rgba(200,200,200,0.5)] border border-gray-200 blur-lg"></div>
                <div className="relative overflow-hidden rounded-2xl border-2 border-gray-500/20 shadow-lg">
                  <img
                    src="https://plus.unsplash.com/premium_photo-1710282123801-70619239ee2f?w=500&auto=format&fit=crop&q=60"
                    alt="Luxury Property"
                    loading="lazy"
                    className="w-full h-[350px] object-cover transform transition-transform duration-700 hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 bg-yellow-600/90 backdrop-blur-sm text-white px-4 py-2 rounded-full font-bold text-sm z-20">
                    Premium Selection
                  </div>
                </div>
              </div>

              {/* Why Choose Us Panel */}
              <div className="bg-white/80 backdrop-blur-lg p-6 rounded-2xl border border-yellow-500/10 shadow-2xl max-w-3xl mx-auto text-center">
                <h3 className="text-2xl font-semibold mb-8 text-gray-900">
                  <span className="border-b-2 border-yellow-500 pb-1">Why Choose DPM Property</span>
                </h3>

                <div className="grid grid-cols-1 gap-6">
                  {/* Feature 1 */}
                  <div className="flex flex-col items-center text-center">
                    <Home className="text-yellow-600 mb-2" size={24} />
                    <p className="text-gray-900 font-bold">Luxury Mumbai Specialists</p>
                    <p className="text-gray-600 text-sm max-w-md">
                      We know every skyline, street and secret deal in the city.
                    </p>
                  </div>

                  {/* Feature 2 */}
                  <div className="flex flex-col items-center text-center">
                    <Building className="text-yellow-600 mb-2" size={24} />
                    <p className="text-gray-900 font-bold">Tailored Property Matches</p>
                    <p className="text-gray-600 text-sm max-w-md">
                      We handpick homes that match your lifestyle, not just your budget.
                    </p>
                  </div>

                  {/* Feature 3 */}
                  <div className="flex flex-col items-center text-center">
                    <Tag className="text-yellow-600 mb-2" size={24} />
                    <p className="text-gray-900 font-bold">Best Value, No Compromise</p>
                    <p className="text-gray-600 text-sm max-w-md">
                      Unmatched listings with premium finishes at fair prices.
                    </p>
                  </div>

                  {/* Feature 4 */}
                  <div className="flex flex-col items-center text-center">
                    <MapPin className="text-yellow-600 mb-2" size={24} />
                    <p className="text-gray-900 font-bold">Prime Locations Only</p>
                    <p className="text-gray-600 text-sm max-w-md">
                      From Bandra to Andheri – we only show top-tier properties.
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 w-full flex justify-center animate-bounce-subtle z-50">
        <a
          href="#about"
          className="flex flex-col items-center text-gray-700 hover:text-yellow-500 transition-colors duration-200"
        >
          <span className="text-sm font-medium mb-2">Discover More</span>
          <ChevronDown size={20} />
        </a>
      </div>
    </section>
  );
};

export default Hero;
