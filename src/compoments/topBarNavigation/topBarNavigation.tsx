import './topBarNavigation.css';

import { FC, useEffect, useState } from 'react';
import { Pane } from 'evergreen-ui';
import { navItems } from '../../constants/textContent';
import DownloadIcon from '../../assets/downarrowcircle_down_arrow_direction_move_icon.png';
import orangeDownloadIcon from '../../assets/orange_downarrowcircle_down_arrow_direction_move_icon.png';

interface topBarNavigationProps {
    scrollFuncList: (() => void)[];
}

const TopBarNavigation: FC<topBarNavigationProps> = ({ scrollFuncList })  => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isMenuRendered, setIsMenuRendered] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [currentSection, setCurrentSection] = useState(0);

    const fileName = "HugoRenzzoResume.pdf";

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 0;
            if (isScrolled !== scrolled) {
                setScrolled(isScrolled);
            }

            // Update current section based on scroll position
            const scrollPos = window.scrollY;

            if (scrollPos < 547) {
                setCurrentSection(0);
            } else if (scrollPos < 2758) {
                setCurrentSection(1);
            } else if (scrollPos < 7932) {
                setCurrentSection(2);
            } else if (scrollPos < 11700) {
                setCurrentSection(3);
            } else {
                setCurrentSection(4);
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

    const scrollToHome = () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
        // Close the menu if it's open
        if (isMenuOpen) {
            setIsMenuOpen(false);
            setTimeout(() => {
                setIsMenuRendered(false);
            }, 250);
        }
    };

    const handleScrollFunction = (scrollFunc: () => void) => {
        scrollFunc();
        toggleMenu();
    }

    

    return (
        <Pane className={`topBarNav ${scrolled ? 'scrolled' : ''}`}>
            <div className="navbar">
                <div className={`menu-button ${scrolled ? 'scrolled' : ''}`} onClick={toggleMenu}>
                    <span className={`menu-icon ${isMenuOpen ? 'hide' : 'show'}`}>☰</span>
                    <span className={`menu-icon ${isMenuOpen ? 'show' : 'hide'}`}>✕</span>
                </div>
                <div className={`breadcrumb ${currentSection > 0 && currentSection < 4 ? 'visible' : 'hidden'}`}>
                    <span
                        className="breadcrumb-home"
                        onClick={scrollToHome}
                    >
                        Home
                    </span>
                    <span className="breadcrumb-separator">/</span>
                    <span className="breadcrumb-current">{navItems[currentSection]}</span>
                </div>
            </div>
            {isMenuRendered && (
                <div className={`top-nav-menu-container ${isMenuOpen ? 'show' : 'hide'}`}>
                    <ul className={`menu-list ${scrolled ? 'scrolled' : ''}`}>
                        {navItems.map((item, index) => {
                            return (
                                <div key={index} style={{ '--item-index': index } as React.CSSProperties}>
                                    <li className='menu-item' onClick={() => handleScrollFunction(scrollFuncList[index])}>{item}</li>
                                </div>
                            )
                        })}
                        <div style={{ '--item-index': navItems.length } as React.CSSProperties}>
                            <a className={`resume-bar ${scrolled ? 'scrolled' : ''}`} href={`${process.env.PUBLIC_URL}/${fileName}`} download="HugoRenzzoResume.pdf">
                                <img className='resume-download-icon' src={scrolled? orangeDownloadIcon : DownloadIcon} alt="Download resume" />
                                <p className='resume-text'>DOWNLOAD RESUME</p>
                            </a>
                        </div>

                    </ul>
                </div>
            )}

        </Pane>
    )
}

export default TopBarNavigation;