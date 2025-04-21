import React, { useContext } from 'react'
import Photo from '../../assets/photo.webp'
import { Button } from '../ui/button'
import { useNavigate } from 'react-router'
import { Name } from './Name'
import { IndexContext } from '../../context/IndexContext'
import { LanguageContext } from '../../context/LanguageContext'
import {Download, User } from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa'

const PhotoSection = () => {
  const navigate = useNavigate()
  const {handleLinkClick} = useContext(IndexContext)
  // @ts-ignore
  const {t,i18n} = useContext(LanguageContext)
  return (
    <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-6 md:gap-12 p-4 md:p-8">
        <div className='flex flex-col items-center'>
          <Name/>
          <p className='text-center  text-xl sm:text-2xl md:text-3xl text-gray-600 dark:text-gray-400 my-3 md:my-4 font-bold'>
            {t("home:Role")}
          </p>
            <div className='flex items-center gap-10 justify-center'>

              <Button
              onClick={()=>{
                handleLinkClick(3)
                navigate("/contact")
              }}
              className='mt-4 md:mt-6 w-fit text-white bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg shadow-xl hover:shadow-2xl hover:shadow-blue-500/50 transform transition-all duration-300 ease-in-out hover:scale-105 hover:cursor-pointer' 
              size="lg" 
              >
                <FaWhatsapp/>
                {t("home:ContactMe")}

              </Button>
              <a href={`./cv/${i18n.language=="en" ? "Diego_Gonzalez" : "Diego González"}.pdf`} download={"Diego_Gonzalez.pdf"}>

              <Button
              
              className='mt-4 md:mt-6 w-fit text-white bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg shadow-xl hover:shadow-2xl hover:shadow-blue-500/50 transform transition-all duration-300 ease-in-out hover:scale-105 hover:cursor-pointer' // Increased shadow size and opacity
              size="lg" 
              >
                <Download/>
                {t("home:Resume")}

              </Button>
              </a>
            </div>
        </div>
        <figure className='flex-shrink-0 h-28 w-28 md:h-48 md:w-48 lg:h-64 lg:w-64 rounded-full overflow-hidden shadow-lg border-5 border-gray-300'>
          <img src={Photo} loading='lazy' alt="Diego González"/>
        </figure>
      </div>
  )
}

export default PhotoSection