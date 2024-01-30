import './TypingTitle.css';
import { FC } from 'react';
import { Pane } from 'evergreen-ui';
import { fullName } from '../../constants/textContent';

interface TypingTitleProps {}

const TypingTitle: FC<TypingTitleProps> = () => {
    
    return (
        <Pane className='typingTitle'>
            <div className="typewriter">
                <h1>{fullName[0]}</h1>
                <h1>{fullName[1]}</h1>
                <h1>{fullName[2]}</h1>
            </div>
        </Pane>
    ) 
}

export default TypingTitle;