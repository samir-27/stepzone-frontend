import React from 'react'
import AccordionComponent from '../components/AccordionComponent'

const Products = () => {
    return (
        <div className='py-5 container mx-auto'>
            <div class="grid grid-cols-4 gap-4">

                <div class="">
                    <AccordionComponent />
                </div>
                <div class="col-span-3">contant</div>

            </div>
        </div>
    )
}

export default Products
