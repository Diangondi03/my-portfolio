import React, { useEffect, useState } from "react";
import { createContext} from "react";
import { LinkType } from "../utils/interfaces";
const IndexContext = createContext({sectionIndex:0,handleLinkClick:(index:number):void=>{}})

const links : LinkType[] = [
  { name: 'Home', path: '/' },
  { name: 'Projects', path: '/projects' },
  { name: 'Education', path: '/education' },
  { name: 'Contact', path: '/contact' },
]

const IndexProvider = ({children}: any)=>{
    const [sectionIndex,setSectionIndex] = useState(-1)
    const getSectionIndex = () : number => {
        
        const path = window.location.hash
        const projectDetailRegex = /^#\/project\/\d+$/;
        if (projectDetailRegex.test(path)) {
          return 1 // Return the index of 'Projects' or default to 0
        }
        for (let i = 0; i < links.length; i++) {
          if (`#${links[i].path}` === path) {
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