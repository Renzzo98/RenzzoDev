import { FC } from 'react';
import './IconButton.css';
import { useGlobalState } from '../../GlobalStateProvider';

interface IconButtonButtonProps {
    id: number;
    link: string;
    iconPath: string;
    activeIcon?: string
    scrollFunction?: () => void;
}

const IconButton: FC<IconButtonButtonProps> = ({ id, link, iconPath, activeIcon, scrollFunction }) => {

    const { activePage, setActivePage } = useGlobalState();

    function setPageID(pageID: number, scrollFunc: () => void): void {
        setActivePage(pageID);
        scrollFunc();
        console.log('Current Page is ' + activePage);
    }


    return (
        <div>
            {link === '' && scrollFunction ?
                (activePage === id ? 
                    <img onClick={() => setPageID(id, scrollFunction)} src={activeIcon} alt="Social Media Path" className="image-hover-effect" /> :
                    <img onClick={() => setPageID(id, scrollFunction)} src={iconPath} alt="Social Media Path" className="image-hover-effect" />
                ) : 
                <a href={link} target="_blank" rel="noopener noreferrer">
                    <img src={iconPath} alt="Social Media Path" className="image-hover-effect" />
                </a>
            }
        </div>
       
    )

}

export default IconButton;