import React from 'react'

const ProductCard = ({data}) => {
    return (
<div className='w-full border-2 rounded-2xl overflow-hidden shadow-md'>
  <div className='w-full overflow-hidden'>
    <img
      src={data.path}
      className='w-full h-80 object-cover transition-transform duration-300 ease-in-out transform hover:scale-125'
      alt='Air Jordan 1 Low'
    />
  </div>
  <div className='p-2'>
    <h1 className='text-xl'>{data.title}</h1>
    <p>Price:{data.price}</p>
  </div>
</div>

    )
}

export default ProductCard
