import React, { useContext } from 'react'
import { LanguageContext } from '../../context/LanguageContext'

const Footer = () => {
    //@ts-ignore
    const {t} = useContext(LanguageContext)
  return (
    <footer className='bg-black text-white p-4 text-center mt-10'> 
    <p>&copy; {new Date().getFullYear()}{" "+t("footer:First")}</p>
    <p>
      {t("footer:Second")}<span className='text-blue-400'>React</span>.
    </p>
    </footer>
  )
}

export default Footer