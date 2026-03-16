import './AboutMeSection.css';

import { FC } from 'react';
import { motion } from 'framer-motion';
import { aboutMeHeader } from '../../constants/textContent';
import Section from '../../compoments/Section/Section';
import SkillSet from '../../compoments/SkillSet/SkillSet';
import AboutMeVisualizations from '../../compoments/AboutMeVisualizations/AboutMeVisualizations';
import { useIsMobile } from '../../hooks/useIsMobile';

interface AboutMeSectionProps {
    refPointer: React.RefObject<HTMLDivElement>;
}

const AboutMeSection: FC<AboutMeSectionProps> = ({ refPointer }) => {
    const isMobile = useIsMobile();

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: isMobile ? 0.3 : 0.5, ease: 'easeOut' }}
            viewport={{ once: true, margin: isMobile ? '0px' : '-100px' }}
        >
            <Section
                header={aboutMeHeader}
                refPointer={refPointer}
                childComponent={
                    <>
                        <AboutMeVisualizations />
                        <SkillSet/>
                    </>
                }
            />
        </motion.div>
    ) 
}

export default AboutMeSection;