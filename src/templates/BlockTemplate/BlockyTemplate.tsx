import './BlockyTemplate.css';

import { FC, useRef } from 'react';
import { useMediaQuery } from 'react-responsive';
import OverflowBar from '../../views/OverflowBar/OverflowBar';
import { Pane } from 'evergreen-ui';
import WorkTimeline from '../../compoments/WorkTimeline/WorkTimeline';
import MainContent from '../../views/MainContent/MainContent';
import Sidebar from '../../views/SideBar/SideBar';

interface blockyTemplateProps {
    isMobile: boolean;
}

const BlockyTemplate: FC<blockyTemplateProps> = ({ isMobile }) => {

    const sectionOne = useRef<HTMLDivElement>(null);
    const sectionExp = useRef<HTMLDivElement>(null);

    const scrollToMainSection = () => {
        if (sectionOne.current) {
        console.log('SCROLLING TO MAIN')
        sectionOne.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const scrollToExpSection = () => {
        if (sectionExp.current) {
        console.log('SCROLLING TO EXP')
        sectionExp.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const scrollFunctions = [scrollToMainSection, scrollToExpSection];

    const DesktopSize = () => {
        return (
        <Pane
            className='blockyTemplate'
            display='flex'
            flexDirection="column"
            ref={sectionOne}
        >
            <Pane className="sectionOne">
                <Sidebar scrollSectionList={scrollFunctions} isMobile={false}/>
                <OverflowBar isMobile={false} />
                <MainContent isMobile={false} />
            </Pane>
            <Pane ref={sectionExp}>
                <WorkTimeline isMobile={false} />
            </Pane>
        </Pane>
        )
    };

    const MobileSize = () => {
        return (
        <Pane
            className='blockyTemplate'
            display='flex'
            ref={sectionOne}
        >
            <Pane className="sectionOneMobile">
                <div className='titleCardMobile'>
                <OverflowBar isMobile={true} />
                </div>
                <MainContent isMobile={true} />
                <WorkTimeline isMobile={true} />
            </Pane>
        </Pane>
        );
    };

    return (
        <div>
            {isMobile ? <MobileSize /> : <DesktopSize />}
        </div>
    );
};

export default BlockyTemplate;