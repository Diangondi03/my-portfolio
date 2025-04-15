import React, { useContext, useEffect, useRef, useState } from 'react'
import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { IoLogoGithub } from 'react-icons/io5';
import { projectDataType } from '../../utils/interfaces';
import { Link, useNavigate } from 'react-router';
import { animate } from 'animejs';
import { LanguageContext } from '../../context/LanguageContext';

type ProjectCardProps = {
    project: projectDataType;
    index: number;
}

const ProjectCard = ({project,index}: ProjectCardProps) => {
    const navigate = useNavigate()

    const cardRef = useRef<HTMLDivElement>(null);
    const [hasAnimated, setHasAnimated] = useState(false);

    // @ts-ignore
    const {t} = useContext(LanguageContext)

    useEffect(() => {
        const currentRef = cardRef.current; 

        if (!currentRef) return; 

        currentRef.style.opacity = '0';


        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasAnimated) {
                    setHasAnimated(true); 
                    animate(
                        currentRef,
                        {
                        opacity: [0, 1],
                        scale: [0, 1],
                        duration: 500,
                        easing: 'easeInOutQuad',
                        
                });
                    observer.unobserve(currentRef); 
                }
            },
            {
                root: null, 
                rootMargin: '0px', 
                threshold: 0.2, 
            }
        );

        observer.observe(currentRef);

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, [index, hasAnimated]); 


  return (
    <>
        <div ref={cardRef} className={`carta mb-10 md:mb-16 ${index === 0 ? 'mt-0' : ''} overflow-hidden`}>
            <Card className={`
            flex flex-col md:flex-row
            gap-6 md:gap-10 items-center 
            p-6 bg-card text-card-foreground
            border border-border rounded-lg
            shadow-md hover:shadow-xl hover:scale-[1.02] 
            transition-all duration-300 ease-in-out
            overflow-hidden 
            ${index % 2 !== 0 ? "md:flex-row-reverse" : ""} 
            `}>
            
            <div 
            onClick={()=>{navigate(`/project/${index+1}`)}}
            className='w-full md:w-1/2 aspect-video bg-gradient-to-br from-muted via-background to-muted rounded-md flex items-center justify-center text-muted-foreground overflow-hidden relative group cursor-pointer'>
                
                <img 
                src={`/projects/${project.images[0]}`} 
                className="w-full h-full text-muted-foreground/50 group-hover:scale-110 transition-transform duration-300" />
                
                <span className='absolute bottom-2 left-2 text-xs bg-black/40 text-white px-1.5 py-0.5 rounded backdrop-blur-sm'>
                Preview
                </span>
                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div> 
            </div>

            <div className='w-full md:w-1/2 flex flex-col justify-center'> 
                <h2 className='text-xl md:text-2xl font-semibold mb-2'>{t(`project:name:${index+1}`)}</h2>
                <p className='text-xs text-muted-foreground mb-3'>
                {t(`project:date:${index+1}`)}
                </p>
                <p className='text-muted-foreground text-sm md:text-base mb-4'>
                {t(`project:description:${index+1}`)}
                </p>
                
                <div className="mt-auto flex items-center gap-2 self-start">
                <Button
                    size="sm"
                    className='bg-primary text-primary-foreground hover:bg-primary/90 cursor-pointer transition-colors duration-200'
                    onClick={()=>{navigate(`/project/${index+1}`)}}
                >
                    {t("projects:Details")}
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