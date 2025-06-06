import { Product } from '../types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Premium Portland Cement',
    description: 'High-quality Portland cement for all your construction needs. 50kg bag.',
    price: 450,
    unit: 'bag',
    image: 'https://images.pexels.com/photos/4239037/pexels-photo-4239037.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'cement',
    inStock: true,
    featured: true
  },
  {
    id: '2',
    name: 'Fine River Sand',
    description: 'Clean, sieved river sand perfect for concrete mixing and plastering. 50kg bag.',
    price: 220,
    unit: 'bag',
    image: 'https://images.pexels.com/photos/2349209/pexels-photo-2349209.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'sand',
    inStock: true
  },
  {
    id: '3',
    name: 'Red Clay Bricks',
    description: 'Solid, uniform red clay bricks. Pack of 100 units.',
    price: 1200,
    unit: 'pack',
    image: 'https://images.pexels.com/photos/207142/pexels-photo-207142.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'bricks',
    inStock: true,
    featured: true
  },
  {
    id: '4',
    name: 'Ceramic Floor Tiles',
    description: 'Premium ceramic floor tiles with matte finish. Box of 10 tiles (20x20 inches).',
    price: 1800,
    unit: 'box',
    image: 'https://images.pexels.com/photos/5264287/pexels-photo-5264287.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'tiles',
    inStock: true
  },
  {
    id: '5',
    name: 'TMT Steel Bars (10mm)',
    description: 'High-tensile strength TMT steel bars for reinforcement. Bundle of 5 bars (12ft each).',
    price: 2200,
    unit: 'bundle',
    image: 'https://images.pexels.com/photos/6494658/pexels-photo-6494658.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'steel',
    inStock: true,
    featured: true
  },
  {
    id: '6',
    name: 'Italian Marble Tiles',
    description: 'Luxurious Italian marble tiles for flooring. Box of 5 tiles (24x24 inches).',
    price: 5500,
    unit: 'box',
    image: 'https://images.pexels.com/photos/5708082/pexels-photo-5708082.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'marble',
    inStock: true
  },
  {
    id: '7',
    name: 'PVC Pipes Bundle',
    description: 'High-quality PVC pipes for plumbing. Bundle of 10 pipes (3/4 inch, 10ft each).',
    price: 1450,
    unit: 'bundle',
    image: 'https://images.pexels.com/photos/6444261/pexels-photo-6444261.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'plumbing',
    inStock: true
  },
  {
    id: '8',
    name: 'Electrical Wiring Kit',
    description: 'Complete electrical wiring kit with copper wires, switches, and sockets.',
    price: 3200,
    unit: 'kit',
    image: 'https://images.pexels.com/photos/5088188/pexels-photo-5088188.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'electrical',
    inStock: true,
    featured: true
  },
  {
    id: '9',
    name: 'White Cement',
    description: 'Fine white cement for decorative purposes and tile jointing. 25kg bag.',
    price: 550,
    unit: 'bag',
    image: 'https://images.pexels.com/photos/4219054/pexels-photo-4219054.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'cement',
    inStock: true
  },
  {
    id: '10',
    name: 'Coarse Aggregates',
    description: 'Crushed stone aggregates for concrete mixing. 50kg bag.',
    price: 280,
    unit: 'bag',
    image: 'https://images.pexels.com/photos/4219047/pexels-photo-4219047.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'sand',
    inStock: true
  },
  {
    id: '11',
    name: 'AAC Blocks',
    description: 'Lightweight Autoclaved Aerated Concrete blocks. Pack of 50 blocks.',
    price: 3200,
    unit: 'pack',
    image: 'https://images.pexels.com/photos/1260312/pexels-photo-1260312.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'bricks',
    inStock: true
  },
  {
    id: '12',
    name: 'Wall Tiles',
    description: 'Decorative ceramic wall tiles. Box of 12 tiles (12x18 inches).',
    price: 1500,
    unit: 'box',
    image: 'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'tiles',
    inStock: true
  }
];

export const getProductsByCategory = (category: string) => {
  return products.filter(product => product.category === category);
};

export const getFeaturedProducts = () => {
  return products.filter(product => product.featured);
};

export const getProductById = (id: string) => {
  return products.find(product => product.id === id);
};

export const categories = [
  { id: 'cement', name: 'Cement', icon: 'Package' },
  { id: 'sand', name: 'Sand', icon: 'Layers' },
  { id: 'bricks', name: 'Bricks', icon: 'Square' },
  { id: 'tiles', name: 'Tiles', icon: 'Grid3X3' },
  { id: 'steel', name: 'Steel', icon: 'List' },
  { id: 'marble', name: 'Marble', icon: 'Gem' },
  { id: 'plumbing', name: 'Plumbing', icon: 'Pipe' },
  { id: 'electrical', name: 'Electrical', icon: 'Zap' }
];