import React, { useEffect } from 'react'
import { IconBase } from 'react-icons'
import { FaLanguage } from 'react-icons/fa'
import { IoLanguage } from 'react-icons/io5'
import { MdLightMode } from 'react-icons/md'
import { Outlet } from 'react-router'

const links = [
  { name: 'Home', path: '/' },
  { name: 'Projects', path: '/projects' },
  { name: 'Education', path: '/education' },
  { name: 'Contact', path: '/contact' },
]

const Layout = () => {
  const isSectionIndex = (index) => {
    const path = window.location.pathname
    return links.findIndex(link => link.path === path) === index
  }
  
  return (
    <>
        <nav className='bg-gray-800 p-4'>
            <ul className='flex sm:text-xl justify-center items-center sm:justify-end sm:gap-10 gap-4'>
                {links.map((link,index) => (
                    <li key={link.name}>
                        <a href={link.path} className={`hover:[text-shadow:0_0_8px_rgba(59,130,246,1)] text-shadow ${isSectionIndex(index) ? "text-blue-400" : "text-white"}`}>{link.name}</a>
                    </li>
                ))}
                <li>
                    <a href='/' className='hover:text-blue-400 text-white'>
                        <IoLanguage/>
                    </a>
                    
                </li>
                <li>
                    <a href='/' className='hover:text-blue-400 text-white'>
                        <MdLightMode/>
                    </a>
                </li>
            </ul>
            
        </nav>
        <div className='min-h-screen'>

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
