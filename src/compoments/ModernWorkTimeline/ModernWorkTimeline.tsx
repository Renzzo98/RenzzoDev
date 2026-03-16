import './ModernWorkTimeline.css';

import { FC } from 'react';
import { Chrono } from "react-chrono";

import { workExperienceItems } from '../../constants/textContent';

interface ModernWorkTimelineProps {}

const ModernWorkTimeline: FC<ModernWorkTimelineProps> = () => {

    

    return (
        <div className='timeline-item'>
            <Chrono
                items={workExperienceItems}
                theme={{
                    primary: 'black',
                    secondary: 'orange',
                    cardBgColor: 'white',
                    titleColor: 'black',
                    titleColorActive: 'white',
                    cardTitleColor: 'orange',
                }}
                fontSizes={{
                    cardText: '3rem',
                    cardTitle: '1.5rem',
                    title: '1rem',
                }}
                mode="VERTICAL_ALTERNATING"
                disableToolbar
                allowDynamicUpdate
            />
        </div>
    ) 
}

export default ModernWorkTimeline;