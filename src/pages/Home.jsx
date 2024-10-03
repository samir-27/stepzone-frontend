import React from 'react'
import Hero from '../components/Hero'
import TopProducts from '../components/TopProducts'
const Home = () => {
  return (
    <div className='container mx-auto xl:px-40 lg:px-28 md:px-10 px-5'>
      <Hero />
       <TopProducts />
    </div>
  )
}

export default Home
