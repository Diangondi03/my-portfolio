import React from 'react'
import { VerticalTimelineElement }  from 'react-vertical-timeline-component';
import { EducationItem } from '../../interfaces';

type TimeLineElementProps = {
    item: EducationItem;
}
const TimeLineElement = ({item}: TimeLineElementProps) => {
  return (
    <VerticalTimelineElement
                    contentStyle={{ background: 'rgb(75, 85, 99)'}} // Using gray-600
                    contentArrowStyle={{ borderRight: '7px solid  rgb(75, 85, 99)' }} // Matching arrow color
                    date={item.date}
                    iconStyle={{ background: 'white'}}
                    icon={<img src={item.icon} className='rounded-full w-full h-full'/>}
                >
                    <h3 className="vertical-timeline-element-title text-2xl font-bold text-white">{item.title}</h3>
                    <p className='text-white'>
                        {item.skills}
                    </p>
    </VerticalTimelineElement>
  )
}

export default TimeLineElement