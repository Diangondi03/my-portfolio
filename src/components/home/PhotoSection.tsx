import React from 'react'
import Photo from '../../assets/photo.png'
import { Button } from '../ui/button'
import { useNavigate } from 'react-router'
import { Name } from './Name'

const PhotoSection = () => {
  const navigate = useNavigate()
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 p-4 md:p-8">
        <figure className='flex-shrink-0 h-28 w-28 md:h-48 md:w-48 lg:h-64 lg:w-64 rounded-full overflow-hidden shadow-lg'>
          <img src={Photo} alt="Diego González" className="" />
        </figure>
        <div className='flex flex-col items-center'>
          <Name/>
          <p className='text-center  text-lg sm:text-xl md:text-2xl text-gray-600 mt-2 md:mt-3 font-bold'>
            Software Developer
          </p>
            <Button
            onClick={()=>{

              navigate("/contact")
            }}
            className='mt-4 md:mt-6 w-fit text-white bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg shadow-xl hover:shadow-2xl hover:shadow-blue-500/50 transform transition-all duration-300 ease-in-out hover:scale-105 hover:cursor-pointer' // Increased shadow size and opacity
            size="lg" // This likely handles padding and base font size
            >
            Contact Me
            </Button>
        </div>
      </div>
  )
}

export default PhotoSection