import './ModernTemplate.css';

import { FC, useRef } from 'react';
import { Pane } from 'evergreen-ui';
import TitleCard from '../../views/TitleCard/TitleCard';
import AboutMeSection from '../../views/AboutMeSection/AboutMeSection';
import ExperienceSection from '../../views/ExperienceSection/ExperienceSection';
import ProjectSection from '../../views/ProjectSection/ProjectSection';
import InsightsSection from '../../views/InsightsSection/InsightsSection';
import ContactSection from '../../views/ContactSection/ContactSection';
import TopBarNavigation from '../../compoments/topBarNavigation/topBarNavigation';

interface modernTemplateProps {}

const ModernTemplate: FC<modernTemplateProps> = () => {

    const sectionHeader = useRef<HTMLDivElement>(null);
    const sectionAbout = useRef<HTMLDivElement>(null);
    const sectionExp = useRef<HTMLDivElement>(null);
    const sectionProjects = useRef<HTMLDivElement>(null);
    const sectionContact = useRef<HTMLDivElement>(null);


    const scrollToHeaderSection = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    };

    const NAVBAR_HEIGHT = 85;

    const scrollToAboutSection = () => {
        if (sectionAbout.current) {
            const elementTop = sectionAbout.current.getBoundingClientRect().top + window.scrollY;
            window.scrollTo({
                top: elementTop - NAVBAR_HEIGHT,
                behavior: 'smooth'
            });
        }
    };

    const scrollToExpSection = () => {
        if (sectionExp.current) {
            const elementTop = sectionExp.current.getBoundingClientRect().top + window.scrollY;
            window.scrollTo({
                top: elementTop - NAVBAR_HEIGHT,
                behavior: 'smooth'
            });
        }
    };

    const scrollToProjectsSection = () => {
        if (sectionProjects.current) {
            const elementTop = sectionProjects.current.getBoundingClientRect().top + window.scrollY;
            window.scrollTo({
                top: elementTop - NAVBAR_HEIGHT,
                behavior: 'smooth'
            });
        }
    };

    const scrollToContactSection = () => {
        if (sectionContact.current) {
            const elementTop = sectionContact.current.getBoundingClientRect().top + window.scrollY;
            window.scrollTo({
                top: elementTop - NAVBAR_HEIGHT,
                behavior: 'smooth'
            });
        }
    };

    const scrollFunctions = [scrollToHeaderSection, scrollToAboutSection, scrollToExpSection, scrollToProjectsSection, scrollToContactSection];
    const sectionRefs = [sectionHeader, sectionAbout, sectionExp, sectionProjects, sectionContact];

    return (
        <div>
            <Pane className='modernTemplate'>
                <TopBarNavigation scrollFuncList={scrollFunctions} sectionRefs={sectionRefs} />
                <div className='body-content'>
                    <TitleCard refPointer={sectionHeader}/>
                    <AboutMeSection refPointer={sectionAbout}/>
                    <ExperienceSection refPointer={sectionExp} />
                    <ProjectSection refPointer={sectionProjects} />
                </div>
                <InsightsSection />
                <ContactSection refPointer={sectionContact}/>
            </Pane>
        </div>
    );
}

export default ModernTemplate;