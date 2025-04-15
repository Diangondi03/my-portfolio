import React, { useContext, useEffect, useState } from 'react'

import { IoLanguage } from 'react-icons/io5'
import { MdDarkMode, MdLightMode } from 'react-icons/md'
import { Link, Outlet } from 'react-router'
import { Button } from '../components/ui/button'
import { LinkType } from '../utils/interfaces'
import { IndexContext } from '../IndexContext'

const links : LinkType[] = [
  { name: 'Home', path: '/' },
  { name: 'Projects', path: '/projects' },
  { name: 'Education', path: '/education' },
  { name: 'Contact', path: '/contact' },
]



const Layout = () => {
  const [darkMode,setDarkMode] = useState(localStorage.getItem('dark-mode'))
  const {sectionIndex,handleLinkClick} = useContext(IndexContext)

  useEffect(() => { 
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
    <>
        <nav className='p-4 mb-10'>
          
          <ul className='flex justify-center items-center gap-4 flex-wrap sm:justify-end sm:gap-6 md:gap-10'>
            {links.map((link, index) => (
          <li key={link.name}>
            <Link to={link.path} onClick={() => handleLinkClick(index)}>
              
              <Button
            variant="link"
            className={`link text-lg sm:text-xl hover:cursor-pointer transition-colors duration-200 ${sectionIndex === index ? "text-blue-400 font-semibold" : "text-foreground/80"}`}
              >
            {link.name}
              </Button>
            </Link>
          </li>
            ))}
            <li>
          <Button variant='ghost' size="icon" className='hover:cursor-pointer text-xl rounded-full'>
            <IoLanguage />
          </Button>
            </li>
            <li>
          <Button variant='ghost' size="icon" className='hover:cursor-pointer text-xl rounded-full' onClick={toggleDarkMode}>
            {darkMode === "enabled" ?
              <MdLightMode /> : 
              <MdDarkMode />  
            }
          </Button>
            </li>
          </ul>
        </nav>
        <div className='min-h-screen mx-5 md:mx-10'>

          <Outlet/>
        </div>
        <footer className='bg-black text-white p-4 text-center'>
          <p>&copy; {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
          <p>
            Built with <span className='text-blue-400'>React</span>.
          </p>
        </footer>
    </>
  )
}

export default Layout
