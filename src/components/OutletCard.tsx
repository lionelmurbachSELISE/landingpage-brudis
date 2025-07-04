import React from 'react';
import { FoodOutlet } from '../types';
import Flag from 'react-flagkit';

interface OutletCardProps {
  outlet: FoodOutlet;
}

export const OutletCard = ({ outlet }: OutletCardProps) => {
  // Map country names to ISO country codes for flags
  const getCountryCode = (name: string) => {
    const countryMap: { [key: string]: string } = {
      'Schweiz': 'CH',
      'Italien': 'IT',
      'Österreich': 'AT',
      'Spanien': 'ES',
      'Südafrika': 'ZA',
      'Argentinien': 'AR',
      'Frankreich': 'FR',
      'Chile': 'CL'
    };
    return countryMap[name] || 'UN';
  };



  return (
    <div className="bg-white border-2 border-gray-300 rounded-2xl overflow-hidden relative aspect-[4/3] transition-all duration-300 cursor-pointer group hover:shadow-2xl hover:scale-105 hover:border-gray-500">
      <a
        href={outlet.orderUrl}
        className="block w-full h-full relative"
      >
        {/* Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
          <div className="mb-4">
            <Flag country={getCountryCode(outlet.name)} size={48} />
          </div>
          <h3 className="text-xl md:text-2xl font-bold text-gray-900 tracking-wide mb-3" style={{ letterSpacing: '0.02em' }}>
            {outlet.name}
          </h3>
          <p className="text-gray-600 text-sm md:text-base font-medium">
            {outlet.description}
          </p>
        </div>

        {/* Hover effect */}
        <div className="absolute inset-0 bg-gray-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </a>
    </div>
  );
}; 