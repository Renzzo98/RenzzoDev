import './WorkTimeline.css';

import { FC } from 'react';
import { Pane } from 'evergreen-ui';
import { Chrono } from "react-chrono";

import { expHeader, workExperienceItems } from '../../constants/textContent';

interface workTimelineProps {
    isMobile: boolean
}

const workTimeline: FC<workTimelineProps> = ({ isMobile }) => {

    

    return (
        <Pane
            className='experience-timeline'
        >
            <p className='experience-header'>{expHeader}</p>
            <div className='timeline-item'>
                <Chrono 
                    items={workExperienceItems} 
                    theme={{
                        primary: 'black',
                        secondary: '#a947ff',
                        cardBgColor: 'white',
                        titleColor: 'black',
                        titleColorActive: 'white',
                        cardTitleColor: '#a947ff',
                    }}
                    fontSizes={{
                        cardText: '3rem',
                        cardTitle: '1.2rem',
                        title: isMobile ? '0.8rem' : '2rem',
                    }}
                    className={{
                        card: 'custom-card',
                        cardText: 'custom-card-detailed-text',
                        cardTitle: 'custom-card-title',
                        title: 'custom-title',
                    }}
                    mode="VERTICAL_ALTERNATING" 
                
                />
            
            </div>
        </Pane>
    ) 
}

export default workTimeline;