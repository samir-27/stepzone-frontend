import React from 'react'
import AccordionComponent from '../components/AccordionComponent'
import ProductCard from '../components/ProductCard'
import allProducts from '../utils/allproduct'

const Products = () => {
    return (
        <div className='py-24 container mx-auto px-2'>
            <div class="lg:flex md:flex gap-10 sm:inline">
                <div class="lg:w-2/7 md:w-1/4 w-full mb-5">
                    <div className='lg:fixed'>
                        <div className='xl:w-80 lg:fixed md:fixed lg:w-64 md:w-44 sm'>
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
