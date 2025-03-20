
import React from 'react';

const Promotion = () => {
  return (
    <div className="py-16 bg-gray-100 relative">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 text-center md:text-left mb-8 md:mb-0">
            <p className="text-gray-700 mb-4">
              We want to make every girl<br />
              pretty, happy, and loved!
            </p>
            <h2 className="text-4xl md:text-6xl font-bold text-gray-800">
              20% OFF
            </h2>
          </div>
          <div className="w-full md:w-1/2 flex justify-center md:justify-end">
            <img 
              src="https://images.unsplash.com/photo-1526045478516-99145907023c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="Girl with sunglasses" 
              className="w-full h-auto rounded-md shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Promotion;
