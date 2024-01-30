import './TopBarNavigation.css';

import { FC, useState } from 'react';
import { Pane } from 'evergreen-ui';

interface topBarNavigationProps {}

const TopBarNavigation: FC<topBarNavigationProps> = ()  => {

const [isMenuOpen, setIsMenuOpen] = useState(false);
const [isMenuRendered, setIsMenuRendered] = useState(false);


  const toggleMenu = () => {
    if (isMenuOpen) {
        // Start the hide animation
        setIsMenuOpen(false);
        
        // Wait for the animation to finish before removing the menu from the DOM
        setTimeout(() => {
          setIsMenuRendered(false);
        }, 250); // 500ms is the duration of your CSS transition
      } else {
        // Render the menu and then start the show animation
        setIsMenuRendered(true);
        // Use a timeout to ensure the element is in the DOM before starting the animation
        setTimeout(() => {
            setIsMenuOpen(true);
        }, 10);
      }
  };

    return (
        <Pane className="topBarNav">
            <div className="navbar">
                <div className="menu-button" onClick={toggleMenu}>
                    <span className={`menu-icon ${isMenuOpen ? 'hide' : 'show'}`}>☰</span>
                    <span className={`menu-icon ${isMenuOpen ? 'show' : 'hide'}`}>✕</span>
                </div>
            </div>
            {isMenuRendered && (
                <div className={`top-nav-menu-container ${isMenuOpen ? 'show' : 'hide'}`}>
                    <ul className="menu-list">
                        <li>Option 1</li>
                        <li>Option 2</li>
                        <li>Option 3</li>
                        {/* More options... */}
                    </ul>
                </div>
            )}

        </Pane>
    )
}

export default TopBarNavigation;