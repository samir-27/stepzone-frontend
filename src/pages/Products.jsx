import React from 'react'
import AccordionComponent from '../components/AccordionComponent'
import ProductCard from '../components/ProductCard'
import allProducts from '../utils/allproduct'

const Products = () => {
    return (
        <div className='py-5 container mx-auto px-2'>
            <div class="lg:flex md:flex gap-10 sm:inline">
                <div class="lg:w-1/4 md:w-1/4 w-full mb-5">
                    <AccordionComponent />
                </div>
                <div class="col-span-3 lg:w-3/4 md:w-3/4 sm:w-full">
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-2 gap-4">

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
