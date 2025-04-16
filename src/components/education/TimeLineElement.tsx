import React, { useContext } from 'react'
import { VerticalTimelineElement }  from 'react-vertical-timeline-component';
import { EducationItem } from '../../utils/interfaces';
import { LanguageContext } from '../../context/LanguageContext';
import { Link } from 'react-router';

type TimeLineElementProps = {
    item: EducationItem;
    index:number
}
const TimeLineElement = ({item,index}: TimeLineElementProps) => {
  //@ts-ignore
  const {t} = useContext(LanguageContext)
  return (
    <VerticalTimelineElement
      contentStyle={{ background: 'rgb(50, 61, 75)'}} 
      contentArrowStyle={{ borderRight: '7px solid rgb(50, 61, 75)' }} 
      date={item.date}
      dateClassName='text-blue-500'
      iconStyle={{ background: '#fff', color: '#000', border: '2px solid rgb(209, 213, 219)' }} 
      icon={
        <Link
        to={item.pageLink}
        target='_blank'
        rel="noopener noreferrer" 
        aria-label={`Visit ${item.title} page (opens in new tab)`} 
        >
        <img
          src={item.icon}
          alt={`${item.title} logo`}
          className='rounded-full w-full h-full object-cover transition-transform duration-200 ease-in-out group-hover:scale-105' 
        />
        </Link>
      }
      >
      <Link
        to={item.courseLink}
        target='_blank'
        rel="noopener noreferrer"
        className="vertical-timeline-element-title text-xl md:text-2xl font-bold text-white underline hover:text-blue-300 transition-colors duration-200 ease-in-out block text-center mb-2" 
        aria-label={`View course details for ${t(`education:name:${index+1}`)} (opens in new tab)`}
      >
        {t(`education:name:${index+1}`)}
      </Link>
      <p className='text-gray-200 dark:text-gray-300 text-center text-sm md:text-base'> 
        {t(`education:description:${index+1}`)}
      </p>
      </VerticalTimelineElement>
  )
}

export default TimeLineElement