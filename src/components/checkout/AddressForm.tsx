import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, User, Phone, Home } from 'lucide-react';
import Input from '../ui/Input';
import Button from '../ui/Button';
import { useLocationStore } from '../../store/useLocationStore';
import { fadeIn } from '../../utils/animations';

interface AddressFormProps {
  onSubmit: (data: {
    name: string;
    phone: string;
    address: string;
  }) => void;
}

const AddressForm: React.FC<AddressFormProps> = ({ onSubmit }) => {
  const { address, setAddress, updateEstimatedTime } = useLocationStore();
  
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: address || '',
  });
  
  const [errors, setErrors] = useState({
    name: '',
    phone: '',
    address: '',
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user types
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
    
    // Update address in location store
    if (name === 'address') {
      setAddress(value);
    }
  };
  
  const validateForm = () => {
    const newErrors = {
      name: '',
      phone: '',
      address: '',
    };
    
    let isValid = true;
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      isValid = false;
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
      isValid = false;
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid 10-digit phone number';
      isValid = false;
    }
    
    if (!formData.address.trim()) {
      newErrors.address = 'Address is required';
      isValid = false;
    }
    
    setErrors(newErrors);
    return isValid;
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      updateEstimatedTime();
      onSubmit(formData);
    }
  };
  
  return (
    <motion.form
      onSubmit={handleSubmit}
      className="bg-white rounded-lg shadow-elevation-1 p-6"
      initial="hidden"
      animate="visible"
      variants={fadeIn}
    >
      <h3 className="text-xl font-semibold mb-4 font-poppins">Delivery Address</h3>
      
      <div className="space-y-4">
        <Input
          label="Full Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter your full name"
          icon={<User size={18} />}
          error={errors.name}
        />
        
        <Input
          label="Phone Number"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Enter your 10-digit phone number"
          icon={<Phone size={18} />}
          error={errors.phone}
        />
        
        <Input
          label="Delivery Address"
          name="address"
          value={formData.address}
          onChange={handleChange}
          placeholder="Enter your complete delivery address"
          icon={<MapPin size={18} />}
          error={errors.address}
        />
        
        <div className="text-sm text-gray-500 flex items-start">
          <Home size={16} className="mr-2 mt-0.5 flex-shrink-0" />
          <p>
            Please provide the complete address including building name, street name, and landmarks for quick delivery.
          </p>
        </div>
      </div>
      
      <Button 
        type="submit" 
        variant="primary" 
        size="lg" 
        fullWidth 
        className="mt-6"
      >
        Continue to Payment
      </Button>
    </motion.form>
  );
};

export default AddressForm;