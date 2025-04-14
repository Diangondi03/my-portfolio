import { SchoolIcon, StarIcon, WorkflowIcon } from 'lucide-react';
import React from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import '../../node_modules/react-vertical-timeline-component/style.min.css';
import Universidad from "../assets/Universidad_Santa_María_logo.gif"
import FreeCodeCamp from "../assets/freecodecamp-icon.svg"
import UCV from "../assets/Logo_Universidad_Central_de_Venezuela.svg"
import Udemy from "../assets/Udemy_Symbol.svg"
import { EducationItem } from '../interfaces';
import TimeLineElement from '../components/education/TimeLineElement';

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
  return (
    <>
        <h1 className='text-center text-3xl font-bold my-10'>Education</h1>
        <VerticalTimeline lineColor="rgb(75, 85, 255)">
            
            {EducationTimeLine.map((item, index) => (
                <TimeLineElement
                    key={index}
                    item={item}
                />
            ))}
            
        </VerticalTimeline>
    </>
  )
}

export default Education