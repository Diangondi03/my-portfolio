import React from 'react'
import Photo from '../../assets/photo.png'

const PhotoSection = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 p-4 md:p-8">
        <figure className='flex-shrink-0 h-28 w-28 md:h-48 md:w-48 lg:h-64 lg:w-64 rounded-full overflow-hidden shadow-lg'>
          <img src={Photo} alt="Diego González" className="" />
        </figure>
        <div className='flex flex-col'>
          <h1 className='text-center md:text-left text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mt-4 md:mt-0'>
            Diego González
          </h1>
          <p className='text-center md:text-left text-lg sm:text-xl md:text-2xl text-gray-600 mt-2 md:mt-3'>
            Software Developer
          </p>
        </div>
      </div>
  )
}

export default PhotoSection