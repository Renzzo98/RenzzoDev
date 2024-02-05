import './TopBarNavigation.css';

import { FC, useEffect, useState } from 'react';
import { Pane } from 'evergreen-ui';
import { navItems } from '../../constants/textContent';

interface topBarNavigationProps {
    scrollFuncList: (() => void)[];
}

const TopBarNavigation: FC<topBarNavigationProps> = ({ scrollFuncList })  => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isMenuRendered, setIsMenuRendered] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
        const isScrolled = window.scrollY > 0;
        if (isScrolled !== scrolled) {
            setScrolled(isScrolled);
        }
        };

        // Add the scroll event listener
        window.addEventListener('scroll', handleScroll);

        // Clean up the event listener
        return () => {
        window.removeEventListener('scroll', handleScroll);
        };
    }, [scrolled]);


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

    const handleScrollFunction = (scrollFunc: () => void) => {
        scrollFunc();
        toggleMenu();
        setTimeout(() => {
            const currentScrollPosition = window.scrollY;
            const offsetPosition = currentScrollPosition - 235;
            
            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            });
          }, 600); // The timeout duration might need adjustment
    }

    

    return (
        <Pane className={`topBarNav ${scrolled ? 'scrolled' : ''}`}>
            <div className="navbar">
                <div className={`menu-button ${scrolled ? 'scrolled' : ''}`} onClick={toggleMenu}>
                    <span className={`menu-icon ${isMenuOpen ? 'hide' : 'show'}`}>☰</span>
                    <span className={`menu-icon ${isMenuOpen ? 'show' : 'hide'}`}>✕</span>
                </div>
            </div>
            {isMenuRendered && (
                <div className={`top-nav-menu-container ${isMenuOpen ? 'show' : 'hide'}`}>
                    <ul className={`menu-list ${scrolled ? 'scrolled' : ''}`}>
                        {navItems.map((item, index) => {
                            return (
                                <div key={index}>
                                    <li onClick={() => handleScrollFunction(scrollFuncList[index])}>{item}</li>
                                </div>
                            )
                        })}
                    </ul>
                </div>
            )}

        </Pane>
    )
}

export default TopBarNavigation;