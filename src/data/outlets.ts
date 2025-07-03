import { FoodOutlet } from '../types';

const orderUrl = 'https://app.ordermonkey.com/welcome/6447fb68-86a5-4448-ba4f-a54c1dfd99eb/7d818c40a47e4b428d566ab248b822ec';

export const outlets: FoodOutlet[] = [
  { 
    id: '1', 
    name: 'Schweiz', 
    description: '🇨🇭 Pinot Noir & Chasselas', 
    cuisineType: 'Wein', 
    imageUrl: 'https://images.unsplash.com/photo-1684579055884-1d74a3350923?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 
    isOpen: true, 
    orderUrl 
  },
  { 
    id: '2', 
    name: 'Italien', 
    description: '🇮🇹 Chianti & Prosecco', 
    cuisineType: 'Wein', 
    imageUrl: 'https://imageio.forbes.com/specials-images/imageserve/64ef838aa71ba8e906f39342/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds', 
    isOpen: true, 
    orderUrl 
  },
  { 
    id: '3', 
    name: 'Österreich', 
    description: '🇦🇹 Grüner Veltliner & Riesling', 
    cuisineType: 'Wein', 
    imageUrl: 'https://cdn.shopify.com/s/files/1/0263/2004/4103/files/IMG_0034_1.jpg?v=1596737930', 
    isOpen: true, 
    orderUrl 
  },
  { 
    id: '4', 
    name: 'Spanien', 
    description: '🇪🇸 Rioja & Cava', 
    cuisineType: 'Wein', 
    imageUrl: 'https://cdn11.bigcommerce.com/s-lw9y9ncv19/images/stencil/1500x1500/products/123/1279/super-spanish-red-wine-selection-aug2022__64558.1659017484.jpg?c=1', 
    isOpen: true, 
    orderUrl 
  },
  { 
    id: '5', 
    name: 'Südafrika', 
    description: '🇿🇦 Pinotage & Chenin Blanc', 
    cuisineType: 'Wein', 
    imageUrl: 'https://www.bravenewworld.wine/cdn/shop/articles/parMount-wines_1600x.jpg?v=1725511215', 
    isOpen: true, 
    orderUrl 
  },
  { 
    id: '6', 
    name: 'Argentinien', 
    description: '🇦🇷 Malbec & Torrontés', 
    cuisineType: 'Wein', 
    imageUrl: 'https://images.squarespace-cdn.com/content/v1/579bd3a2197aea7c6b7aa2e2/1593476854523-7S0ENJP7JQ37JK4KBN4F/Best-argentinian-wine-by-puerto-la-boca-in-little-italy-san-diego.jpg', 
    isOpen: true, 
    orderUrl 
  },
  { 
    id: '7', 
    name: 'Frankreich', 
    description: '🇫🇷 Bordeaux & Champagne', 
    cuisineType: 'Wein', 
    imageUrl: 'https://cdn.shopify.com/s/files/1/0136/8873/3750/articles/French_Fine_Wines.jpg?v=1644324425', 
    isOpen: true, 
    orderUrl 
  },
  { 
    id: '8', 
    name: 'Chile', 
    description: '🇨🇱 Carménère & Sauvignon Blanc', 
    cuisineType: 'Wein', 
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8TntbeNuqHrXMnKG6MXcYRJ5Vmquijjx8-g&s', 
    isOpen: true, 
    orderUrl 
  },
]; 