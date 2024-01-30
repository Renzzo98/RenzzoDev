import './ModernTemplate.css';

import { FC } from 'react';
import { Pane } from 'evergreen-ui';
import TopBarNavigation from '../../compoments/TopBarNavigation/TopBarNavigation';
import TitleCard from '../../views/TitleCard/TitleCard';
import AboutMeSection from '../../views/AboutMeSection/AboutMeSection';
import ModernWorkTimeline from '../../compoments/ModernWorkTimeline/ModernWorkTimeline';

interface modernTemplateProps {
    isMobile: boolean;
}

const DesktopSize = () => {
    return (
    <Pane className='modernTemplate'>
    </Pane>
    )
};

const MobileSize = () => {
    return (
    <Pane className='modernTemplate'>
        <TopBarNavigation />
        <TitleCard />
        <AboutMeSection />
        <ModernWorkTimeline />
    </Pane>
    );
};

const ModernTemplate: FC<modernTemplateProps> = ({ isMobile }) => {
    return (
        <div>
            {isMobile ? <MobileSize /> : <DesktopSize />}
        </div>
    );
}

export default ModernTemplate;