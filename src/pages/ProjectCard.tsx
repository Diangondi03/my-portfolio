import React from 'react'
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { IoLogoGithub } from 'react-icons/io5';
import { projectDataType } from '../interfaces';
import { Link } from 'react-router';

type ProjectCardProps = {
    project: projectDataType;
    index: number;
}

const ProjectCard = ({project,index}: ProjectCardProps) => {
  return (
    <>
        <div className={`mb-10 md:mb-16 ${index === 0 ? 'mt-0' : ''}`}>
            <Card className={`
            flex flex-col md:flex-row
            gap-6 md:gap-10 items-center /* Vertically align items */
            p-6 bg-card text-card-foreground
            border border-border rounded-lg
            shadow-md hover:shadow-xl hover:scale-[1.02] /* Enhanced hover effect */
            transition-all duration-300 ease-in-out
            overflow-hidden /* Prevent content overflow on scale */
            ${index % 2 !== 0 ? "md:flex-row-reverse" : ""} /* Alternate layout */
            `}>
            <div className='w-full md:w-1/2 aspect-video bg-gradient-to-br from-muted via-background to-muted rounded-md flex items-center justify-center text-muted-foreground overflow-hidden relative group cursor-pointer'>
                
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-muted-foreground/50 group-hover:scale-110 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span className='absolute bottom-2 left-2 text-xs bg-black/40 text-white px-1.5 py-0.5 rounded backdrop-blur-sm'>
                Preview
                </span>
                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div> 
            </div>

            <div className='w-full md:w-1/2 flex flex-col justify-center'> 
                <h2 className='text-xl md:text-2xl font-semibold mb-2'>{project.name}</h2>
                <p className='text-xs text-muted-foreground mb-3'>
                {project.date} 
                </p>
                <p className='text-muted-foreground text-sm md:text-base mb-4'>
                {project.description}
                </p>
                
                <div className="mt-auto flex items-center gap-2 self-start">
                <Button
                    size="sm"
                    className='bg-primary text-primary-foreground hover:bg-primary/90 cursor-pointer transition-colors duration-200'
                >
                    View Details
                </Button>
                <Link to={project.github} target="_blank" rel="noopener noreferrer">

                <Button
                    variant="secondary" 
                    size="sm" 
                    className='cursor-pointer transition-colors duration-200 flex items-center gap-2 bg-purple-500 text-white hover:bg-purple-700' 
                    aria-label="View on GitHub"
                    >
                    <IoLogoGithub className="h-4 w-4" /> 
                    GitHub 
                </Button>
                </Link>
                </div>
            </div>
            </Card>
        </div>

    </>
  )
}

export default ProjectCard