import { create } from 'zustand';

interface LocationState {
  address: string;
  setAddress: (address: string) => void;
  latitude: number | null;
  longitude: number | null;
  setCoordinates: (lat: number, lng: number) => void;
  estimatedDeliveryTime: number; // in minutes
  updateEstimatedTime: () => void;
}

export const useLocationStore = create<LocationState>((set) => ({
  address: '',
  latitude: null,
  longitude: null,
  estimatedDeliveryTime: 60, // Default is 60 minutes
  
  setAddress: (address: string) => set({ address }),
  
  setCoordinates: (latitude: number, longitude: number) => set({ 
    latitude, 
    longitude
  }),
  
  updateEstimatedTime: () => {
    // In a real app, this would call a service to calculate ETA based on coordinates
    // For demo purposes, we're setting a random time between 30-60 minutes
    const randomTime = Math.floor(Math.random() * 31) + 30;
    set({ estimatedDeliveryTime: randomTime });
  }
}));