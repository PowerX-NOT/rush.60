import React from 'react';
import { TrendingUp, Users, Package, Truck, DollarSign, Clock } from 'lucide-react';
import AdminHeader from '../components/admin/AdminHeader';
import AdminSidebar from '../components/admin/AdminSidebar';

const AdminDashboardPage = () => {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <AdminSidebar />
      
      <div className="flex-1 flex flex-col">
        <AdminHeader />
        
        <main className="flex-1 p-6">
          <div className="mb-6">
            <h1 className="text-2xl font-bold font-poppins">Dashboard</h1>
            <p className="text-gray-600">Welcome back, Admin. Here's what's happening today.</p>
          </div>
          
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <div className="bg-white rounded-lg shadow-elevation-1 p-6">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-gray-500 mb-1">Total Orders</p>
                  <h3 className="text-2xl font-bold">156</h3>
                  <p className="text-success text-sm mt-1 flex items-center">
                    <TrendingUp size={14} className="mr-1" />
                    +12.5% from yesterday
                  </p>
                </div>
                <div className="w-12 h-12 rounded-full bg-terracotta/10 flex items-center justify-center">
                  <Package size={20} className="text-terracotta" />
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-elevation-1 p-6">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-gray-500 mb-1">Revenue</p>
                  <h3 className="text-2xl font-bold">₹58,630</h3>
                  <p className="text-success text-sm mt-1 flex items-center">
                    <TrendingUp size={14} className="mr-1" />
                    +8.2% from yesterday
                  </p>
                </div>
                <div className="w-12 h-12 rounded-full bg-terracotta/10 flex items-center justify-center">
                  <DollarSign size={20} className="text-terracotta" />
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-elevation-1 p-6">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-gray-500 mb-1">Customers</p>
                  <h3 className="text-2xl font-bold">1,248</h3>
                  <p className="text-success text-sm mt-1 flex items-center">
                    <TrendingUp size={14} className="mr-1" />
                    +4.9% from last week
                  </p>
                </div>
                <div className="w-12 h-12 rounded-full bg-terracotta/10 flex items-center justify-center">
                  <Users size={20} className="text-terracotta" />
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Recent Orders */}
            <div className="lg:col-span-2 bg-white rounded-lg shadow-elevation-1 p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold">Recent Orders</h2>
                <button className="text-sm text-terracotta hover:underline">
                  View all
                </button>
              </div>
              
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="text-left text-gray-500 border-b">
                      <th className="pb-3 font-medium">Order ID</th>
                      <th className="pb-3 font-medium">Customer</th>
                      <th className="pb-3 font-medium">Status</th>
                      <th className="pb-3 font-medium">Total</th>
                      <th className="pb-3 font-medium">Time</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="py-3 font-medium">#123456</td>
                      <td className="py-3">Rajesh Kumar</td>
                      <td className="py-3">
                        <span className="bg-amber-100 text-amber-800 text-xs px-2 py-1 rounded-full">
                          In Transit
                        </span>
                      </td>
                      <td className="py-3">₹1,850</td>
                      <td className="py-3 text-gray-500">10:42 AM</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 font-medium">#123455</td>
                      <td className="py-3">Priya Sharma</td>
                      <td className="py-3">
                        <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                          Delivered
                        </span>
                      </td>
                      <td className="py-3">₹3,200</td>
                      <td className="py-3 text-gray-500">10:15 AM</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 font-medium">#123454</td>
                      <td className="py-3">Amit Patel</td>
                      <td className="py-3">
                        <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                          Confirmed
                        </span>
                      </td>
                      <td className="py-3">₹2,400</td>
                      <td className="py-3 text-gray-500">9:58 AM</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 font-medium">#123453</td>
                      <td className="py-3">Neha Gupta</td>
                      <td className="py-3">
                        <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                          Delivered
                        </span>
                      </td>
                      <td className="py-3">₹5,600</td>
                      <td className="py-3 text-gray-500">9:30 AM</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            
            {/* Active Deliveries */}
            <div className="bg-white rounded-lg shadow-elevation-1 p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold">Active Deliveries</h2>
                <button className="text-sm text-terracotta hover:underline">
                  View all
                </button>
              </div>
              
              <div className="space-y-4">
                <div className="border border-gray-200 rounded-lg p-4">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h4 className="font-medium">#123456</h4>
                      <p className="text-sm text-gray-500">Rajesh Kumar</p>
                    </div>
                    <span className="bg-amber-100 text-amber-800 text-xs px-2 py-1 rounded-full">
                      In Transit
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center">
                      <Truck size={14} className="mr-1 text-terracotta" />
                      <span>15 mins away</span>
                    </div>
                    <div className="flex items-center">
                      <Clock size={14} className="mr-1 text-terracotta" />
                      <span>ETA: 10:55 AM</span>
                    </div>
                  </div>
                </div>
                
                <div className="border border-gray-200 rounded-lg p-4">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h4 className="font-medium">#123454</h4>
                      <p className="text-sm text-gray-500">Amit Patel</p>
                    </div>
                    <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                      Confirmed
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center">
                      <Package size={14} className="mr-1 text-terracotta" />
                      <span>Preparing</span>
                    </div>
                    <div className="flex items-center">
                      <Clock size={14} className="mr-1 text-terracotta" />
                      <span>ETA: 11:10 AM</span>
                    </div>
                  </div>
                </div>
                
                <div className="border border-gray-200 rounded-lg p-4">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h4 className="font-medium">#123458</h4>
                      <p className="text-sm text-gray-500">Vikram Singh</p>
                    </div>
                    <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                      Confirmed
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center">
                      <Package size={14} className="mr-1 text-terracotta" />
                      <span>Preparing</span>
                    </div>
                    <div className="flex items-center">
                      <Clock size={14} className="mr-1 text-terracotta" />
                      <span>ETA: 11:25 AM</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminDashboardPage;