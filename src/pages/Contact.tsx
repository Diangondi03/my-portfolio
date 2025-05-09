import React, { useContext } from 'react'
import { Link } from 'react-router'
import Linkedin from '../../public/skills/linkedin.svg'
import GitHub from '../../public/skills/GitHub.svg'
import { IoIosMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { LanguageContext } from '../context/LanguageContext';

const Contact = () => {
  //@ts-ignore
  const {t} = useContext(LanguageContext)
  return (
    <>
        <h1 className='text-center text-4xl font-bold my-10'>{t("contact:Title")}</h1>
        
        <p className='text-center text-lg md:text-2xl mb-12 max-w-xl mx-auto leading-10'> 
          {t("contact:Text")}
        </p>

        <div className='flex flex-col items-center space-y-12 mb-10'> 
          <div className='flex justify-center space-x-12'> 
            <Link
              to='https://www.linkedin.com/in/diego-gonzalez-developer/'
              target='_blank'
              rel='noopener noreferrer'
              aria-label='LinkedIn Profile'
              className='flex flex-col items-center transition-transform duration-200 hover:scale-110'
            >
              <img src={Linkedin} alt="linkedin link" className='w-20 aspect-square'/>
              <span className="text-sm font-medium my-4">LinkedIn</span>
            </Link>
            <Link
              to='https://github.com/Diangondi03'
              target='_blank'
              rel='noopener noreferrer'
              aria-label='GitHub Profile'
              className='flex flex-col items-center transition-transform duration-200 hover:scale-110'
            >
              <img src={GitHub} alt="GitHub link" className='w-20 aspect-square dark:bg-white dark:rounded-full dark:p-[3px]'/>
              <span className="text-sm font-medium my-4">GitHub</span>
            </Link>
          </div>

          <div className='flex items-center space-x-4'> 
             <IoIosMail className='h-12 w-12' />
            <span className='font-semibold text-xl md:text-2xl'>diegoagd2003@gmail.com</span> 
          </div>

          <div className='flex items-center space-x-4'> 
             <FaPhoneAlt className='h-8 w-8' />
            <span className='font-semibold text-xl md:text-2xl'>+58 4127142428</span> 
          </div>
        </div>
    </>
  )
}

export default Contact