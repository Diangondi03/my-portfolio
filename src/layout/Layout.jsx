import React from 'react'
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
  return (
    <>
        <nav className='bg-gray-800 p-4'>
            <ul className='flex sm:text-xl justify-center items-center sm:justify-end sm:gap-10 gap-4'>
                {links.map(link => (
                    <li key={link.name}>
                        <a href={link.path} className='hover:text-blue-400  text-white'>{link.name}</a>
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
        <Outlet/>
    </>
  )
}

export default Layout
