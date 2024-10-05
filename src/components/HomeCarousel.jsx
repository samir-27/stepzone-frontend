import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import carousel styles
import img1 from '../assets/carousel/1.webp';
import img2 from '../assets/carousel/2.avif';
import img3 from '../assets/carousel/3.jpg';
import sm1 from '../assets/carousel/1small.jpg'
import sm2 from '../assets/carousel/2small.jpg'
import sm3 from '../assets/carousel/3small.jpg'

const HomeCarousel = () => {
    const [isSmallScreen, setIsSmallScreen] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia('(max-width: 768px)');
        const handleChange = () => setIsSmallScreen(mediaQuery.matches);

        setIsSmallScreen(mediaQuery.matches);
        mediaQuery.addEventListener('change', handleChange);

        return () => mediaQuery.removeEventListener('change', handleChange);
    }, []);

    const images = isSmallScreen ? [sm1, sm2, sm3] : [img1, img2, img3];

    return (



        <div className="my-12">
            <Carousel
                showArrows={true} 
                showThumbs={false} 
                showStatus={false}
                infiniteLoop={true}
                autoPlay={true}
                interval={3000}
                emulateTouch={true}
                transitionTime={500}
                centerSlidePercentage={100}
                showIndicators={false} 
            >
                {images.map((path,index) => (
                    <div key={index}>
                        <img src={path} alt="banner" className="w-full h-112 object-cover" />
                    </div>
                ))}
            </Carousel>
        </div>
    );
};

export default HomeCarousel;
