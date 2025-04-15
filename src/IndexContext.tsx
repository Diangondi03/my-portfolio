import React, { useEffect, useState } from "react";
import { createContext} from "react";
import { LinkType } from "./utils/interfaces";
const IndexContext = createContext({sectionIndex:0,handleLinkClick:(index:number):void=>{}})

const links : LinkType[] = [
  { name: 'Home', path: '/' },
  { name: 'Projects', path: '/projects' },
  { name: 'Education', path: '/education' },
  { name: 'Contact', path: '/contact' },
]

const IndexProvider = ({children}: any)=>{
    const [sectionIndex,setSectionIndex] = useState(0)
    const getSectionIndex = () : number => {
        
        const path = window.location.pathname
        for (let i = 0; i < links.length; i++) {
          if (links[i].path === path) {
            return i
          }
        }
        return 0
      }

    useEffect(()=>{
        setSectionIndex(getSectionIndex())
    },[])

    const handleLinkClick = (index:number) : void =>{
        setSectionIndex(index)
    }

    return (

        <IndexContext.Provider value={{sectionIndex,handleLinkClick}}>
            {children}
        </IndexContext.Provider>
    )
}

export {IndexContext,IndexProvider}