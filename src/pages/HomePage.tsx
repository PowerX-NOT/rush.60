import React from 'react';
import Hero from '../components/sections/Hero';
import Categories from '../components/sections/Categories';
import FeaturedProducts from '../components/sections/FeaturedProducts';
import HowItWorks from '../components/sections/HowItWorks';
import DeliveryMap from '../components/sections/DeliveryMap';
import Testimonials from '../components/sections/Testimonials';
import ChatWidget from '../components/chat/ChatWidget';

const HomePage = () => {
  return (
    <>
      <Hero />
      <Categories />
      <FeaturedProducts />
      <HowItWorks />
      <DeliveryMap />
      <Testimonials />
      <ChatWidget />
    </>
  );
};

export default HomePage;