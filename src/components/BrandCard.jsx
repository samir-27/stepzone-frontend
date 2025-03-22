import React from 'react';

const BrandCard = ({ data }) => {
  return (
    <div className="bg-blue-100 p-4 rounded-lg shadow-lg transition duration-300 wow animate__animated animate__jackInTheBox">
      <img src={data} alt="Brand" className="w-32 h-24 object-contain mx-auto" />
    </div>
  );
};

export default BrandCard;
