import React from 'react'
import ProjectCard from '../components/projects/ProjectCard'

import { projectData } from '../utils/projects'

const Projects = () => {
   
  return (
    <>
        <h1 className='text-center text-3xl font-bold my-10'>My Projects</h1>
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