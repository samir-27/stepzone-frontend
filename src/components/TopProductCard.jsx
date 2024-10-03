import React from 'react'

const TopProductCard = ({data}) => {
    return (
        <div>
            <div class="relative flex flex-col overflow-hidden rounded-2xl px-8 pt-2 h-56 shadow-lg  transition-transform duration-300 ease-in-out transform hover:scale-110">
                <img src={data.path} alt="University of Southern California" class="absolute inset-0 h-full w-full object-cover"/>
                    <div class="absolute"></div>
                    <h3 class="z-10 text-xl font-bold text-gray-600">{data.title}</h3>
            </div>
        </div>
    )
}

export default TopProductCard
