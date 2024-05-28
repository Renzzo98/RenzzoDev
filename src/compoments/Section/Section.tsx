import './Section.css';

import { FC } from 'react';
import { useMediaQuery } from 'react-responsive';
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
    
    const MobileView = useMediaQuery({ maxWidth: 1253 });


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
                <p 
                    className={`section-desc ${altBackground ? 'dark' : ''}`}
                    style={{ padding: MobileView? '1.4rem' : '', fontSize: MobileView? '' : '1.4rem'}}
                >{desc}</p> : 
                ''
            }
            {childComponent}
        </Pane>
    ) 
}

export default Section;