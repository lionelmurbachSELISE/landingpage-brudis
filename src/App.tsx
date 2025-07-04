import React from 'react';
import { OutletCard } from './components/OutletCard';
import { outlets } from './data/outlets';

import orderMonkeyLogo from './assets/om_logo.png';
import logoWeiss from './assets/logo-weiss.png';

function App() {
  return (
    <div className="min-h-screen pt-10 pb-2 px-2 flex flex-col justify-between w-full max-w-full overflow-x-hidden box-border relative" style={{
      backgroundImage: 'url(https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/bottle-of-red-wine-on-black-background-donald-gruener.jpg)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
    }}>
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black/60 pointer-events-none z-0"></div>
      <div className="w-full max-w-full overflow-x-hidden relative z-10">
        <header className="w-full flex flex-col items-center justify-center mb-3">
          <img src={logoWeiss} alt="Urbanfood Logo" className="h-16 md:h-20" style={{ objectFit: 'contain' }} />
        </header>
        <main className="max-w-full mx-auto">
                      <div className="flex flex-col items-center mb-3">
              <span className="text-lg md:text-xl font-bold text-white text-center mb-2">Bitte wähle das Herkunftsland des Weins:</span>
              <span className="block w-16 h-1 rounded-full bg-white mt-2"></span>
            </div>
          <div className="mt-8"></div>
          <div className="grid grid-cols-2 gap-5 w-full max-w-xs mx-auto overflow-x-hidden">
            {outlets.map((outlet) => (
              <OutletCard key={outlet.id} outlet={outlet} />
            ))}
          </div>
        </main>
      </div>
      <footer className="w-full flex flex-col items-center justify-center gap-1 mt-4 mb-2 max-w-full overflow-x-hidden relative z-20">
        <span className="text-gray-200 text-xs drop-shadow-md text-center">Self-Ordering by</span>
        <img src={orderMonkeyLogo} alt="Order Monkey Logo" className="h-12 md:h-16" style={{ objectFit: 'contain', filter: 'grayscale(0.3) brightness(0.85)' }} />
      </footer>
    </div>
  );
}

export default App; 