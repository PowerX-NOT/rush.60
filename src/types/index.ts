export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  unit: string;
  image: string;
  category: ProductCategory;
  inStock: boolean;
  featured?: boolean;
}

export type ProductCategory = 
  | 'cement'
  | 'sand'
  | 'bricks'
  | 'tiles'
  | 'steel'
  | 'marble'
  | 'plumbing'
  | 'electrical';

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface Order {
  id: string;
  items: CartItem[];
  totalAmount: number;
  address: string;
  phone: string;
  name: string;
  paymentMethod: 'cod';
  status: OrderStatus;
  createdAt: string;
  estimatedDeliveryTime: string;
}

export type OrderStatus = 
  | 'pending'
  | 'confirmed'
  | 'out_for_delivery'
  | 'delivered'
  | 'cancelled';