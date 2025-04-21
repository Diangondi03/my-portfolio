import React, { useContext } from 'react'
import { LanguageContext } from '../../context/LanguageContext'

const Description = () => {
  //@ts-ignore
  const {t} = useContext(LanguageContext)
  return (
    <>
        <p className='text-center text-lg md:text-2xl px-10 md:px-20 lg:px-40  my-10 md:my-20 leading-12'>
            {t("home:Description")}
        </p>
        
    </>
  )
}

export default Description