import React, { useEffect, useState } from 'react'
import AccordionComponent from '../components/AccordionComponent'
import ProductCard from '../components/ProductCard'
import { useSearchParams } from 'react-router-dom';

const Products = () => {
    const [products, setProducts] = useState([]);
    const [searchParams] = useSearchParams();
  
    const getProduct = async () => {
      let queryString = searchParams.toString();
      let response = await fetch(`http://localhost:5000/api/v1/products?${queryString}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      response = await response.json();
      setProducts(response.data);
    };
  
    useEffect(() => {
      getProduct();
    }, [searchParams]);
  
    return (
      <div className='py-24 container mx-auto'>
        <div className="lg:flex md:flex gap-10 sm:inline">
          <div className="lg:w-2/7 md:w-1/4 w-full mb-5">
            <div className='lg:fixed'>
              <div className='lg:fixed xl:w-80 md:fixed lg:w-60 md:w-44 sm'>
                <AccordionComponent />
              </div>
            </div>
          </div>
          <div className="col-span-3 lg:w-5/7 md:w-3/4 sm:w-full">
            <div className="grid xl:grid-cols-4 lg:grid-cols-2 md:grid-cols-2 grid-cols-2 gap-4">
              {products.map((data, index) => (
                <ProductCard key={index} data={data} />
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  };
  
  export default Products;
