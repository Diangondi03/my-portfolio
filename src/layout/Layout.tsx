import React, { useEffect, useState } from 'react'

import { IoLanguage } from 'react-icons/io5'
import { MdDarkMode, MdLightMode } from 'react-icons/md'
import { Link, Outlet } from 'react-router'
import { Button } from '../components/ui/button'

const links = [
  { name: 'Home', path: '/' },
  { name: 'Projects', path: '/projects' },
  { name: 'Education', path: '/education' },
  { name: 'Contact', path: '/contact' },
]

const Layout = () => {
  const [darkMode,setDarkMode] = useState(localStorage.getItem('dark-mode'))
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

  const getSectionIndex = () => {
    const path = window.location.pathname
    return links.findIndex(link => link.path === path)
  }
  const [sectionIndex, setSectionIndex] = useState(getSectionIndex())
  const handleLinkClick = (index:number) => {
    setSectionIndex(index)
  }
  const toggleDarkMode = () => {
    const body = document.body
    body.classList.toggle('dark')
    localStorage.setItem('dark-mode', body.classList.contains('dark') ? 'enabled' : 'disabled')
    setDarkMode(body.classList.contains('dark') ? 'enabled' : 'disabled')
  }

  return (
    <>
        <nav className='p-4 mb-10'>
            <ul className='flex sm:text-xl justify-center items-center sm:justify-end sm:gap-10 gap-0'>
                {links.map((link,index) => (
                    <li key={link.name}>
                        <Link to={link.path} onClick={() => handleLinkClick(index)}>
                          <Button variant="link" className={`text-lg sm:text-xl hover:cursor-pointer ${sectionIndex === index ? "text-blue-400" : ""}`}>

                            {link.name}
                          </Button>
                        </Link>
                    </li>
                ))}
                <li>
                    <Button variant='ghost' className=' hover:cursor-pointer'>
                        <IoLanguage/>
                      
                    </Button>
                    
                </li>
                <li>
                    <Button variant='ghost' className=' hover:cursor-pointer' onClick={toggleDarkMode}>
                        {darkMode==="enabled" ?
                        
                          <MdLightMode/> :
                          <MdDarkMode/>
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
