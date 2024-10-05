import React from 'react';

const GenderGrid = () => {
  return (
    <div className="grid grid-cols-3 gap-2">
      <div className="relative overflow-hidden group">
        <img 
          src="https://rukminim2.flixcart.com/image/850/1000/l4a7pu80/shoe/z/g/z/6-br-128-40-pos-planet-of-shoes-brown-original-imagf7zunbzgdjg7.jpeg?q=20&crop=false" 
          alt="Men's Shoes" 
          className="w-full h-auto object-cover transition-transform duration-300 ease-in-out transform group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black opacity-50 pointer-events-none"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-white md:text-4xl sm:text-2xl text-xl font-semibold pointer-events-none">Men</span>
        </div>
      </div>

      <div className="relative overflow-hidden group">
        <img 
          src="https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/843cad44374712d7b9afea098475cfb6.jpg?imageMogr2/auto-orient%7CimageView2/2/w/800/q/70/format/webp" 
          alt="Women's Shoes" 
          className="w-full h-auto object-cover transition-transform duration-300 ease-in-out transform group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black opacity-50 pointer-events-none"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-white md:text-4xl sm:text-2xl text-xl font-semibold pointer-events-none">Women</span>
        </div>
      </div>

      <div className="relative overflow-hidden group">
        <img 
          src="https://i5.walmartimages.com/asr/d0184aba-e82e-499f-a910-a52661942dea.675d50cdb6cb5cb39bdd5bcf6487aaf8.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF" 
          alt="Kids' Shoes" 
          className="w-full h-auto object-cover transition-transform duration-300 ease-in-out transform group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black opacity-50 pointer-events-none"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-white md:text-4xl sm:text-2xl text-xl font-semibold pointer-events-none">Kids</span>
        </div>
      </div>
    </div>
  );
}

export default GenderGrid;
