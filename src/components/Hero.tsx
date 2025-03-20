
import React from 'react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <div className="relative w-full bg-gray-100 overflow-hidden">
      <div className="container mx-auto px-4 py-20 md:py-28 flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2 mb-10 md:mb-0 md:pr-10">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Best Nails For<br />Best Moments
          </h1>
          <p className="text-gray-600 mb-8">
            Feugiat primis and ligula laoreet auctor undo mauris
            auctor laoreet purus pretium a sapien euismod
          </p>
          <Button variant="default" className="bg-pink-500 hover:bg-pink-600 uppercase text-sm">
            Find Out More
          </Button>
        </div>
        <div className="w-full md:w-1/2">
          <img 
            src="/lovable-uploads/0f20b1ad-642f-4f0c-9af2-24009966b87a.png" 
            alt="Beautiful nails design" 
            className="w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
