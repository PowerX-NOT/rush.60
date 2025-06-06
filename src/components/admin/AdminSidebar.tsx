import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Home, 
  Package, 
  ShoppingBag, 
  Users, 
  Truck, 
  BarChart, 
  Settings,
  ChevronRight
} from 'lucide-react';

const menuItems = [
  { icon: Home, title: 'Dashboard', path: '/admin' },
  { icon: Package, title: 'Products', path: '/admin/products' },
  { icon: ShoppingBag, title: 'Orders', path: '/admin/orders' },
  { icon: Users, title: 'Customers', path: '/admin/customers' },
  { icon: Truck, title: 'Delivery', path: '/admin/delivery' },
  { icon: BarChart, title: 'Reports', path: '/admin/reports' },
  { icon: Settings, title: 'Settings', path: '/admin/settings' },
];

const AdminSidebar = () => {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };
  
  return (
    <aside className="w-64 bg-white shadow-elevation-1 h-screen flex-shrink-0">
      <div className="py-6 px-4">
        <nav className="mt-4 space-y-1">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`
                flex items-center px-4 py-3 rounded-lg transition-colors
                ${isActive(item.path) 
                  ? 'bg-terracotta text-white font-medium' 
                  : 'hover:bg-sand text-gray-700'
                }
              `}
            >
              <item.icon size={18} className="mr-3 flex-shrink-0" />
              <span>{item.title}</span>
              
              {isActive(item.path) && (
                <ChevronRight size={16} className="ml-auto" />
              )}
            </Link>
          ))}
        </nav>
      </div>
    </aside>
  );
};

export default AdminSidebar;