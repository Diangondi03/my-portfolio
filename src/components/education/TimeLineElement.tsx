import React, { useContext } from 'react'
import { VerticalTimelineElement }  from 'react-vertical-timeline-component';
import { EducationItem } from '../../utils/interfaces';
import { LanguageContext } from '../../context/LanguageContext';

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
            icon={<img src={item.icon} className='rounded-full w-full h-full'/>}
          >
            <h3 className="vertical-timeline-element-title text-2xl font-bold text-white">
            {t(`education:name:${index+1}`)}

            </h3>
            <p className='text-white'>
              {t(`education:description:${index+1}`)}
            </p>
    </VerticalTimelineElement>
  )
}

export default TimeLineElement