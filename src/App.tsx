import React from 'react';
import { OutletCard } from './components/OutletCard';
import { outlets } from './data/outlets';

import orderMonkeyLogo from './assets/om_logo.png';
import logoWeiss from './assets/logo-weiss.png';

function App() {
  return (
    <div className="min-h-screen bg-black py-4 px-1 flex flex-col justify-between w-full max-w-full overflow-x-hidden box-border">
      <div className="w-full max-w-full overflow-x-hidden">
        <header className="w-full flex flex-col items-center justify-center mb-4">
          <img src={logoWeiss} alt="Urbanfood Logo" className="h-16 md:h-20" style={{ objectFit: 'contain' }} />
        </header>
        <main className="max-w-full mx-auto">
                      <div className="flex flex-col items-center mb-4">
              <span className="text-lg md:text-xl font-bold text-white text-center mb-2">Bitte wähle das Herkunftsland des Weins:</span>
              <span className="block w-16 h-1 rounded-full bg-white mt-2"></span>
            </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-6xl mx-auto px-4 overflow-x-hidden">
            {outlets.map((outlet) => (
              <OutletCard key={outlet.id} outlet={outlet} />
            ))}
          </div>
        </main>
      </div>
      <footer className="w-full flex flex-row items-center justify-center gap-2 mt-8 mb-2 max-w-full overflow-x-hidden">
        <span className="text-white text-[10px] sm:text-xs md:text-sm whitespace-nowrap">Self-Ordering by</span>
        <img src={orderMonkeyLogo} alt="Order Monkey Logo" className="h-12 md:h-16" style={{ objectFit: 'contain' }} />
      </footer>
    </div>
  );
}

export default App; 