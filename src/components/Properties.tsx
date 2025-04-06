
import React, { useState, useEffect } from 'react';
import PropertyCard, { PropertyProps } from './PropertyCard';
import FadeIn from './FadeIn';

// Updated property data with only the specified locations and property types
const PROPERTIES: PropertyProps[] = [
  // Goregaon Properties
  {
    id: '1',
    title: 'DPM-1',
    location: 'Goregaon, Mumbai',
    image: 'https://scontent.fbom19-1.fna.fbcdn.net/v/t39.30808-6/481918413_1202859371849539_404334652332686093_n.jpg?stp=dst-jpg_s600x600_tt6&_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_ohc=oClxU7d02OYQ7kNvwFXN2nw&_nc_oc=Adkkmx4ZINus4OsCndLrpDV9tooR3QBBgHbf6eK7PbXxm68OBMATmHew1a7nFb0QiiiNJwBJIyNP9hWA4N6oOiAS&_nc_zt=23&_nc_ht=scontent.fbom19-1.fna&_nc_gid=-ixyhB1LVgtBQ-kFJHO1XA&oh=00_AfGq3_1MjgaQud76JZMzkA6BV_yi2eYCp0DZa6KX4m1AWw&oe=67F7F5A9',
    beds: 3,
    baths: 2,
    sqft: 760,
    type: 'residential',
    status: 'for-sale',
    featured: true,
    area: 'goregaon',
    propertyType: 'apartment',
    externalLink: 'https://www.facebook.com/share/p/15ecqnLryh/' // Added external link
  },
  {
    id: '2',
    title: 'DPM-5',
    location: 'Goregaon East, Mumbai',
    image: 'https://scontent.fbom19-2.fna.fbcdn.net/v/t39.30808-6/485051249_1214119730723503_7390617756476511725_n.jpg?stp=dst-jpg_s600x600_tt6&_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_ohc=wQloy8i9G4MQ7kNvwGooAiu&_nc_oc=AdmEJ6qeikEWwOMqQjOszLo4eIp7Bdiy3mCG3erpeescXdtZsGkuZembC2DnHnIy5xDFc_NsHDPQ5VdNcXdC9ShZ&_nc_zt=23&_nc_ht=scontent.fbom19-2.fna&_nc_gid=LTBQPw4TqgOK5pC2V5Zb4g&oh=00_AfEgo5i-romTJrTRjpQAwA2WV1DG1gQlRqe0VWboXn7nlw&oe=67F7D595',
    beds: 2,
    baths: 2,
    sqft: 657,
    type: 'residential',
    status: 'for-sale',
    area: 'goregaon',
    propertyType: 'residential',
    externalLink: 'https://www.facebook.com/share/p/165R5C4XsY/' // Added external link
  },
  {
    id: '12',
    title: 'DPM-6',
    location: 'Goregaon East, Mumbai',
    image: 'https://scontent.fbom19-1.fna.fbcdn.net/v/t39.30808-6/484952945_1214299390705537_2285814713540748781_n.jpg?stp=dst-jpg_p417x417_tt6&_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_ohc=8366lIv4NQAQ7kNvwHDA1DQ&_nc_oc=AdkFjA_rgCsB4Nt-5aBhXteztLxuh5Rr7i1dHM4TdyL_SCUKVtBiKR36SaPWX9pdG9VZZxzY366UNYNwLNNAFxaz&_nc_zt=23&_nc_ht=scontent.fbom19-1.fna&_nc_gid=YrEld02mdsPELNeCImLmDw&oh=00_AfFt-THQzEUMSa_9Di-rdFZnctbTRDXJyqqaJ2AZcQ9-eQ&oe=67F809C4',
    beds: 2,
    baths: 2,
    sqft: 631,
    type: 'residential',
    status: 'for-sale',
    area: 'goregaon',
    propertyType: 'residential',
    externalLink: 'https://www.facebook.com/share/p/16LL66YKBL/' // Added external link
  },
  {
    id: '9',
    title: 'DPM-7',
    location: 'Goregaon East, Mumbai',
    image: 'https://www.facebook.com/share/p/15yXtSPNcA/',
    beds: 2,
    baths: 2,
    sqft: 655,
    type: 'residential',
    status: 'for-sale',
    area: 'goregaon',
    propertyType: 'residential',
    externalLink: 'https://www.facebook.com/share/p/15yXtSPNcA/' // Added external link
  },
  {
    id: '11',
    title: 'DPM-8',
    location: 'Goregaon East, Mumbai',
    image: 'https://scontent.fbom26-1.fna.fbcdn.net/v/t39.30808-6/480971384_1214279070707569_4196081207974778464_n.jpg?stp=dst-jpg_p417x417_tt6&_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_ohc=CXoIynvKe7IQ7kNvwF7jRy_&_nc_oc=Admoyj-gAKzYO-Tu5EogO39jTF3V9T5SSWgt7k8kYpcPi9ZaqfjyIlgnbrzZZSh-Mr23Bozs_DlaczHO3BUUKXAQ&_nc_zt=23&_nc_ht=scontent.fbom26-1.fna&_nc_gid=YrEld02mdsPELNeCImLmDw&oh=00_AfFKH1kidc7Y4VmOrBPjQS5YmXx318aqxqcJKP3O7JuEEA&oe=67F805F7',
    beds: 2,
    baths: 2,
    sqft: 596,
    type: 'residential',
    status: 'for-sale',
    area: 'goregaon',
    propertyType: 'residential',
    externalLink: 'https://www.facebook.com/share/p/1CT8dBhQxq/' // Added external link
  },
  {
    id: '10',
    title: 'DPM-9',
    location: 'Goregaon East, Mumbai',
    image: 'https://scontent.fbom26-1.fna.fbcdn.net/v/t39.30808-6/480968361_1214243234044486_2455367823397266763_n.jpg?stp=dst-jpg_p417x417_tt6&_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_ohc=GpuPR9F7kGIQ7kNvwHoYsBk&_nc_oc=Adl3nsHX1NqBwu9uflwiEIP0BzfBjUKYqb6sbZtzAdQtB2ZUCNOPjGm15MFYZQvDHdhq_PIiLYATaTUVTb7aIfRO&_nc_zt=23&_nc_ht=scontent.fbom26-1.fna&_nc_gid=YrEld02mdsPELNeCImLmDw&oh=00_AfHrsk7HcTEJh-yUiElZqVaM4NaDXDp_d1c-yWON8dATzA&oe=67F7E027',
    beds: 2,
    baths: 2,
    sqft: 576,
    type: 'residential',
    status: 'for-sale',
    area: 'goregaon',
    propertyType: 'residential',
    externalLink: 'https://www.facebook.com/share/p/1BvNAgoZwM/' // Added external link
  },
  {
    id: '13',
    title: 'DPM-11',
    location: 'Goregaon East, Mumbai',
    image: 'https://scontent.fbom19-3.fna.fbcdn.net/v/t39.30808-6/486951705_1224765429658933_8681395808362849366_n.jpg?stp=dst-jpg_s600x600_tt6&_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_ohc=Sbtbc6Z8MBcQ7kNvwHrsYhQ&_nc_oc=AdkVaFzami6F5qU7Z83x2-E-Hb_u5XeIFwmzUpBg5YCqxsOd9DWBeOG3y4eK2DdCYfDkp5wY-yrjmAKQnQOcM3Cz&_nc_zt=23&_nc_ht=scontent.fbom19-3.fna&_nc_gid=iVakUmzDZ6dhoU6MB2XRZg&oh=00_AfG1GBxvmxMHDp2hAzMfspej3ud2mMwDP5lffOjtnczwLQ&oe=67F8001A',
    beds: 2,
    baths: 2,
    sqft: 666,
    type: 'residential',
    status: 'for-sale',
    area: 'goregaon',
    propertyType: 'residential',
    externalLink: 'https://www.facebook.com/share/p/1AEZYGCtEf/' // Added external link
  },
  
  // Jogeshwari Properties
  {
    id: '5',
    title: 'DPM-2',
    location: 'Jogeshwari, Mumbai',
    image: '/lovable-uploads/369ec138-e877-42d7-9066-c0324a2f2207.jpg',
    beds: 2,
    baths: 2,
    sqft: 674,
    type: 'residential',
    status: 'for-sale',
    featured: true,
    area: 'jogeshwari',
    propertyType: 'apartment',
    externalLink: 'https://www.facebook.com/permalink.php?story_fbid=pfbid0zpconFcRm29r6aV3qzLfdiULVqCLb3mEM8sSWGhmo4bt9NVupk3T5pe1SYvNhdavl&id=100063764627047' // Added external link
  },
  
  // Andheri Properties
  
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
    { label: 'Commercial', value: 'commercial' }
  ];
  
  const propertyStatus = [
    { label: 'All Status', value: 'all' },
    { label: 'For Sale', value: 'for-sale' },
    { label: 'For Rent', value: 'for-rent' }
  ];
  
  const locations = [
    { label: 'All Locations', value: 'all' },
    { label: 'Goregaon', value: 'goregaon' },
    { label: 'Jogeshwari', value: 'jogeshwari' },
    { label: 'Andheri', value: 'andheri' }
  ];
  
  const specificPropertyTypes = [
    { label: 'All Property Types', value: 'all' },
    { label: 'Apartment', value: 'apartment' },
    { label: 'Commercial', value: 'commercial' }
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
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-8">
            <div className="space-y-2">
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
            
            <div className="space-y-2">
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
            
            <div className="space-y-2">
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
