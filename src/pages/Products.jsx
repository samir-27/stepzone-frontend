import React from 'react'
import AccordionComponent from '../components/AccordionComponent'
import ProductCard from '../components/ProductCard'
import allProducts from '../utils/allproduct'

const Products = () => {
    return (
        <div className='py-5 container mx-auto'>
            <div class="grid grid-cols-4 gap-4">

                <div class="">
                    <AccordionComponent />
                </div>
                <div class="col-span-3">
                    <div className="grid grid-cols-4 gap-4">

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
