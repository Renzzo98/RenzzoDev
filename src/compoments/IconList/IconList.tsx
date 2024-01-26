import './IconList.css';

import { FC } from 'react';
import { Pane } from 'evergreen-ui';
import IconButton from '../IconButton/IconButton';
import { SMItem } from '../../constants';


// Define the prop types
interface IconListProps {
    vertical: boolean;
    iconArr: SMItem[];
    scrollSectionList?: (() => void)[];
}

const IconList: FC<IconListProps> = ({ vertical = false, iconArr, scrollSectionList }) => {
    
    return (
        <Pane
            display="flex"
            flexDirection={vertical ? 'column' : 'row'}
            justifyContent="space-evenly"
            alignItems="center"
            gap="30px"
            marginY={40}
        >
            {iconArr.map((item, index) => {
                return (
                    <div>
                        {scrollSectionList ? 
                        <div key={index}>
                            <IconButton id={item.key} link={item.link} iconPath={item.iconPath} activeIcon={item.activeIconPath} scrollFunction={scrollSectionList[index]} />
                        </div> :
                        <div key={index}>
                            <IconButton id={item.key} link={item.link} iconPath={item.iconPath} activeIcon={item.activeIconPath} />
                        </div>
                        }
                    </div>
                );
            })}
     </Pane>
    ) 
}

export default IconList;