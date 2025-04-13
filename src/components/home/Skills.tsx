import React from 'react'
import Skill from './Skill'

const skillNames : string[] = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "TypeScript",
    "NodeJS",
    "Python",
    "MongoDB",
    "PostgreSQL",
    "Tailwind",
    "C++",
    "C",
    "Git",
    "GitHub",
]

const Skills = () => {
    return (
        <>
            <h2 className='text-center text-3xl font-bold'>Skills</h2>
            <div className='flex flex-wrap justify-center items-center my-4 md:my-10 gap-4'>
                {skillNames.map((skill, index) => {
                    return (
                        <Skill key={index} skillName={skill} />
                    )
                })}
            </div>
        </>
    )
}

export default Skills