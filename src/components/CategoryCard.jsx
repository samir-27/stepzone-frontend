import React, { useEffect } from 'react';
import 'animate.css';
import WOW from 'wowjs';

const CategoryCard = ({ data }) => {
    useEffect(() => {
        new WOW.WOW().init(); 
    }, []);

    return (
        <div className="wow animate__animated animate__jackInTheBox">
            <div className="relative flex flex-col overflow-hidden rounded-2xl px-8 pt-2 h-44 sm:h-56 shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-110">
                <img src={data.path} alt="Category" className="absolute inset-0 h-full w-full object-cover" />
                <div className="absolute"></div>
                <h3 className="z-10 text-xl font-bold text-gray-600">{data.category}</h3>
            </div>
        </div>
    );
}

export default CategoryCard;
