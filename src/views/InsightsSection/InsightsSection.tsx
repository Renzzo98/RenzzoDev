import './InsightsSection.css';

import { FC, useRef } from 'react';
import Section from '../../compoments/Section/Section';
import InsightsBar from '../../compoments/InsightsBar/InsightsBar';

interface InsightsSectionProps {}

const InsightsSection: FC<InsightsSectionProps> = () => {
    
    return (
        <Section 
            header=''
            divider={false}
            refPointer={useRef<HTMLDivElement>(null)}
            childComponent={<InsightsBar />}
        />
    ) 
}

export default InsightsSection;