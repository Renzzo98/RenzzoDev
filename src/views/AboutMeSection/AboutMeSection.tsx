import './AboutMeSection.css';

import { FC } from 'react';
import { motion } from 'framer-motion';
import { aboutMeDesc, aboutMeHeader } from '../../constants/textContent';
import Section from '../../compoments/Section/Section';
import SkillSet from '../../compoments/SkillSet/SkillSet';

interface AboutMeSectionProps {
    refPointer: React.RefObject<HTMLDivElement>;
}

const AboutMeSection: FC<AboutMeSectionProps> = ({ refPointer }) => {
    
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            viewport={{ once: true, margin: '-100px' }}
        >
            <Section
                header={aboutMeHeader}
                desc={aboutMeDesc}
                refPointer={refPointer}
                childComponent={<SkillSet/>}
            />
        </motion.div>
    ) 
}

export default AboutMeSection;