import React, { useContext } from 'react'
import { LanguageContext } from '../../context/LanguageContext'

const Footer = () => {
    //@ts-ignore
    const {t} = useContext(LanguageContext)
  return (
    <div className='h-[10vh]'>
      <footer className='bg-black text-white p-4 text-center mt-10 h-[10vh] flex items-center justify-center flex-col absolute bottom-0 w-full'> 
      <p>&copy; {new Date().getFullYear()}{" "+t("footer:First")}</p>
      <p>
        {t("footer:Second")}<span className='text-blue-400'>React</span>.
      </p>
      </footer>
    </div>
  )
}

export default Footer