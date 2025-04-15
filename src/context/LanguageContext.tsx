import React, { useEffect, useState } from "react";
import { createContext} from "react";
import { useTranslation } from "react-i18next";
// @ts-ignore
const LanguageContext = createContext()



const LanguageProvider = ({children}: any)=>{

    const { t, i18n } = useTranslation(); // Use default namespace and language
    const changeLanguage = ()=>{
        i18n.changeLanguage(i18n.language =="es" ? "en" : "es")
    }

    return (

        <LanguageContext.Provider value={{t,i18n,changeLanguage}}>
            {children}
        </LanguageContext.Provider>
    )
}

export {LanguageContext,LanguageProvider}