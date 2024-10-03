import React, { useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import item1 from '../assets/brands/nike.png';
import item2 from '../assets/brands/bata.png';
import item3 from '../assets/brands/clarkes.png';
import item4 from '../assets/brands/puma.png';
import item5 from '../assets/brands/reebok.png';
import item6 from '../assets/brands/skechers.png';
import item7 from '../assets/brands/adidas.png';

const Brand = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 2
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  const IMAGES = [item1, item2, item3, item4, item5, item6, item7]

  return (
    <div>
      
      <Carousel responsive={responsive} infinite={true} autoPlay={true} pauseOnHover={true} autoPlaySpeed={1000} swipeable={false} draggable={false}>
        {IMAGES.map((image, index) => {
          return (

            <div key={index} className='py-12 '>
              <img className='h-56 object-contain px-5 duration-500' src={image} alt="" />
            </div>
          )
        })}
      </Carousel>
    </div>
  );
};

export default Brand;



