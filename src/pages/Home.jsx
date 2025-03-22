import React from 'react'
import Hero from '../components/Hero'
import TopProducts from '../components/TopProducts'
import Brand from '../components/Brand'
import Category from '../components/Category'
import HomeCarousel from '../components/HomeCarousel'
import GenderGrid from '../components/GenderGrid'
const Home = () => {
  return (
    <div className='container mx-auto'>
      <Hero />
       <TopProducts />
       <Category />
       <Brand />
       <HomeCarousel />
       <GenderGrid />
    </div>
  )
}

export default Home
