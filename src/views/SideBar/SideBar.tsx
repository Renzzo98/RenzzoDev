import './SideBar.css'; // Import corresponding CSS

import { FC } from 'react';
import { Pane } from 'evergreen-ui';
import SideBarNavigation from '../../compoments/SideBarNavigation/SideBarNavigation';
import fileDownloadIcon from '../../assets/file_download_icon.png';
import hamburgerMenuIcon from '../../assets/menu_lines_hamburger_icon.png';
import { useGlobalState } from '../../GlobalStateProvider';
import { avatarProfile, bussinessBag } from '../../constants/iconItems';

interface SideBarProps {
  scrollSectionList: (() => void)[];
  isMobile: boolean;
}

const Sidebar: FC<SideBarProps> = ({ scrollSectionList, isMobile }) => {
  const { sideBarHidden, setSideBarHidden } = useGlobalState();

  function toggleSlideIn() {
    setSideBarHidden(true);
  }

  const navIcons = [avatarProfile, bussinessBag];

  const DesktopSize = () => {
    return (
      <Pane 
          className={isMobile? 'sidebarMobile' : "sidebar"}
          clearfix display="flex" 
          flexDirection={isMobile? 'row' : "column"}
          justifyContent="space-evenly"
          alignItems="center"
      > 
        <Pane onClick={toggleSlideIn} className='hamburger-menu-container'>
          <img width={50} src={hamburgerMenuIcon} alt="Download Resume" />
        </Pane>
        <div className="flex-spacer"></div>
        <SideBarNavigation iconList={navIcons} isVertical={true} scrollSectionList={scrollSectionList} />
        <div className="flex-spacer"></div>
        <img className='download-icon' src={fileDownloadIcon} alt="Download resume" />
      </Pane>
    );
  }

  const MobileSize = () => {
    return (
      <Pane
        className={isMobile? 'sidebarMobile' : "sidebar"}
          clearfix display="flex" 
          flexDirection={isMobile? 'row' : "column"}
      >
          <Pane onClick={toggleSlideIn} className='hamburger-menu-container-mobile'>
            <img width={50} src={hamburgerMenuIcon} alt="Download Resume" />
          </Pane>
      </Pane>
    );
  }

  return (
    <div className={isMobile? 'sidebarMobile' : sideBarHidden ? 'slide-in' : 'sidebar'}>
        {isMobile? <MobileSize /> : <DesktopSize />}
    </div>
  );
};

export default Sidebar;