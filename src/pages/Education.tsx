import React, { useContext } from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import '../../node_modules/react-vertical-timeline-component/style.min.css';
import Universidad from "../assets/Universidad_Santa_María_logo.gif"
import FreeCodeCamp from "../assets/freecodecamp-icon.svg"
import UCV from "../assets/Logo_Universidad_Central_de_Venezuela.svg"
import Udemy from "../assets/Udemy_Symbol.svg"
import { EducationItem } from '../utils/interfaces';
import TimeLineElement from '../components/education/TimeLineElement';
import { LanguageContext } from '../context/LanguageContext';
import { Button } from '../components/ui/button';
import { Link, useNavigate } from 'react-router';

const EducationTimeLine : EducationItem[] = [
    {
        date: "2021 - 2026",
        title: "Systems Engineering - Santa María University",
        skills: "Systems Engineering, Software Development, Web Development, Mobile Development, Data Science",
        icon: Universidad
    },
    {
        date: "2025",
        title: "Scientific Computing with Python - FreeCodeCamp",
        skills: "Data Science, Machine Learning, Python Programming",
        icon: FreeCodeCamp
    },
    {
        date: "2024",
        title: "Relational Database - FreeCodeCamp",
        skills: "Database Design, SQL Programming",
        icon: FreeCodeCamp
    },
    {
        date: "2023 - 2024",
        title: "Inglés (Adultos) como lengua extranjera - FUNDEIM",
        skills: "English Language, Communication Skills",
        icon: UCV
    },
    {
        date: "2023",
        title: "The Web Development Bootcamp 2023 - UDEMY",
        skills: "Full Stack Web Development, HTML, CSS, JavaScript, Node.js, Express.js, MongoDB",
        icon: Udemy
    }
]

const Education = () => {
    //@ts-ignore
    const {t} = useContext(LanguageContext)
    const navigate = useNavigate()
    return (
        <>
            <h1 className='text-center text-4xl font-bold my-10'>{t("education:title")}</h1>

            <VerticalTimeline lineColor="rgb(75, 85, 255)">
                
                {EducationTimeLine.map((item, index) => (
                    <TimeLineElement
                        key={index}
                        index={index}
                        item={item}
                    />
                ))}
                
            </VerticalTimeline>
            <p className='text-center text-xl my-10'>
                {t("education:Check")}
                <Link
                to={"https://www.linkedin.com/in/diego-gonzalez-developer/details/certifications/"}
                target='_blank'
                >
                <Button
                    
                    variant="link"
                    rel="noopener noreferrer"
                    className="text-indigo-600 dark:text-cyan-300 hover:text-indigo-800 hover:dark:text-cyan-600 hover:underline text-xl p-0 m-0 cursor-pointer"
                    >
                    LinkedIn
                </Button>
                </Link>
            </p>
        </>
    )
}

export default Education