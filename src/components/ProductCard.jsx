import React from 'react'
import StarRating from './StarRating'
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ data }) => {
  const navigate = useNavigate();
  const handleClick = () =>{
    navigate(`/product/${data.id}`);
  }

  return (
    <div className='w-full border-2 rounded-2xl overflow-hidden shadow-md cursor-pointer' onClick={handleClick}>
      <div className='w-full overflow-hidden'>
        <img
          src={data.path}
          className='w-full lg:h-72 md:h-64 sm:h-64 h-52 object-cover transition-transform duration-300 ease-in-out transform hover:scale-125'
          alt='Air Jordan 1 Low'
        />
      </div>
      <div className='p-2'>
        <h1 className='text-xl'>{data.title}</h1>
        <p>Price:{data.price}</p>
        <StarRating rating={Math.round(data.rating)} />
      </div>
    </div>

  )
}

export default ProductCard
