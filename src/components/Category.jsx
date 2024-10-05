import React from 'react'
import category from '../utils/category';
import CategoryCard from './CategoryCard';

const Category = () => {

  return (
      <div>
            <h1 className='text-4xl font-semibold text-sky-900 py-12'>
                Category
            </h1>
            <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10'>
                {
                    category.map((data, index) => {
                        return (
                            <CategoryCard key={index} data={data} />
                        )
                    })
                }
            </div>
        </div>
  )
}

export default Category
