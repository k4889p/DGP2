
import React, { useState, useEffect } from 'react';
import PropertyCard, { PropertyProps } from './PropertyCard';
import FadeIn from './FadeIn';

// Updated property data with properties from each specified location
const PROPERTIES: PropertyProps[] = [
  // Goregaon Properties
  {
    id: '1',
    title: 'Modern Apartment with Sea View',
    location: 'Goregaon, Mumbai',
    price: 75000000,
    image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    beds: 3,
    baths: 2,
    sqft: 1800,
    type: 'residential',
    status: 'for-sale',
    featured: true,
    area: 'goregaon',
    propertyType: 'apartment'
  },
  {
    id: '2',
    title: 'Premium Office Space',
    location: 'Goregaon East, Mumbai',
    price: 120000,
    image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    beds: 0,
    baths: 2,
    sqft: 2200,
    type: 'commercial',
    status: 'for-rent',
    area: 'goregaon',
    propertyType: 'office'
  },
  
  // Malad Properties
  {
    id: '3',
    title: 'Luxury Villa with Private Pool',
    location: 'Malad West, Mumbai',
    price: 25000000,
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    beds: 4,
    baths: 4.5,
    sqft: 4500,
    type: 'residential',
    status: 'for-sale',
    area: 'malad',
    propertyType: 'villa'
  },
  {
    id: '4',
    title: 'Retail Space in Prime Location',
    location: 'Malad East, Mumbai',
    price: 180000,
    image: 'https://images.unsplash.com/photo-1582037928769-181f2644ecb7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    beds: 0,
    baths: 1,
    sqft: 1200,
    type: 'commercial',
    status: 'for-rent',
    area: 'malad',
    propertyType: 'shop'
  },
  
  // Jogeshwari Properties
  {
    id: '5',
    title: 'Penthouse with City Skyline View',
    location: 'Jogeshwari, Mumbai',
    price: 150000000,
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    beds: 5,
    baths: 5.5,
    sqft: 4200,
    type: 'residential',
    status: 'for-sale',
    featured: true,
    area: 'jogeshwari',
    propertyType: 'penthouse'
  },
  {
    id: '6',
    title: 'Modern Industrial Warehouse',
    location: 'Jogeshwari East, Mumbai',
    price: 60000,
    image: 'https://images.unsplash.com/photo-1565977944262-62ac0e7bbc52?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    beds: 0,
    baths: 1,
    sqft: 8000,
    type: 'industrial',
    status: 'for-rent',
    area: 'jogeshwari',
    propertyType: 'office'
  },
  
  // Andheri Properties
  {
    id: '7',
    title: 'Luxury Apartment Near Metro',
    location: 'Andheri West, Mumbai',
    price: 95000000,
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    beds: 4,
    baths: 3,
    sqft: 2400,
    type: 'residential',
    status: 'for-sale',
    area: 'andheri',
    propertyType: 'apartment'
  },
  {
    id: '8',
    title: 'Commercial Office Building',
    location: 'Andheri East, Mumbai',
    price: 220000,
    image: 'https://images.unsplash.com/photo-1616587226157-48e49175ee20?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    beds: 0,
    baths: 4,
    sqft: 5000,
    type: 'commercial',
    status: 'for-rent',
    area: 'andheri',
    propertyType: 'office'
  },
  
  // Kandivali Properties
  {
    id: '9',
    title: 'Family Villa with Garden',
    location: 'Kandivali, Mumbai',
    price: 35000000,
    image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    beds: 5,
    baths: 4,
    sqft: 3800,
    type: 'residential',
    status: 'for-sale',
    area: 'kandivali',
    propertyType: 'villa'
  },
  {
    id: '10',
    title: 'Retail Shop in Mall',
    location: 'Kandivali East, Mumbai',
    price: 85000,
    image: 'https://images.unsplash.com/photo-1604754742629-3e5728249d73?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    beds: 0,
    baths: 1,
    sqft: 950,
    type: 'commercial',
    status: 'for-rent',
    area: 'kandivali',
    propertyType: 'shop'
  }
];

