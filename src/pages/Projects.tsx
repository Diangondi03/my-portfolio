import React, { useContext } from 'react'
import ProjectCard from '../components/projects/ProjectCard'

import { projectData } from '../utils/projects'
import { LanguageContext } from '../context/LanguageContext'

const Projects = () => {
  // @ts-ignore
  const {t} = useContext(LanguageContext)
   
  return (
    <>
        <h1 className='text-center text-4xl font-bold my-10'>{t("projects:Title")}</h1>
        <div className=' gap-4 mt-4'>
            {projectData.map((project, index) => (
                <ProjectCard
                    key={index}
                    project={project}
                    index={index}
                />
                
            ))}
        </div>
    </>
  )
}

export default Projects