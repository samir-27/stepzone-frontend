import React, { useEffect } from 'react'
import homeimg from '../assets/home.png'
import 'animate.css';
import WOW from 'wowjs';

const Hero = () => {
  useEffect(() => {
    new WOW.WOW().init();
  }, []);
  return (
    <div className=''>
      <div className=" xl:h-screen lg:h-128 lg:mt-0 md:mt-24 mt-24">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 min-h-full wow animate__animated animate__bounceInDown" data-wow-duration="1.2s">
          <div className="md:h-full"> 
            <img className="object-contain h-full w-full mx-auto p-4 saturate-800 bg-blur-lg wave wow animate__animated animate__shakeY animate__infinite	infinite" data-wow-duration="8s" src={homeimg} alt="" />
          </div>
          <div className="flex flex-col justify-center items-center text-center gap-10">
            <h1 className="xl:text-6xl lg:text-5xl md:text-5xl text-4xl text-rose-600  font-semibold">Where Fashion Meets Elegance</h1>
            <p className="text-xl text-sky-900 font-semibold">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            <button className='p-2 bg-sky-900 rounded-md text-white text-xl font-semibold w-80 hover:bg-rose-600'>Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
