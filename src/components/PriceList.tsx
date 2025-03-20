
import React from 'react';
import { Button } from '@/components/ui/button';

const PriceList = () => {
  const manicureServices = [
    { id: 1, name: "Classic Manicure", price: "$19", duration: "25 minutes" },
    { id: 2, name: "Spa Manicure", price: "$30", duration: "35 minutes" },
    { id: 3, name: "Aloe Vera Manicure", price: "$48", duration: "45 minutes" },
    { id: 4, name: "Gel Manicure", price: "$35", duration: "40 minutes" },
    { id: 5, name: "Signature Gel Manicure", price: "$50", duration: "60 minutes" },
  ];

  const pedicureServices = [
    { id: 1, name: "Classic Pedicure", price: "$32", duration: "40 minutes" },
    { id: 2, name: "Spa Pedicure", price: "$37", duration: "50 minutes" },
    { id: 3, name: "TC Signature Pedicure", price: "$44", duration: "60 minutes" },
    { id: 4, name: "Gel Pedicure", price: "$42", duration: "40 minutes" },
    { id: 5, name: "Deluxe Gel Pedicure", price: "$84", duration: "60 minutes" },
  ];

  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center mb-12">
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <p className="text-gray-500 uppercase tracking-wider mb-2">FRESH, SHINY, BRIGHT</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Make your day shine<br />with your shiny nails
            </h2>
          </div>
          <div className="w-full md:w-1/2 flex justify-center md:justify-end">
            <img 
              src="https://cdn.pixabay.com/photo/2017/09/29/03/45/nail-polish-2797878_960_720.png" 
              alt="Nail polish bottles" 
              className="w-3/4 h-auto"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            {manicureServices.map((service) => (
              <ServiceItem key={service.id} {...service} />
            ))}
          </div>
          <div>
            {pedicureServices.map((service) => (
              <ServiceItem key={service.id} {...service} />
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" className="uppercase">
            View All Prices
          </Button>
        </div>
      </div>
    </div>
  );
};

const ServiceItem = ({ name, price, duration }: { name: string, price: string, duration: string }) => {
  return (
    <div className="mb-6">
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <p className="font-medium text-gray-800">{name}</p>
          <p className="text-sm text-gray-500">Service length {duration}</p>
        </div>
        <div className="flex items-center">
          <div className="w-12 border-b border-gray-300 mx-2"></div>
          <span className="font-semibold text-gray-800">{price}</span>
        </div>
      </div>
    </div>
  );
};

export default PriceList;
