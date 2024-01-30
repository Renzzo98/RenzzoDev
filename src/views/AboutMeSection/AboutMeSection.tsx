import './AboutMeSection.css';

import { FC } from 'react';
import { Pane } from 'evergreen-ui';
import { aboutMeDesc, aboutMeHeader } from '../../constants/textContent';

interface AboutMeSectionProps {}

const AboutMeSection: FC<AboutMeSectionProps> = () => {
    
    return (
        <Pane className='aboutMe-containter'>
            <p className='aboutMe-header'>{aboutMeHeader.toUpperCase()}</p>
            <hr className='name-divider' /> 
            <p className='aboutMe-desc'>{aboutMeDesc}</p>
        </Pane>
    ) 
}

export default AboutMeSection;