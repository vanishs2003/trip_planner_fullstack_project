import React from 'react'
import { Button } from '../ui/button'
import { Link } from 'react-router-dom'

function Hero() {
  return (
    <div className='flex flex-col items-center mx-56 gap-g'>
        <h2
         className='font-extrabold text-[40px] text-center mt-16'>
          <span className='text-[#f56551]'>Discover your next adventure with AI:</span> <br />Personalized Itineraries at Your Fingertips</h2>
        <p className='text-xl text-gray-500 text-center'>Your personal trip planner and travel curator , creating custom itineraries tailored to your interests and budget.</p>
        <Link to={'/create-trip'}>
        <Button>Get  Started,It's Free</Button>
        </Link>
    </div>
  )
}

export default Hero