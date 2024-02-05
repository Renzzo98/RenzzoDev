import './TitleCard.css';

import { FC } from 'react';
import { Pane } from 'evergreen-ui';
import TypingTitle from '../../compoments/TypingTitle/TypingTitle';
import IconList from '../../compoments/IconList/IconList';
import { gitHub, linkedIn } from '../../constants/iconItems';

interface TitleCardProps {
    refPointer: React.RefObject<HTMLDivElement>;
}

const TitleCard: FC<TitleCardProps> = ({ refPointer }) => {

    const socialMediaIcons = [gitHub, linkedIn];
    
    return (
        <Pane 
            className='titleCard'
            ref={refPointer}
        >
            <TypingTitle />
            <p className='positionTitle'>___SOFTWARE ENGINEER</p>
            <IconList vertical={false} iconArr={socialMediaIcons} />
        </Pane>
    ) 
}

export default TitleCard;