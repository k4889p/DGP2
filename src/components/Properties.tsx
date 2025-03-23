
import React, { useState } from 'react';
import PropertyCard, { PropertyProps } from './PropertyCard';
import FadeIn from './FadeIn';

// Updated image URLs to ensure they'll load correctly
const PROPERTIES: PropertyProps[] = [
  {
    id: '1',
    title: 'Modern Apartment with Sea View',
    location: 'Worli, Mumbai',
    price: 75000000,
    image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    beds: 3,
    baths: 2,
    sqft: 1800,
    type: 'residential',
    status: 'for-sale',
    featured: true
  },
  {
    id: '2',
    title: 'Luxury Villa with Private Pool',
    location: 'Lonavala, Maharashtra',
    price: 25000000,
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    beds: 4,
    baths: 4.5,
    sqft: 4500,
    type: 'residential',
    status: 'for-sale'
  },
  {
    id: '3',
    title: 'Premium Office Space',
    location: 'Bandra Kurla Complex, Mumbai',
    price: 120000,
    image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    beds: 0,
    baths: 2,
    sqft: 2200,
    type: 'commercial',
    status: 'for-rent'
  },
  {
    id: '4',
    title: 'Modern Industrial Warehouse',
    location: 'Navi Mumbai, Maharashtra',
    price: 60000,
    image: 'https://images.unsplash.com/photo-1565977944262-62ac0e7bbc52?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    beds: 0,
    baths: 1,
    sqft: 8000,
    type: 'industrial',
    status: 'for-rent'
  },
  {
    id: '5',
    title: 'Penthouse with City Skyline View',
    location: 'South Mumbai, Maharashtra',
    price: 150000000,
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    beds: 5,
    baths: 5.5,
    sqft: 4200,
    type: 'residential',
    status: 'for-sale',
    featured: true
  },
  {
    id: '6',
    title: 'Retail Space in Prime Location',
    location: 'Colaba, Mumbai',
    price: 180000,
    image: 'https://images.unsplash.com/photo-1582037928769-181f2644ecb7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    beds: 0,
    baths: 1,
    sqft: 1200,
    type: 'commercial',
    status: 'for-rent'
  }
];

const Properties: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  
  const propertyTypes = [
    { label: 'All', value: 'all' },
    { label: 'Residential', value: 'residential' },
    { label: 'Commercial', value: 'commercial' },
    { label: 'Industrial', value: 'industrial' }
  ];
  
  const propertyStatus = [
    { label: 'All Status', value: 'all' },
    { label: 'For Sale', value: 'for-sale' },
    { label: 'For Rent', value: 'for-rent' }
  ];
  
  const [statusFilter, setStatusFilter] = useState<string>('all');
  
  const filteredProperties = PROPERTIES.filter(property => {
    const typeMatch = activeFilter === 'all' ? true : property.type === activeFilter;
    const statusMatch = statusFilter === 'all' ? true : property.status === statusFilter;
    return typeMatch && statusMatch;
  });

  return (
    <section id="properties" className="section-padding bg-white">
      <div className="container mx-auto">
        <FadeIn>
          <div className="text-center mb-16">
            <span className="text-cherry-500 font-medium text-sm uppercase tracking-wider">Our Listings</span>
            <h2 className="section-title mt-2">Exceptional Properties</h2>
            <p className="section-subtitle">
              Discover our handpicked selection of premium properties carefully chosen to meet the highest standards of quality and comfort.
            </p>
          </div>
        </FadeIn>
        
        <FadeIn delay={200}>
          <div className="flex flex-col md:flex-row justify-center gap-4 mb-12">
            <div className="flex justify-center items-center flex-wrap gap-3">
              {propertyTypes.map((type) => (
                <button
                  key={type.value}
                  onClick={() => setActiveFilter(type.value)}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    activeFilter === type.value
                      ? 'cherry-gradient text-white shadow-md'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {type.label}
                </button>
              ))}
            </div>
            
            <div className="h-6 border-l border-gray-200 mx-2 hidden md:block"></div>
            
            <div className="flex justify-center items-center flex-wrap gap-3">
              {propertyStatus.map((status) => (
                <button
                  key={status.value}
                  onClick={() => setStatusFilter(status.value)}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    statusFilter === status.value
                      ? 'cherry-gradient text-white shadow-md'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {status.label}
                </button>
              ))}
            </div>
          </div>
        </FadeIn>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProperties.map((property, index) => (
            <FadeIn key={property.id} delay={200 + index * 100}>
              <PropertyCard property={property} />
            </FadeIn>
          ))}
        </div>
        
        <FadeIn delay={600}>
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6">
              Looking for something specific? Contact us for our complete property portfolio.
            </p>
            <a 
              href="#contact" 
              className="inline-block cherry-gradient text-white font-medium px-8 py-3 rounded-full hover:shadow-lg transition-shadow duration-300"
            >
              Inquire About Properties
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default Properties;
