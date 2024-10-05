import React from 'react'
import TopProductCard from './TopProductCard'
import allProducts from '../utils/allproduct'

const TopProducts = () => {
    const topProducts = allProducts
  .sort((a, b) => b.purchases - a.purchases)
  .slice(0, 8);
    return (
        <div>
            <h1 className='text-4xl font-semibold text-sky-900 lg:py-0 lg:pb-8 py-12'>
                Top Products
            </h1>
            <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10'>
                {
                    topProducts.map((data, index) => {
                        return (
                            <TopProductCard key={index} data={data} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default TopProducts
