import React from 'react'
import ProjectCard from '../components/projects/ProjectCard'
import { projectDataType } from '../interfaces'



const projectData : projectDataType[] = [
    {
        name:"Portfolio",
        description:"My software developer portfolio, built with React and TypeScript. Showcases my projects, skills, and experience.", 
        date:"April 2025", 
        image:"portfolio.png", 
        github:"https://github.com/Diangondi03/my-portfolio"
    },
    {
        name:"Tech E-commerce", 
        description:"Ecommerce built in React with TypeScript, Tailwind and HeroUI components. Product data is fetched from FakeStore API, users are stored in a Firebase Database", 
        date:"February 2025", 
        image:"tech.png", 
        github:"https://github.com/Diangondi03/Tech-E-commerce"
    },
    {
        name:"X (Twitter) Clone", 
        description:"X clone built using HTML, CSS, JavaScript, React.js, Node.js, Bootstrap, React-JSS, Material UI and PostgreSQL. It allows to create users, users can create, edit and delete posts. They can also like, repost, comment and bookmark someone else's posts.", 
        date:"January 2025", 
        image:"twitter.jpeg", 
        github:"https://github.com/Diangondi03/X-Twitter-Clone"

    },
    {
        name:"Weather App", 
        description:"Weather app build with React, TypeScript and shadcn, styled with Tailwind CSS. Data fetched by Weather API", 
        date:"November 2024", 
        image:"weather.png", 
        github:"https://github.com/Diangondi03/X-Twitter-Clone"}
    ,
    {
        name:"Notepad with Encryption", 
        description:"Notepad with encryption, built using C and the GTK library. It generates a txt file with the input entered on the program. It has a 4 page limit because of the project's original requirements.", 
        date:"January 2024", 
        image:"notepad.jpeg", 
        github:"https://github.com/Diangondi03/Gtk-Notepad"

    },
]
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