import './ModernWorkTimeline.css';

import { FC } from 'react';
import { motion } from 'framer-motion';
import { Chrono } from "react-chrono";

import { workExperienceItems } from '../../constants/textContent';

interface ModernWorkTimelineProps {}

const ModernWorkTimeline: FC<ModernWorkTimelineProps> = () => {

    

    return (
        <motion.div
            className='timeline-item'
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: true, margin: '-50px' }}
        >
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
        </motion.div>
    ) 
}

export default ModernWorkTimeline;