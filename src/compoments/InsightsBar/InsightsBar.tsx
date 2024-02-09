import './InsightsBar.css';

import { StyleTypes } from '../../constants';
import CounterBox from '../CounterBox/CounterBox';
import { FC } from 'react';

interface InsightsBarProps {}

const InsightsBar: FC<InsightsBarProps> = () => {
    
    return (
        <div className='insights-bar'>
            <CounterBox type={StyleTypes.Secondary} subTitle='mg of Caffeine' maxInt={404}/>
            <CounterBox type={StyleTypes.Secondary} subTitle='Awards' maxInt={12}/>
            <CounterBox type={StyleTypes.Primary} subTitle='Master Degree' maxInt={1}/>
            <CounterBox type={StyleTypes.Secondary} subTitle='Github Repos' maxInt={55}/>
        </div>
    ) 
}

export default InsightsBar;