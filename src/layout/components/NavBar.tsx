import React, { useContext, useLayoutEffect, useState } from 'react'

import { MdDarkMode, MdLightMode } from 'react-icons/md'
import { Link} from 'react-router'
import { Button } from '../../components/ui/button'
import { LinkType } from '../../utils/interfaces'
import { IndexContext } from '../../context/IndexContext'
import Logo from "../../assets/logo.webp"
import { LanguageContext } from '../../context/LanguageContext'
import English from "../../assets/english.svg"
import Spanish from "../../assets/spanish.svg"

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
    <header className='sticky top-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-md'>
      <nav className='w-full max-w-6xl mx-auto px-4 md:px-8 py-3 flex flex-col items-center gap-4 md:flex-row md:justify-between'>
          <img src={Logo} loading='lazy' className='rounded-full h-11 aspect-square ring-2 ring-border/60' alt='personal logo'/>

          
          <ul className='flex items-center gap-2 sm:gap-3 flex-wrap justify-center md:justify-end rounded-2xl border border-border/70 bg-card/70 backdrop-blur-sm px-3 py-2'>
            {links.map((link, index) => (
              <li key={link.name} className='shrink-0'>
                <Link to={link.path} onClick={() => handleLinkClick(index)}>
                  <Button
                    variant="ghost"
                    
                    className={`text-sm sm:text-base rounded-xl px-4 hover:cursor-pointer transition-colors duration-200 ${sectionIndex === index ? "bg-primary text-white hover:text-white font-semibold hover:bg-primary " : "text-foreground/80 hover:text-foreground hover:bg-accent/70"}`}
                  >
                    {t(`nav:${link.name}`)}
                  </Button>
                </Link>
              </li>
            ))}
            <li className='shrink-0'>
                <button
                aria-label='language toggle'
                className='relative inline-flex items-center justify-center rounded-xl p-2 hover:bg-accent focus:outline-none transition-colors duration-200 w-10 h-10 overflow-hidden cursor-pointer border border-border/60 bg-background/70' 
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
                  className='relative inline-flex items-center justify-center rounded-xl p-2 hover:bg-accent focus:outline-none transition-colors duration-200 w-10 h-10 overflow-hidden cursor-pointer border border-border/60 bg-background/70'
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
    </header>
  )
}

export default NavBar