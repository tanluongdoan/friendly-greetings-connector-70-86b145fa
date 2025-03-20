
import React from 'react';

const Glamour = () => {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <img 
              src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="Beautiful woman" 
              className="w-full h-auto rounded-md shadow-lg"
            />
          </div>
          
          <div className="w-full md:w-1/2 md:pl-12">
            <p className="text-gray-500 uppercase tracking-wider mb-2">GET YOUR SHINE ON</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Choose the Glamour</h2>
            
            <p className="text-gray-600 mb-6">
              Nullam tempor sapien gravida donec and pretium ipsum porta 
              integer justo an odio vitae auctor integer congue magna 
              undo purus a pretium ligula rutrum magna egestas
            </p>
            
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-pink-500 mr-2">•</span>
                <p className="text-gray-600">
                  Aliquam vitae molestie at quisque sapien voluptat and justo, 
                  aliquet molestie purus efficitur ipsum
                </p>
              </li>
              <li className="flex items-start">
                <span className="text-pink-500 mr-2">•</span>
                <p className="text-gray-600">
                  Sagittis congue augue magna risus mauris voluptat and egestas 
                  magna suscipit egestas a vitae purus
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Glamour;
