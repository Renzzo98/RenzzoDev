import './MainContent.css'; // Import corresponding CSS

import { FC } from 'react';
import { Pane } from 'evergreen-ui';
import Insights from '../../compoments/Insights/Insights';
import ServiceCardList from '../../compoments/ServiceCardList/ServiceCardList';
import { development, design } from '../../constants/serviceItems'; 
import { aboutMeDesc, aboutMeHeader, servicesHeader } from '../../constants/textContent';

interface mainContentProps {
  isMobile: boolean
}

const MainContent: FC<mainContentProps> = ({ isMobile }) => {

  const serviceArr = [ development, design ];

  return (
    <Pane 
      className="main-content"
      clearfix display="flex"
      flexDirection="column"
    >
      <p className='about-me-header'>{aboutMeHeader}</p>
      <Insights isMobile={isMobile} />
      <p className='desc-paragraph'>
        {aboutMeDesc}
      </p>
      <hr className='my-divider' /> 
      <p className='services-header'>{servicesHeader}</p>
      <Pane
        clearfix display="flex"
        flexDirection="row"
      >
        <ServiceCardList serviceList={serviceArr}/>
      </Pane>
    </Pane>
  );
};

export default MainContent;