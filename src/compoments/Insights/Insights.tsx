import './Insights.css'; // Import corresponding CSS

import { FC } from 'react';
import { Pane } from 'evergreen-ui';
import { personalInsight } from '../../constants/textContent';

interface InsightsProps {
  isMobile: boolean
}

const Insights: FC<InsightsProps> = ({ isMobile }) => {

  return (
    <Pane 
      className="insights"
      clearfix display="flex"
      flexDirection="row"
      alignItems="center"
      gap={20}
    >
      <p className={'insight-stat'}>{personalInsight[0]}</p>
      <p>/</p>
      <p className='insight-stat'>{personalInsight[1]}</p>
      <p>/</p>
      <p className='insight-stat'>{personalInsight[2]}</p>
    </Pane>
  );
};

export default Insights;