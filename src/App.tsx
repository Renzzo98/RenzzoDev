import './App.css';

import MainContent from './views/MainContent/MainContent';
import { Pane } from 'evergreen-ui';
import Sidebar from './views/SideBar/SideBar';
import OverflowBar from './views/OverflowBar/OverflowBar';
import { GlobalStateProvider } from './GlobalStateProvider';
import WorkTimeline from './compoments/WorkTimeline/WorkTimeline';
import { useRef } from 'react';
import { useMediaQuery } from 'react-responsive';

function App() {

  const isMobile = useMediaQuery({ maxWidth: 1253 });

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
        className='app'
        display='flex'
        flexDirection="column"
        ref={sectionOne}
    >
      <Pane className="sectionOne">
        <Sidebar scrollSectionList={scrollFunctions} isMobile={false}/>
        <OverflowBar isMobile={false} />
        <MainContent />
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
        className='app'
        display='flex'
        ref={sectionOne}
    >
      <Pane className="sectionOneMobile">
        <div className='titleCardMobile'>
          <OverflowBar isMobile={true} />
        </div>
        <MainContent />
        <WorkTimeline isMobile={true}/>
      </Pane>
    </Pane>
    );
  };

  return (
    <GlobalStateProvider>
      <div>
        {isMobile ? <MobileSize /> : <DesktopSize />}
      </div>
    </GlobalStateProvider>
  );
}

export default App;
