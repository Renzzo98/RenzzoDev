import './SideBarNavigation.css';

import { FC } from 'react';
import { Pane } from 'evergreen-ui';
import IconList from '../IconList/IconList';
import { SMItem } from '../../constants';

interface SideBarNavigationProps {
    isVertical: boolean;
    iconList: SMItem[];
    scrollSectionList: (() => void)[];
}

const SideBarNavigation: FC<SideBarNavigationProps> = ({ isVertical = true, iconList, scrollSectionList })  => {

    return (
        <Pane 
            className="sideBarNav"
            clearfix display="flex" 
            flexDirection="column"
            justifyContent="center"
            alignItems="end"
        >
            {/* Add your sidebar content here */}
            <IconList vertical={isVertical} iconArr={iconList} scrollSectionList={scrollSectionList} />
        </Pane>
    )
}

export default SideBarNavigation;