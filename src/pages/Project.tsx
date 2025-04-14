import React from 'react'
import { useNavigate, useParams } from 'react-router'
import { projectData } from '../utils/projects'
import Skill from '../components/home/Skill'

const Project = () => {
    const projectId : number = Number(useParams().projectId)
    const navigate = useNavigate()
    //ensures that the projectId is valid and not undefined
    if(projectId>projectData.length || !projectId) {
        navigate("/")
    }
    const project = projectData[projectId-1]
    scrollTo(0,0)

  return (
    <div className='flex flex-col  items-center'>
        <h1 className='text-center text-3xl font-bold my-10'>{project?.name}</h1>
        <img src={`/projects/${project?.image}`} className='shadow-2xl rounded-lg'/>
        <p className='text-2xl text-center my-20'>{project?.description}</p>
        <h2 className='text-center text-3xl font-bold'>Skills</h2>
        <div className='flex flex-wrap justify-center items-center my-10 md:my-20 gap-4'>

            {project?.skills.map((skill, index) => (
                <Skill
                key={index}
                skillName={skill}
                />
            ))}
        </div>
    </div>
  )
}

export default Project