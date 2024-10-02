import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import allProducts from '../utils/allproduct';

const Product = () => {

    const params = useParams();

    const [product, setProduct] = useState(null);

    useEffect(() => {
        const foundProduct = allProducts.find((o) => o.id === Number(params.id));
        if (foundProduct) setProduct(foundProduct);
        window.scrollTo(0, 0);
    }, [params]);

    const [currentImage, setCurrentImage] = useState(null);
    useEffect(() => {
        if (product?.path) {
            setCurrentImage(product.path);
        }
    }, [product]);

    return (
        <div className="mt-24 container mx-auto">
            <div className="xl:flex lg:flex md:flex gap-6">
                <div className="flex gap-6 grid-cols-6 xl:w-3/5 lg:w-3/5 md:w-3/5  w-full justify-center">

                    <div className="flex flex-col justify-between">
                        {product?.images.map((image, index) => (
                            <img
                                key={index}
                                src={image}
                                alt={`product img ${index}`}
                                className="xl:w-36 xl:h-36 lg:h-32 lg:w-32 w-24 h-24 cursor-pointer shadow-lg object-cover"
                                onMouseEnter={() => setCurrentImage(image)}
                                onMouseOut={()=> setCurrentImage(product.path)}
                            />
                        ))}
                    </div>

                    <div className='border-2 bg-gray-200 '>
                        <img
                            src={currentImage}
                            alt="product img big"
                            className="xl:h-128 xl:w-128 lg:h-112 lg:w-112 md:h-96 md:w-96 sm:h-96 sm:w-96 h-96 w-96 object-contain"
                        />
                    </div>
                </div>
                <div className='mt-6 xl:w-2/5 lg:w-2/5 md:w-2/5'>
                    <h2 className="text-lg font-semibold">Product Details</h2>
                    <h1 className='text-4xl font-bold py-2'>{product?.title}</h1>
                    <p>An iconic look that lasts. This AJ1 pairs the classic design of the original with premium materials that will keep you going all day.</p>
                    <br></br>
                    <h1 className='text-3xl font-semibold text-rose-500'>Price: 500$</h1>
                    <p className='text-gray-500 text-xl'>(Inclusive of all taxes)</p>
                    <h2 className='py-5 text-gray-800 text-xl'>Slect Size</h2>
                    <div className='grid grid-cols-3 gap-2'>
                        <button className='p-2 border-2 border-gray-500 rounded-md hover:bg-gray-500 hover:text-white'>XS</button>
                        <button className='p-2 border-2 border-gray-500 rounded-md hover:bg-gray-500 hover:text-white'>S</button>
                        <button className='p-2 border-2 border-gray-500 rounded-md hover:bg-gray-500 hover:text-white'>M</button>
                        <button className='p-2 border-2 border-gray-500 rounded-md hover:bg-gray-500 hover:text-white'>L</button>
                        <button className='p-2 border-2 border-gray-500 rounded-md hover:bg-gray-500 hover:text-white'>Xl</button>
                        <button className='p-2 border-2 border-gray-500 rounded-md hover:bg-gray-500 hover:text-white'>2XL</button>
                    </div>
                    <div className='grid grid-cols-2 gap-3'>
                        <button className='p-3 bg-sky-900 rounded-md text-white text-xl font-semibold mt-5 w-full hover:bg-rose-700'>Add To Cart</button>
                        <button className='p-3 bg-gray-200 rounded-md text-gray-800 text-xl font-semibold mt-5 w-full hover:bg-rose-700 hover:text-white'>Add To Wishlist</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;
