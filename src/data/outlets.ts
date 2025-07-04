import { FoodOutlet } from '../types';

const orderUrl = 'https://app.ordermonkey.com/welcome/6447fb68-86a5-4448-ba4f-a54c1dfd99eb/7d818c40a47e4b428d566ab248b822ec';

export const outlets: FoodOutlet[] = [
  { 
    id: '1', 
    name: 'Schweiz', 
    description: 'Pinot Noir & Chasselas', 
    cuisineType: 'Wein', 
    isOpen: true, 
    orderUrl 
  },
  { 
    id: '2', 
    name: 'Italien', 
    description: 'Chianti & Prosecco', 
    cuisineType: 'Wein', 
    isOpen: true, 
    orderUrl 
  },
  { 
    id: '3', 
    name: 'Österreich', 
    description: 'Grüner Veltliner & Riesling', 
    cuisineType: 'Wein', 
    isOpen: true, 
    orderUrl 
  },
  { 
    id: '4', 
    name: 'Spanien', 
    description: 'Rioja & Cava', 
    cuisineType: 'Wein', 
    isOpen: true, 
    orderUrl 
  },
  { 
    id: '5', 
    name: 'Südafrika', 
    description: 'Pinotage & Chenin Blanc', 
    cuisineType: 'Wein', 
    isOpen: true, 
    orderUrl 
  },
  { 
    id: '6', 
    name: 'Argentinien', 
    description: 'Malbec & Torrontés', 
    cuisineType: 'Wein', 
    isOpen: true, 
    orderUrl 
  },
  { 
    id: '7', 
    name: 'Frankreich', 
    description: 'Bordeaux & Champagne', 
    cuisineType: 'Wein', 
    isOpen: true, 
    orderUrl 
    },
  { 
    id: '8', 
    name: 'Chile', 
    description: 'Carménère & Sauvignon Blanc', 
    cuisineType: 'Wein', 
    isOpen: true, 
    orderUrl 
  },
]; 