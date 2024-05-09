import './ModernTemplate.css';

import { FC, useRef } from 'react';
import { Pane } from 'evergreen-ui';
import TitleCard from '../../views/TitleCard/TitleCard';
import AboutMeSection from '../../views/AboutMeSection/AboutMeSection';
import ExperienceSection from '../../views/ExperienceSection/ExperienceSection';
import InsightsSection from '../../views/InsightsSection/InsightsSection';
import ContactSection from '../../views/ContactSection/ContactSection';
import TopBarNavigation from '../../compoments/TopBarNavigation/topBarNavigation';

interface modernTemplateProps {}

const ModernTemplate: FC<modernTemplateProps> = () => {

    const sectionHeader = useRef<HTMLDivElement>(null);
    const sectionAbout = useRef<HTMLDivElement>(null);
    const sectionExp = useRef<HTMLDivElement>(null);
    const sectionContact = useRef<HTMLDivElement>(null);


    const scrollToHeaderSection = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
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

    const scrollToContactSection = () => {
        window.scrollTo({
            top: document.body.scrollHeight,
            behavior: 'smooth'
        })
    };

    const scrollFunctions = [scrollToHeaderSection, scrollToAboutSection, scrollToExpSection, scrollToContactSection];

    return (
        <div>
            <Pane className='modernTemplate'>
                <TopBarNavigation scrollFuncList={scrollFunctions} />
                <TitleCard refPointer={sectionHeader}/>
                <AboutMeSection refPointer={sectionAbout}/>
                <ExperienceSection refPointer={sectionExp} />
                <InsightsSection />
                <ContactSection refPointer={sectionContact}/>
            </Pane>
        </div>
    );
}

export default ModernTemplate;