const Properties: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [locationFilter, setLocationFilter] = useState<string>('all');
  const [propertyTypeFilter, setPropertyTypeFilter] = useState<string>('all');
  const [filteredProperties, setFilteredProperties] = useState<PropertyProps[]>(PROPERTIES);
  
  const propertyTypes = [
    { label: 'All Types', value: 'all' },
    { label: 'Residential', value: 'residential' },
    { label: 'Commercial', value: 'commercial' },
    { label: 'Industrial', value: 'industrial' }
  ];
  
  const propertyStatus = [
    { label: 'All Status', value: 'all' },
    { label: 'For Sale', value: 'for-sale' },
    { label: 'For Rent', value: 'for-rent' }
  ];
  
  const locations = [
    { label: 'All Locations', value: 'all' },
    { label: 'Goregaon', value: 'goregaon' },
    { label: 'Malad', value: 'malad' },
    { label: 'Jogeshwari', value: 'jogeshwari' },
    { label: 'Andheri', value: 'andheri' },
    { label: 'Kandivali', value: 'kandivali' }
  ];
  
  const specificPropertyTypes = [
    { label: 'All Property Types', value: 'all' },
    { label: 'Apartment', value: 'apartment' },
    { label: 'Villa', value: 'villa' },
    { label: 'Penthouse', value: 'penthouse' },
    { label: 'Office', value: 'office' },
    { label: 'Shop', value: 'shop' }
  ];
  
  // Apply filters whenever they change
  useEffect(() => {
    const applyFilters = () => {
      let result = PROPERTIES;
      
      // Filter by property category (residential, commercial, industrial)
      if (activeFilter !== 'all') {
        result = result.filter(property => property.type === activeFilter);
      }
      
      // Filter by status (for-sale, for-rent)
      if (statusFilter !== 'all') {
        result = result.filter(property => property.status === statusFilter);
      }
      
      // Filter by location
      if (locationFilter !== 'all') {
        result = result.filter(property => property.area === locationFilter);
      }
      
      // Filter by specific property type
      if (propertyTypeFilter !== 'all') {
        result = result.filter(property => property.propertyType === propertyTypeFilter);
      }
      
      setFilteredProperties(result);
    };
    
    applyFilters();
  }, [activeFilter, statusFilter, locationFilter, propertyTypeFilter]);

  // Get URL parameters on first load to handle direct navigation from search
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const type = params.get('type');
    const status = params.get('status');
    const location = params.get('location');
    
    if (type) setPropertyTypeFilter(type);
    if (status) setStatusFilter(status);
    if (location) setLocationFilter(location);
  }, []);

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
          <div className="flex flex-wrap justify-center gap-4 mb-8">
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
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Status</label>
              <div className="flex flex-wrap gap-2">
                {propertyStatus.map((status) => (
                  <button
                    key={status.value}
                    onClick={() => setStatusFilter(status.value)}
                    className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
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
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
              <div className="flex flex-wrap gap-2">
                {locations.map((location) => (
                  <button
                    key={location.value}
                    onClick={() => setLocationFilter(location.value)}
                    className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                      locationFilter === location.value
                        ? 'cherry-gradient text-white shadow-md'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {location.label}
                  </button>
                ))}
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Property Type</label>
              <div className="flex flex-wrap gap-2">
                {specificPropertyTypes.map((type) => (
                  <button
                    key={type.value}
                    onClick={() => setPropertyTypeFilter(type.value)}
                    className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                      propertyTypeFilter === type.value
                        ? 'cherry-gradient text-white shadow-md'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {type.label}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="flex items-end">
              <button 
                onClick={() => {
                  setActiveFilter('all');
                  setStatusFilter('all');
                  setLocationFilter('all');
                  setPropertyTypeFilter('all');
                }}
                className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 w-full"
              >
                Reset Filters
              </button>
            </div>
          </div>
        </FadeIn>
        
        {filteredProperties.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProperties.map((property, index) => (
              <FadeIn key={property.id} delay={200 + index * 100}>
                <PropertyCard property={property} />
              </FadeIn>
            ))}
          </div>
        ) : (
          <div className="text-center py-10">
            <h3 className="text-xl font-medium text-gray-700 mb-2">No properties found</h3>
            <p className="text-gray-500">Try changing your search criteria or contact us for custom property options.</p>
          </div>
        )}
        
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
