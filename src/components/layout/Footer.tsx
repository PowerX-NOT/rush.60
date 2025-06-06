import React from 'react';
import { Link } from 'react-router-dom';
import { Truck, Phone, Mail, MapPin, Clock, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-clay text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <Truck size={24} className="mr-2" />
              <h3 className="text-xl font-bold font-poppins">
                <span className="text-sand">60</span>-Minute
              </h3>
            </div>
            <p className="mb-4 text-sand/90">
              Your trusted partner for urgent construction material delivery, available 24/7.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-sand transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-sand transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-sand transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 font-poppins">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-sand transition-colors inline-block">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-sand transition-colors inline-block">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/track" className="hover:text-sand transition-colors inline-block">
                  Track Order
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-sand transition-colors inline-block">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-sand transition-colors inline-block">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 font-poppins">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Phone size={18} className="mr-2 mt-1 flex-shrink-0" />
                <span>+91 9876543210</span>
              </li>
              <li className="flex items-start">
                <Mail size={18} className="mr-2 mt-1 flex-shrink-0" />
                <span>support@60minutedelivery.com</span>
              </li>
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 mt-1 flex-shrink-0" />
                <span>123 Construction Road, Building City, 400001</span>
              </li>
              <li className="flex items-start">
                <Clock size={18} className="mr-2 mt-1 flex-shrink-0" />
                <span>Open 24/7</span>
              </li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-4 font-poppins">Newsletter</h4>
            <p className="mb-4 text-sand/90">
              Subscribe to get special offers and updates on new products.
            </p>
            <form className="mb-2">
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="px-3 py-2 rounded-l-md w-full text-gray-800 focus:outline-none"
                />
                <button
                  type="submit"
                  className="bg-terracotta hover:bg-dark-terracotta text-white px-4 py-2 rounded-r-md transition-colors"
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
        
        <div className="border-t border-sand/20 mt-8 pt-6 text-center text-sm text-sand/80">
          <p>© {new Date().getFullYear()} 60-Minute Delivery. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;