import './InsightsSection.css';

import { FC } from 'react';
import Section from '../../compoments/Section/Section';
import InsightsBar from '../../compoments/InsightsBar/InsightsBar';

interface InsightsSectionProps {
    refPointer: React.RefObject<HTMLDivElement>;
}

const InsightsSection: FC<InsightsSectionProps> = ({ refPointer }) => {
    
    return (
        <Section 
            header=''
            divider={false}
            refPointer={refPointer}
            childComponent={<InsightsBar />}
        />
    ) 
}

export default InsightsSection;