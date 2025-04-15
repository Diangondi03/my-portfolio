import React, { useContext } from 'react'
import Skill from './Skill'
import { LanguageContext } from '../../context/LanguageContext'

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
    const {t} = useContext(LanguageContext)
    return (
        <>
            <h2 className='text-center text-3xl font-bold'>{t("home:Skills")}</h2>
            <div className='flex flex-wrap justify-center items-center my-10 md:my-20 gap-4'>
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