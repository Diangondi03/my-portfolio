import React from 'react'
import { Outlet } from 'react-router'
import { lazy } from 'react';

const Footer = lazy(() => import('./components/Footer'));
const NavBar = lazy(() => import('./components/NavBar'));





const Layout = () => {


  return (
    <>
        <NavBar/>

        <div className='mx-5 md:mx-10'>
          <Outlet/>
        </div>
        <Footer/>

    </>
  )
}

export default Layout
