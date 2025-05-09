import React from 'react'
import { Button } from '../ui/button'

const Skill = ({skillName}:{skillName:string}) => {
  return (
    <Button
      variant="outline"
      className="
      m-2 p-4 w-36 h-36
      flex flex-col items-center justify-center
      border border-gray-300 dark:border-gray-600
      bg-white dark:bg-gray-800
      text-gray-700 dark:text-gray-300
      shadow-md hover:shadow-lg hover:shadow-gray-500/50 dark:hover:shadow-blue-300/50
      transform transition-all duration-300 ease-in-out hover:rotate-3
      hover:-translate-y-1.5 hover:scale-105
      focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:focus:ring-offset-gray-800"
    >
      <img
      src={`./skills/${skillName === 'C++' ? 'Cpp' : skillName}.svg`}
      alt={`${skillName} logo`}
      loading='lazy'
      className={`w-16 h-16 mb-2 object-contain transition-transform duration-300 group-hover:scale-110 ${skillName == "GitHub" ? "dark:bg-white dark:rounded-full dark:p-[3px]" : ""}`}
      />
      <p className="text-lg font-semibold text-center">
        {skillName}
      </p>
    </Button>
  )
}

export default Skill