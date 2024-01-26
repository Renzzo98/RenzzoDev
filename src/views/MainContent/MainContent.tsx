import './MainContent.css'; // Import corresponding CSS

import { Pane } from 'evergreen-ui';
import Insights from '../../compoments/Insights/Insights';
import ServiceCardList from '../../compoments/ServiceCardList/ServiceCardList';
import { development, design } from '../../constants/serviceItems'; 

const MainContent = () => {

  const serviceArr = [ development, design ];

  return (
    <Pane 
      className="main-content"
      clearfix display="flex"
      flexDirection="column"
    >
      <p className='about-me-header'>about me</p>
      <Insights />
      <p className='desc-paragraph'>
        I am Hugo Renzzo Olcese, a dedicated and skilled software engineer with a master's degree in the field. My advanced education has provided me with a deep understanding of software engineering principles and a robust skill set. This combination of theoretical knowledge and practical experience enables me to effectively tackle complex technical challenges. My expertise extends beyond coding and development; I am also well-versed in software architecture and project management. As a professional in the dynamic world of technology, I am committed to continuous learning and applying innovative solutions to advance the field.
      </p>
      <hr className='my-divider' /> 
      <p className='services-header'>services</p>
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