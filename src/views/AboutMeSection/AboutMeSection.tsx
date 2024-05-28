import './AboutMeSection.css';

import { FC } from 'react';
import { aboutMeDesc, aboutMeHeader } from '../../constants/textContent';
import Section from '../../compoments/Section/Section';
import SkillSet from '../../compoments/SkillSet/SkillSet';

interface AboutMeSectionProps {
    refPointer: React.RefObject<HTMLDivElement>;
}

const AboutMeSection: FC<AboutMeSectionProps> = ({ refPointer }) => {
    
    return (
        <div>
            <Section
                header={aboutMeHeader}
                desc={aboutMeDesc}
                refPointer={refPointer}
                childComponent={<SkillSet/>}
            />
        </div>
    ) 
}

export default AboutMeSection;