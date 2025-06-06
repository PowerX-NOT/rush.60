import React from 'react';
import { Link } from 'react-router-dom';
import { User, Bell, Settings, LogOut } from 'lucide-react';

const AdminHeader = () => {
  return (
    <header className="bg-white shadow-elevation-1 py-2 px-4">
      <div className="flex items-center justify-between">
        <Link to="/admin" className="flex items-center">
          <span className="text-xl font-bold font-poppins text-terracotta">
            <span className="text-dark-terracotta">60</span>-Minute
          </span>
          <span className="ml-2 bg-sand text-clay text-xs px-2 py-0.5 rounded">
            Admin Panel
          </span>
        </Link>
        
        <div className="flex items-center space-x-4">
          <button className="p-2 rounded-full hover:bg-gray-100 relative">
            <Bell size={20} />
            <span className="absolute -top-1 -right-1 bg-terracotta text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
              3
            </span>
          </button>
          
          <button className="p-2 rounded-full hover:bg-gray-100">
            <Settings size={20} />
          </button>
          
          <div className="flex items-center">
            <div className="w-8 h-8 rounded-full bg-terracotta text-white flex items-center justify-center mr-2">
              <User size={16} />
            </div>
            <span className="font-medium text-sm">Admin</span>
          </div>
          
          <button className="p-2 rounded-full hover:bg-gray-100 text-error">
            <LogOut size={20} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default AdminHeader;