import './ModernWorkTimeline.css';

import { FC } from 'react';
import { motion } from 'framer-motion';
import { Chrono } from "react-chrono";

import { workExperienceItems } from '../../constants/textContent';
import { useIsMobile } from '../../hooks/useIsMobile';

interface ModernWorkTimelineProps {}

const ModernWorkTimeline: FC<ModernWorkTimelineProps> = () => {
    const isMobile = useIsMobile();

    return (
        <motion.div
            className='timeline-item'
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: isMobile ? 0.25 : 0.4, ease: 'easeOut' }}
            viewport={{ once: true, margin: isMobile ? '0px' : '-50px' }}
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
                    title: '0.85rem',
                }}
                mode="VERTICAL_ALTERNATING"
                disableToolbar
                allowDynamicUpdate
            />
        </motion.div>
    ) 
}

export default ModernWorkTimeline;