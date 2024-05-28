import './AboutMeSection.css';

import { FC } from 'react';
import { aboutMeDesc, aboutMeHeader } from '../../constants/textContent';
import Section from '../../compoments/Section/Section';

interface ProjectSectionProps {
    refPointer: React.RefObject<HTMLDivElement>;
}

const ProjectSection: FC<ProjectSectionProps> = ({ refPointer }) => {
    
    return (
        <Section 
            header={aboutMeHeader}
            desc={aboutMeDesc}
            refPointer={refPointer}
        />
    ) 
}

export default ProjectSection;