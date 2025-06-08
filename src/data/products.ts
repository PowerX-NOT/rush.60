import { Product } from '../types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Premium Portland Cement',
    description: 'High-quality Portland cement for all your construction needs. 50kg bag.',
    price: 450,
    unit: 'bag',
    image: 'https://bulkcementbooking.in/wp-content/uploads/2025/03/New-Project-1024x1024.png',
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
    image: 'https://5.imimg.com/data5/SELLER/Default/2023/10/357161803/VY/IS/TY/29190287/plastering-river-sand-500x500.jpg',
    category: 'sand',
    inStock: true
  },
  {
    id: '3',
    name: 'Red Clay Bricks',
    description: 'Solid, uniform red clay bricks. Pack of 100 units.',
    price: 1200,
    unit: 'pack',
    image: 'https://5.imimg.com/data5/ANDROID/Default/2022/7/FW/EN/FI/17772297/product-jpeg-500x500.jpg',
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
    image: 'https://images.thdstatic.com/productImages/e5497455-1e60-4ea6-8c59-85d1a5b5b952/svn/vertex-merola-tile-s1frc4twev-77_600.jpg',
    category: 'tiles',
    inStock: true
  },
  {
    id: '5',
    name: 'TMT Steel Bars (10mm)',
    description: 'High-tensile strength TMT steel bars for reinforcement. Bundle of 5 bars (12ft each).',
    price: 2200,
    unit: 'bundle',
    image: 'https://5.imimg.com/data5/SELLER/Default/2021/9/EN/FB/EI/39368102/8mm-sail-tmt-bar-500x500.jpg',
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
    image: 'https://rmsstonex.in/wp-content/uploads/2024/12/Italian-Marble-in-Hyderabad-1.png',
    category: 'marble',
    inStock: true
  },
  {
    id: '7',
    name: 'PVC Pipes Bundle',
    description: 'High-quality PVC pipes for plumbing. Bundle of 10 pipes (3/4 inch, 10ft each).',
    price: 1450,
    unit: 'bundle',
    image: 'https://5.imimg.com/data5/SELLER/Default/2021/10/AL/KM/AO/9496230/column-pipe-500x500.jpg',
    category: 'plumbing',
    inStock: true
  },
  {
    id: '8',
    name: 'Electrical Wiring Kit',
    description: 'Complete electrical wiring kit with copper wires, switches, and sockets.',
    price: 3200,
    unit: 'kit',
    image: 'https://motomantra.com/wp-content/uploads/Auxpro-Dual-Color-Harness-with-box.png',
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
    image: 'https://m.media-amazon.com/images/I/51Pa3K5cv-L._AC_UF1000,1000_QL80_.jpg',
    category: 'cement',
    inStock: true
  },
  {
    id: '10',
    name: 'Coarse Aggregates',
    description: 'Crushed stone aggregates for concrete mixing. 50kg bag.',
    price: 280,
    unit: 'bag',
    image: 'https://5.imimg.com/data5/SELLER/Default/2024/9/449389692/ID/AN/AZ/60373405/12mm-construction-aggregates-500x500.jpg',
    category: 'sand',
    inStock: true
  },
  {
    id: '11',
    name: 'AAC Blocks',
    description: 'Lightweight Autoclaved Aerated Concrete blocks. Pack of 50 blocks.',
    price: 3200,
    unit: 'pack',
    image: 'https://www.myhandymans.com/wp-content/uploads/2018/09/pack-of-blocks.jpg',
    category: 'bricks',
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
