import React from 'react';
import StarRating from './StarRating';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ data }) => {
  const navigate = useNavigate();

  return (
    <div
      className="group relative w-full border border-gray-200 rounded-2xl overflow-hidden shadow-lg bg-white transition-all duration-300 hover:shadow-2xl hover:scale-105 cursor-pointer"
      onClick={() => navigate(`/product/${data._id}`)}
    >
      {/* Image Section */}
      <div className="relative w-full overflow-hidden rounded-t-2xl">
        <img
          src={data.image}
          className="w-full md:h-72 sm:h-64 h-56 object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
          alt={data.name}
        />
      </div>

      {/* Product Info */}
      <div className="p-4">
        <h1 className="text-lg font-semibold text-gray-900 truncate">{data.name}</h1>
        <p className="text-md font-medium text-gray-600 mt-1">
          Price: <span className="text-xl font-bold text-blue-500">${data.price}</span>
        </p>
        <div className="mt-2 flex items-center">
          <StarRating rating={5} />
          <span className="ml-2 text-sm text-gray-500">(120 Reviews)</span>
        </div>
      </div>

    </div>
  );
};

export default ProductCard;
