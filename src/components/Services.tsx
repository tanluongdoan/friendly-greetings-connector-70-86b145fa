
import React from 'react';

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Nail Care",
      description: "Ligula risus auctor tempus and dolor vitae undo purus semper sodales",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-12 h-12 mx-auto mb-4">
          <path d="M18 20V10" />
          <path d="M12 8V4" />
          <path d="M12 20V14" />
          <path d="M6 20V16" />
          <path d="M6 12V10" />
          <path d="M6 6v0" />
          <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
        </svg>
      )
    },
    {
      id: 2,
      title: "Nail Art",
      description: "Ligula risus auctor tempus and dolor vitae undo purus semper sodales",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-12 h-12 mx-auto mb-4">
          <path d="M2 12C2 6.5 6.5 2 12 2a10 10 0 0 1 8 4" />
          <path d="M5 19.5C5 18.1 6.1 17 7.5 17H16" />
          <path d="M15 13v-3a2 2 0 0 1 4 0v8" />
        </svg>
      )
    },
    {
      id: 3,
      title: "Add-Ons",
      description: "Ligula risus auctor tempus and dolor vitae undo purus semper sodales",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-12 h-12 mx-auto mb-4">
          <rect width="20" height="12" x="2" y="7" rx="2" />
          <path d="M22 10c-1.5 0-3 .5-3 2-2 0-4 .5-4 2" />
          <path d="M2 10c1.5 0 3 .5 3 2 2 0 4 .5 4 2" />
          <path d="M12 7v12" />
        </svg>
      )
    }
  ];

  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard key={service.id} {...service} />
          ))}
        </div>
      </div>
    </div>
  );
};

const ServiceCard = ({ title, description, icon }: { title: string, description: string, icon: React.ReactNode }) => {
  return (
    <div className="text-center">
      {icon}
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <a href="#" className="inline-block text-gray-800 font-medium border-b border-gray-800 pb-1 hover:text-pink-500 hover:border-pink-500 transition duration-300">
        FIND OUT MORE
      </a>
    </div>
  );
};

export default Services;
