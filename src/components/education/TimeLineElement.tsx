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
            contentStyle={{ background: 'rgb(75, 85, 99)'}} 
            contentArrowStyle={{ borderRight: '7px solid  rgb(75, 85, 99)' }} 
            date={item.date}
            iconStyle={{ background: 'white', border: '2px solid rgb(209 213 219)' }} 
            icon={
              <Link
              to={item.pageLink}
              target='_blank'
              >
                <img src={item.icon} className='rounded-full w-full h-full transition-transform duration-200 hover:scale-105 cursor-pointer'/>
              </Link>
            }
          >
            <Link 
            to={item.courseLink} 
            target='_blank'
            className="vertical-timeline-element-title text-2xl font-bold text-white underline hover:text-blue-200 cursor-pointer text-center block mx-auto">
              
            {t(`education:name:${index+1}`)}

            </Link>
            <p className='text-white text-center'>
              {t(`education:description:${index+1}`)}
            </p>
    </VerticalTimelineElement>
  )
}

export default TimeLineElement