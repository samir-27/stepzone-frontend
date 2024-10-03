import React from 'react'
import img1 from '../assets/techno/mongo.png'
import img2 from '../assets/techno/express.png'
import img3 from '../assets/techno/react.png'
import img4 from '../assets/techno/node.png'
const About = () => {
    return (
        <div>
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-10 mt-24 container mx-auto xl:px-40 lg:px-28 md:px-10 px-5">
                <div className='h-128'>
                    <img src="https://cdn.dribbble.com/userupload/5896873/file/still-72bfe977f1d248ae83af2747b3008771.png" className='h-full object-cover' alt="" />
                </div>
                <div>
                    <h1 className='text-4xl font-semibold border-b-2 pb-2 border-red-600 '>About <span className='text-rose-600'>StepZone</span></h1>
                    <p className='py-5'>StepZone is a fullstack Web-Application in which user can buy Shoes,Sandals,FlipFlop etc. </p>
                    <div>
                        <h1 className='text-2xl font-semibold py-5'>Technology</h1>
                        <div className='grid gird-cold-4 grid-flow-col gap-5'>
                            <img src={img1} alt="" className='xl:w-24 w-20 object-contain hover:scale-110 transition-transform duration-300 ease-in-out transform' />
                            <img src={img2} alt="" className='xl:w-24 w-20 object-contain hover:scale-110 transition-transform duration-300 ease-in-out transform' />
                            <img src={img3} alt="" className='xl:w-24 w-20 object-contain hover:scale-110 transition-transform duration-300 ease-in-out transform' />
                            <img src={img4} alt="" className='xl:w-24 w-20 object-contain hover:scale-110 transition-transform duration-300 ease-in-out transform' />
                        </div>
                    </div>
                    <div>
                    <h1 className='text-2xl font-semibold py-5'>Source Code</h1>
                    <h3 className='pb-2'>Frontend: <a href="https://github.com/samir-27/stepzone-frontend.git" className='underline text-blue-600'>https://github.com/samir-27/stepzone-frontend.git</a> </h3>
                    <h3>Backend: <a href="https://github.com/parth-vaghela005/StepZone-backend.git" className='underline text-blue-600'>https://github.com/parth-vaghela005/StepZone-backend.git</a></h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
