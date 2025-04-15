import React, { useContext, useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router'
import { projectData } from '../utils/projects'
import Skill from '../components/home/Skill'
import { ImageCarousel } from '../components/project/ImageCarousel'
import { Button } from '../components/ui/button'
import { IoLogoGithub } from 'react-icons/io5'
import { IndexContext } from '../IndexContext'

const Project = () => {
    const projectId : number = Number(useParams().projectId)
    const navigate = useNavigate()
    const {handleLinkClick} = useContext(IndexContext)
    useEffect(()=>{

        if(projectId>projectData.length || !projectId){
            handleLinkClick(0)
            navigate("/")

        }
    },[])
    const project = projectData[projectId-1]
    scrollTo(0,0)
    if(projectId>projectData.length || !projectId){
        return <></>
    }
  return (
    <>
        <h1 className='text-center text-4xl font-bold my-10'>{project?.name}</h1>
        <div className='flex flex-col  items-center'>
            <ImageCarousel images={project?.images}/>
            <p className='text-2xl text-center my-20'>{project?.description}</p>
            <Link to={project?.github} target="_blank" rel="noopener noreferrer">

                <Button
                    variant="secondary" 
                    size="sm" 
                    className='cursor-pointer text-xl px-10 py-5 mb-10 transition-colors duration-200 flex items-center gap-2 bg-purple-500 text-white hover:bg-purple-700' 
                    aria-label="View on GitHub"
                    >
                    <IoLogoGithub/> 
                    Check it out on GitHub
                </Button>
            </Link>
            <h2 className='text-center text-3xl font-bold'>Skills</h2>
            <div className='flex flex-wrap justify-center items-center my-10 md:my-20 gap-4'>

                {project && project?.skills.map((skill, index) => (
                    <Skill
                    key={index}
                    skillName={skill}
                    />
                ))}
            </div>
        </div>
    </>
  )
}

export default Project