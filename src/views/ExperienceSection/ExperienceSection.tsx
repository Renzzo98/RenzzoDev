import './ExperienceSection.css';

import { FC } from 'react';
import { motion } from 'framer-motion';
import { expHeader } from '../../constants/textContent';
import Section from '../../compoments/Section/Section';
import ModernWorkTimeline from '../../compoments/ModernWorkTimeline/ModernWorkTimeline';

interface ExperienceSectionProps {
    refPointer: React.RefObject<HTMLDivElement>;
}

const ExperienceSection: FC<ExperienceSectionProps> = ({ refPointer }) => {
    
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            viewport={{ once: true, margin: '-100px' }}
        >
            <Section
                header={expHeader}
                refPointer={refPointer}
                childComponent={<ModernWorkTimeline />}
            />
        </motion.div>
    ) 
}

export default ExperienceSection;