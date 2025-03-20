
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Glamour from '@/components/Glamour';
import PriceList from '@/components/PriceList';
import Promotion from '@/components/Promotion';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Hero />
      <Services />
      <Glamour />
      <PriceList />
      <Promotion />
    </div>
  );
};

export default Index;
