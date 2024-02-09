import './ExperienceSection.css';

import { FC } from 'react';
import { expHeader } from '../../constants/textContent';
import Section from '../../compoments/Section/Section';
import ModernWorkTimeline from '../../compoments/ModernWorkTimeline/ModernWorkTimeline';

interface ExperienceSectionProps {
    refPointer: React.RefObject<HTMLDivElement>;
}

const ExperienceSection: FC<ExperienceSectionProps> = ({ refPointer }) => {
    
    return (
        <Section 
            header={expHeader}
            refPointer={refPointer}
            childComponent={<ModernWorkTimeline />}
        />
    ) 
}

export default ExperienceSection;