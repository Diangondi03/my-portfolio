import React, { useContext, useEffect, useLayoutEffect, useState } from 'react'

import { MdDarkMode, MdLightMode } from 'react-icons/md'
import { Link} from 'react-router'
import { Button } from '../../components/ui/button'
import { LinkType } from '../../utils/interfaces'
import { IndexContext } from '../../context/IndexContext'
import Logo from "../../assets/logo.webp"
import { LanguageContext } from '../../context/LanguageContext'
import English from "../../assets/english.svg"
import Spanish from "../../assets/Spanish.svg"

const links : LinkType[] = [
  { name: 'Home', path: '/' },
  { name: 'Projects', path: '/projects' },
  { name: 'Education', path: '/education' },
  { name: 'Contact', path: '/contact' },
]

const NavBar = () => {
    const [darkMode,setDarkMode] = useState(localStorage.getItem('dark-mode'))
    const {sectionIndex,handleLinkClick} = useContext(IndexContext)
    // @ts-ignore
    const {t,i18n,changeLanguage} = useContext(LanguageContext)
    useLayoutEffect(() => { 
      const body = document.body
      if (!darkMode){
  
        localStorage.setItem('dark-mode', 'disabled')
      }
      if (darkMode === 'enabled') {
        body.classList.add('dark')
      }
      
    }
    , [darkMode])
  
    
    
    const toggleDarkMode = () => {
      const body = document.body
      body.classList.toggle('dark')
      localStorage.setItem('dark-mode', body.classList.contains('dark') ? 'enabled' : 'disabled')
      setDarkMode(body.classList.contains('dark') ? 'enabled' : 'disabled')
    }

  return (
    <nav className='p-4 mb-10 flex flex-col items-center gap-4 md:flex-row md:justify-between'>
          <img src={Logo} loading='lazy' className='rounded-full h-10 aspect-square' alt='personal logo'/>

          
          <ul className='flex  items-center gap-6 sm:gap-4 flex-wrap justify-center md:justify-end md:gap-6 lg:gap-10'>
            {links.map((link, index) => (
              <li key={link.name} className='shrink-0'>
                <Link to={link.path} onClick={() => handleLinkClick(index)}>
                  <Button
                    variant="link"
                    
                    className={`link text-lg sm:text-xl hover:cursor-pointer transition-colors duration-200 ${sectionIndex === index ? "text-blue-400 font-semibold" : "text-foreground/80"}`}
                  >
                    {t(`nav:${link.name}`)}
                  </Button>
                </Link>
              </li>
            ))}
            <li className='shrink-0'>
                <button
                aria-label='language toggle'
                className='relative inline-flex items-center justify-center rounded-full p-2 hover:bg-accent focus:outline-none transition-colors duration-200 w-9 h-9 overflow-hidden cursor-pointer' 
                onClick={changeLanguage}
                >
                <img
                  src={English}
                  className={`absolute h-6 w-6 transition-all duration-300 ease-in-out ${
                  i18n.language === 'en'
                    ? 'opacity-100 scale-100 rotate-0' 
                    : 'opacity-0 scale-50 -rotate-90'  
                  }`}
                  alt='English language'
                />
                <img
                  src={Spanish}
                  className={`absolute h-6 w-6 transition-all duration-300 ease-in-out ${
                  i18n.language !== 'en'
                    ? 'opacity-100 scale-100 rotate-0' 
                    : 'opacity-0 scale-50 rotate-90' 
                  }`}
                  alt='Spanish language'
                />
                </button>
            </li>
            <li className='shrink-0'>
                <button
                  aria-label='theme toggle'
                  className='relative inline-flex items-center justify-center rounded-full p-2 hover:bg-accent focus:outline-none transition-colors duration-200 w-9 h-9 overflow-hidden cursor-pointer' // Added size, centering, overflow
                  onClick={toggleDarkMode}
                >
                  <MdLightMode
                  className={`absolute h-5 w-5 transition-all duration-300 ease-in-out ${
                    darkMode === 'enabled'
                    ? 'opacity-100 scale-100 rotate-0'
                    : 'opacity-0 scale-50 -rotate-90' 
                  }`}
                  />
                  <MdDarkMode
                  className={`absolute h-5 w-5 transition-all duration-300 ease-in-out ${
                    darkMode === 'enabled'
                    ? 'opacity-0 scale-50 rotate-90' 
                    : 'opacity-100 scale-100 rotate-0' 
                  }`}
                  />
                </button>
            </li>
          </ul>
        </nav>
  )
}

export default NavBar