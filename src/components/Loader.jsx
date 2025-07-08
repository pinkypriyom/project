import React from 'react';
import { assets } from '../assets/assets'; // Adjust if assets path differs

const Loader = () => {
  return (
    <div className="fixed inset-0 bg-white bg-opacity-90 flex flex-col justify-center items-center z-50">
      <img 
        src={assets.loading} 
        alt="Loading..." 
        className="w-48 h-48 animate-bounce" 
      />
      <p className="mt-4 text-lg font-semibold text-gray-700">Magic Happening, please wait...</p>
    </div>
  );
};

export default Loader;
