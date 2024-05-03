import './Section.css';
import { FC } from 'react';
import { Pane } from 'evergreen-ui';

interface SectionProps {
    header: string;
    desc?: string;
    divider?: boolean;
    topSpacing?: number;
    botSpacing?: number;
    altBackground?: boolean;
    childComponent?: React.ReactNode; // Type for the component prop
    refPointer: React.RefObject<HTMLDivElement>;
}

const Section: FC<SectionProps> = ({ header, desc, divider = true, topSpacing, botSpacing, altBackground, childComponent, refPointer }) => {
    
    return (
        <Pane
            className='section-container'
            display="flex"
            flexDirection='column'
            alignItems="center"
            backgroundColor={altBackground ? 'black' : ''}
            paddingTop={topSpacing ? topSpacing : 40}
            paddingBottom={botSpacing ? botSpacing : 0 }
            ref={refPointer}
        >
            <p className={`section-header ${altBackground ? 'dark' : ''}`}>{header.toUpperCase()}</p>
            {divider ? <hr className={`section-divider ${altBackground ? 'dark' : ''}`} /> : <div /> }
            {desc ? 
                <p className={`section-desc ${altBackground ? 'dark' : ''}`}>{desc}</p> : 
                ''
            }
            {childComponent}
        </Pane>
    ) 
}

export default Section;