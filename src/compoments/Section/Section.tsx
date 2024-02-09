import './Section.css';
import { FC } from 'react';
import { Pane } from 'evergreen-ui';

interface SectionProps {
    header: string;
    desc?: string;
    topSpacing?: number;
    childComponent?: React.ReactNode; // Type for the component prop
    refPointer: React.RefObject<HTMLDivElement>;
}

const Section: FC<SectionProps> = ({ header, desc, topSpacing, childComponent, refPointer }) => {
    
    return (
        <Pane
            className='section-container'
            display="flex"
            flexDirection='column'
            alignItems="center"
            paddingTop={topSpacing? topSpacing : 40}
            ref={refPointer}
        >
            <p className='section-header'>{header.toUpperCase()}</p>
            {header == '' ? <div /> : <hr className='section-divider' /> }
            {desc ? 
                <p className='section-desc'>{desc}</p> : 
                ''
            }
            {childComponent}
        </Pane>
    ) 
}

export default Section;