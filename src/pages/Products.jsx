import React, { useEffect, useState } from 'react'
import AccordionComponent from '../components/AccordionComponent'
import ProductCard from '../components/ProductCard'

const Products = () => {
    const [products, setProducts] = useState([]);

    const getProduct = async () => {
        let response = await fetch('http://localhost:5000/api/v1/products', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        response = await response.json();
        console.log(response);
        setProducts(response.data); // Make sure to set the fetched data to 'products'
        console.log(products)
    }

    useEffect(() => {
        getProduct();
    }, []);

    return (
        <div className='py-24 container mx-auto xl:px-40 lg:px-28 md:px-10 px-5'>
            <div className="lg:flex md:flex gap-10 sm:inline">
                <div className="lg:w-2/7 md:w-1/4 w-full mb-5">
                    <div className='lg:fixed'>
                        <div className='lg:fixed xl:w-64 md:fixed lg:w-44 md:w-44 sm'>
                            <AccordionComponent />
                        </div>
                    </div>
                </div>
                <div className="col-span-3 lg:w-5/7 md:w-3/4 sm:w-full">
                    <div className="grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 grid-cols-2 gap-4">
                        {products.map((data, index) => (
                            <ProductCard key={index} data={data} />
                        ))}
                 
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Products;
