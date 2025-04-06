
import React from 'react';
import { MapPin, Bed, Bath, Square, ExternalLink } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface PropertyProps {
  id: string;
  title: string;
  location: string;
  price: number;
  image: string;
  beds: number;
  baths: number;
  sqft: number;
  type: 'residential' | 'commercial' | 'industrial';
  status: 'for-sale' | 'for-rent';
  featured?: boolean;
  area?: string;
  propertyType?: string;
  externalLink?: string;
}

interface PropertyCardProps {
  property: PropertyProps;
  className?: string;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property, className }) => {
  const { title, location, price, image, beds, baths, sqft, type, status, featured, externalLink } = property;
  
  const formatPrice = (price: number) => {
    if (price >= 10000000) {
      return `₹${(price / 10000000).toFixed(1)} Cr`;
    } else if (price >= 100000) {
      return `₹${(price / 100000).toFixed(1)} Lac`;
    } else {
      return `₹${price.toLocaleString()}`;
    }
  };

  return (
    <div 
      className={cn(
        "bg-white rounded-xl overflow-hidden property-card-shadow h-full transition-all duration-300",
        featured ? "ring-2 ring-cherry-500" : "hover:ring-1 hover:ring-gray-200",
        className
      )}
    >
      <div className="relative">
        <div className="aspect-w-16 aspect-h-10 overflow-hidden group">
          <a 
            href={externalLink || "#"} 
            target="_blank" 
            rel="noopener noreferrer"
            className="relative block w-full h-full"
          >
            <img 
              src={image} 
              alt={title} 
              loading="lazy"
              className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <ExternalLink className="text-white" size={24} />
              <span className="ml-2 text-white font-medium">View Details</span>
            </div>
          </a>
        </div>
        
        {featured && (
          <div className="absolute top-3 left-3">
            <span className="cherry-gradient text-white text-xs font-medium px-3 py-1 rounded-full">
              Featured
            </span>
          </div>
        )}
        
        <div className="absolute top-3 right-3">
          <span className={cn(
            "text-xs font-medium px-3 py-1 rounded-full",
            status === 'for-sale' 
              ? "bg-emerald-100 text-emerald-800" 
              : "bg-blue-100 text-blue-800"
          )}>
            {status === 'for-sale' ? 'For Sale' : 'For Rent'}
          </span>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
          <div className="text-white font-bold text-lg">{formatPrice(price)}</div>
        </div>
      </div>
      
      <div className="p-5">
        <div className="flex items-start justify-between mb-2">
          <h3 className="font-bold text-lg text-gray-900 leading-tight line-clamp-1">
            {title}
          </h3>
          <span className={cn(
            "text-xs uppercase font-medium py-1 px-2 rounded",
            type === 'residential' ? "bg-orange-100 text-orange-800" :
            type === 'commercial' ? "bg-purple-100 text-purple-800" :
            "bg-indigo-100 text-indigo-800"
          )}>
            {type}
          </span>
        </div>
        
        <div className="flex items-center text-gray-500 mb-4">
          <MapPin size={14} className="mr-1 text-cherry-500" />
          <span className="text-sm">{location}</span>
        </div>
        
        <div className="grid grid-cols-3 gap-2 border-t border-gray-100 pt-4">
          <div className="flex flex-col items-center">
            <div className="flex items-center text-gray-700 mb-1">
              <Bed size={16} className="mr-1" />
              <span className="text-sm font-medium">{beds}</span>
            </div>
            <span className="text-xs text-gray-500">Beds</span>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="flex items-center text-gray-700 mb-1">
              <Bath size={16} className="mr-1" />
              <span className="text-sm font-medium">{baths}</span>
            </div>
            <span className="text-xs text-gray-500">Baths</span>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="flex items-center text-gray-700 mb-1">
              <Square size={16} className="mr-1" />
              <span className="text-sm font-medium">{sqft}</span>
            </div>
            <span className="text-xs text-gray-500">Sq.ft</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
