import './TitleCard.css';

import { FC } from 'react';
import { Pane } from 'evergreen-ui';
import TypingTitle from '../../compoments/TypingTitle/TypingTitle';
import IconList from '../../compoments/IconList/IconList';
import { gitHub, linkedIn } from '../../constants/iconItems';

interface TitleCardProps {}

const TitleCard: FC<TitleCardProps> = () => {

    const socialMediaIcons = [gitHub, linkedIn];
    
    return (
        <Pane className='titleCard'>
            <TypingTitle />
            <p className='positionTitle'>___SOFTWARE ENGINEER</p>
            <IconList vertical={false} iconArr={socialMediaIcons} />
        </Pane>
    ) 
}

export default TitleCard;