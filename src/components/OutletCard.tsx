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
    <div className="bg-black/50 border border-gray-700 rounded-2xl overflow-hidden relative aspect-square w-[90%] mx-auto transition-all duration-300 cursor-pointer group hover:shadow-2xl hover:scale-105 hover:border-gray-500 hover:bg-black/60">
      <a
        href={outlet.orderUrl}
        className="block w-full h-full relative"
      >
        {/* Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center py-1 px-0.5 text-center">
          <div className="mb-1">
            <Flag country={getCountryCode(outlet.name)} size={24} />
          </div>
          <h3 className="text-xs md:text-sm font-semibold text-white tracking-wide">
            {outlet.name}
          </h3>
        </div>
        {/* Hover effect */}
        <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </a>
    </div>
  );
}; 