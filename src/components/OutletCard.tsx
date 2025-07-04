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
    <div className="bg-gray-900 border border-gray-700 rounded-2xl overflow-hidden relative aspect-square transition-all duration-300 cursor-pointer group hover:shadow-2xl hover:scale-105 hover:border-gray-500 hover:bg-gray-800">
      <a
        href={outlet.orderUrl}
        className="block w-full h-full relative"
      >
        {/* Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
          <div className="mb-3">
            <Flag country={getCountryCode(outlet.name)} size={40} />
          </div>
          <h3 className="text-lg md:text-xl font-semibold text-white tracking-wide mb-2">
            {outlet.name}
          </h3>
          <p className="text-gray-300 text-xs md:text-sm font-medium">
            {outlet.description}
          </p>
        </div>

        {/* Hover effect */}
        <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </a>
    </div>
  );
}; 