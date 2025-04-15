import React, { useContext } from 'react'
import English from "../../assets/english.svg"
import Spanish from "../../assets/spanish.svg"
import { LanguageContext } from '../../context/LanguageContext'

const LanguageSection = () => {
  // @ts-ignore
  const {t} = useContext(LanguageContext)

  return (
    <>
        <h1 className='text-3xl  text-center font-bold my-10 md:my-20'>{t("home:Languages")}</h1>
        <div className='flex flex-wrap justify-evenly items-center my-10 md:my-20 gap-4'>
            <div className='text-center'>
                <img src={English} alt="" className='w-30 h-30'/>
                <p className='text-2xl my-2'>{t("home:English")}</p>
                <p className='text-xl my-4 font-bold'>C1</p>
            </div>
            <div className='text-center'>
                <img src={Spanish} alt="" className='w-30 h-30'/>

                <p className='text-2xl my-2'>{t("home:Spanish")}</p>
                <p className='text-xl my-4 font-bold'>{t("home:Native")}</p>
            </div>
        </div>
    </>
  )
}

export default LanguageSection