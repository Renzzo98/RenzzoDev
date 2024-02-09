import './SkillSet.css';

import { FC } from 'react';
import ScrollBar from '../ScrollBar/ScrollBar';
import Button from '../Button/Button';
import { StyleTypes } from '../../constants';

interface SkillSetProps {}

const SkillSet: FC<SkillSetProps> = () => {

        
    return (
        <div className='skill-set-container'>
            <p className='skill-header'>Here are my Skills...</p>
            <ScrollBar title='Angular' percentage={85} />
            <ScrollBar title='React' percentage={75} />
            <ScrollBar title='Typescript' percentage={90} />
            <ScrollBar title='Java' percentage={70} />
            <ScrollBar title='Python' percentage={80} />
            <ScrollBar title='Flutter' percentage={75} />
            <ScrollBar title='Creativity' percentage={100} />
            <Button contentText={'Download cv'} type={StyleTypes.Secondary} />
        </div>
    ) 
}

export default SkillSet;