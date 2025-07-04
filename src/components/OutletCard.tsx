import React from 'react';
import { FoodOutlet } from '../types';

interface OutletCardProps {
  outlet: FoodOutlet;
}

export const OutletCard = ({ outlet }: OutletCardProps) => {
  // Generate a consistent color based on the country name
  const getColorScheme = (name: string) => {
    const colors = [
      'from-purple-600 to-indigo-600',
      'from-emerald-600 to-teal-600', 
      'from-rose-600 to-pink-600',
      'from-amber-600 to-orange-600',
      'from-blue-600 to-cyan-600',
      'from-green-600 to-emerald-600',
      'from-red-600 to-rose-600',
      'from-violet-600 to-purple-600'
    ];
    const index = name.charCodeAt(0) % colors.length;
    return colors[index];
  };

  return (
    <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden relative aspect-[4/3] transition-all duration-300 cursor-pointer group hover:shadow-xl hover:scale-105 hover:border-gray-300">
      <a
        href={outlet.orderUrl}
        className="block w-full h-full relative"
      >
        {/* Gradient background */}
        <div className={`absolute inset-0 bg-gradient-to-br ${getColorScheme(outlet.name)}`}></div>
        
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>

        {/* Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
          <div className="text-4xl mb-3 opacity-90">{outlet.description.split(' ')[0]}</div>
          <h3 className="text-xl md:text-2xl font-bold text-white tracking-wide mb-2" style={{ letterSpacing: '0.02em' }}>
            {outlet.name}
          </h3>
          <p className="text-white/90 text-sm md:text-base font-medium">
            {outlet.description.split(' ').slice(1).join(' ')}
          </p>
        </div>

        {/* Hover effect */}
        <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </a>
    </div>
  );
}; 