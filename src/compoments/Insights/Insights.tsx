import { Pane } from 'evergreen-ui';

import './Insights.css'; // Import corresponding CSS


const Insights = () => {

  return (
    <Pane 
      className="insights"
      clearfix display="flex"
      flexDirection="row"
      gap={20}
    >
      <p className='insight-stat'>26 years old</p>
      <p>/</p>
      <p className='insight-stat'>Coffee Enjoyer</p>
      <p>/</p>
      <p className='insight-stat'>Freelance</p>
    </Pane>
  );
};

export default Insights;