import './ModernTemplate.css';

import { FC, useRef } from 'react';
import { Pane } from 'evergreen-ui';
import TopBarNavigation from '../../compoments/TopBarNavigation/TopBarNavigation';
import TitleCard from '../../views/TitleCard/TitleCard';
import AboutMeSection from '../../views/AboutMeSection/AboutMeSection';
import ModernWorkTimeline from '../../compoments/ModernWorkTimeline/ModernWorkTimeline';

interface modernTemplateProps {}

const ModernTemplate: FC<modernTemplateProps> = () => {

    const sectionHeader = useRef<HTMLDivElement>(null);
    const sectionAbout = useRef<HTMLDivElement>(null);
    const sectionExp = useRef<HTMLDivElement>(null);


    const scrollToHeaderSection = () => {
        if (sectionHeader.current) {
        sectionHeader.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const scrollToAboutSection = () => {
        if (sectionAbout.current) {
        sectionAbout.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const scrollToExpSection = () => {
        if (sectionExp.current) {
        sectionExp.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const scrollFunctions = [scrollToHeaderSection, scrollToAboutSection, scrollToExpSection];

    return (
        <div>
            <Pane className='modernTemplate'>
                <TopBarNavigation scrollFuncList={scrollFunctions} />
                <TitleCard refPointer={sectionHeader}/>
                <AboutMeSection refPointer={sectionAbout}/>
                <ModernWorkTimeline  refPointer={sectionExp}/>
            </Pane>
        </div>
    );
}

export default ModernTemplate;