import React from 'react'
import AccordionComponent from '../components/AccordionComponent'
import ProductCard from '../components/ProductCard'
import allProducts from '../utils/allproduct'

const Products = () => {
    return (
        <div className='py-24 container mx-auto xl:px-40 lg:px-28 md:px-10 px-5'>
            <div class="lg:flex md:flex gap-10 sm:inline">
                <div class="lg:w-2/7 md:w-1/4 w-full mb-5">
                    <div className='lg:fixed'>
                        <div className='lg:fixed xl:w-64 md:fixed  lg:w-44 md:w-44 sm'>
                            <AccordionComponent />
                        </div>
                    </div>
                </div>
                <div class="col-span-3 lg:w-5/7 md:w-3/4 sm:w-full">
                    <div className="grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 grid-cols-2 gap-4">

                        {allProducts.map((data, index) => {
                            return (
                                <ProductCard data={data} />
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Products
