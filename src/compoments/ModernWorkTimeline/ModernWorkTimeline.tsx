import './ModernWorkTimeline.css';

import { FC } from 'react';
import { Pane } from 'evergreen-ui';
import { Chrono } from "react-chrono";

import { expHeader, workExperienceItems } from '../../constants/textContent';

interface ModernWorkTimelineProps {
    refPointer: React.RefObject<HTMLDivElement>;
}

const ModernWorkTimeline: FC<ModernWorkTimelineProps> = ({ refPointer }) => {

    

    return (
        <Pane
            className='experience-timeline'
            ref={refPointer}
        >
            <p className='experience-header'>{expHeader.toUpperCase()}</p>
            <hr className='name-divider' /> 
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
                        cardTitle: '1.2rem',
                        title: '1rem',
                    }}
                    mode="VERTICAL_ALTERNATING" 
                
                />
            
            </div>
        </Pane>
    ) 
}

export default ModernWorkTimeline;