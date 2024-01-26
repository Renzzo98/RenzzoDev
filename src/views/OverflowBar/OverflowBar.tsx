// Sidebar.js
import './OverflowBar.css'; // Import corresponding CSS

import { FC } from 'react';
import { Button, DownloadIcon, Pane } from 'evergreen-ui';
import { useGlobalState } from '../../GlobalStateProvider';
import IconList from '../../compoments/IconList/IconList';
import LeftArrowIcon from '../../assets/left_arrow_icon.png';
import { gitHubWhite, linkedInWhite } from '../../constants/iconItems';

interface OverflowBarProps {
  isMobile: boolean;
}

const OverflowBar: FC<OverflowBarProps> = ({ isMobile }) => {

  const { sideBarHidden, setSideBarHidden } = useGlobalState();

  const socialMediaIcons = [gitHubWhite, linkedInWhite];
  
  function toggleSlideOut() {
    setSideBarHidden(false);
  }

  const DestkopSize = () => {
    return (
      <Pane 
        className="overflow-bar" 
        clearfix display="flex"
        flexDirection="column"
        justifyContent="center" 
      >
        {sideBarHidden ? 
          <Pane
            justifyContent="start"
            alignItems="start"
          >
            <Pane onClick={toggleSlideOut} className='menu-container' display="flex" justifyContent="center" alignItems="center">
              <img width={50} src={LeftArrowIcon} alt="Download resume" />
            </Pane>
          </Pane> : ''
        
        }
        <div className="flex-spacer"></div>
        <Pane
          display="flex"
          flexDirection="column"
          marginBottom="100px"
          alignItems="center"
        >
          <p className='name-header'>HUGO</p>
          <p className='name-header'>RENZZO</p>
          <p className='name-header'>OLCESE</p>
          <hr className='name-divider' /> 
          <IconList vertical={false} iconArr={socialMediaIcons} />
        </Pane>
        {/* Add your sidebar content here */}
      </Pane>
    );
  }

  const MobileSize = () => {
    return (
      <Pane 
        className="overflow-bar-mobile" 
        clearfix display="flex"
        flexDirection="row"
        justifyContent="center"
        paddingTop={50}
        paddingBottom={50}
      >
        <Pane
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <p className='name-header'>HUGO</p>
          <p className='name-header'>RENZZO</p>
          <p className='name-header'>OLCESE</p>
          <hr className='name-divider-mobile' /> 
          <IconList vertical={false} iconArr={socialMediaIcons} />
          <Button marginY={8} paddingX={30} height={56} iconAfter={DownloadIcon}>
            Download CV
          </Button>
        </Pane>
        {/* Add your sidebar content here */}
      </Pane>
    )
  }

  return (
    <div>
       {isMobile ? <MobileSize /> : <DestkopSize />}
    </div>
  )
    
};

export default OverflowBar;