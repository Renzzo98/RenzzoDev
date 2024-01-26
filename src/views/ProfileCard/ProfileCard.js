import './ProfileCard.css';

import { Button, Pane, Text, SocialMediaIcon } from 'evergreen-ui';
import React, { useState, useEffect } from 'react';
import profilePhoto from '../../assets/profile_test.png'


function ProfileCard() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [windowHeight, setWindowHeight] = useState(window.innerHeight);


    useEffect(() => {
        // Handler to call on window resize
        const handleResize = () => {
            // Set window width to the state
            setWindowWidth(window.innerWidth);
            // Set window height to the state
            setWindowHeight(window.innerHeight);
        };
        
        // Add event listener
        window.addEventListener('resize', handleResize);
        
        // Call handler right away so state gets updated with initial window size
        handleResize();
        
        // Remove event listener on cleanup
        return () => window.removeEventListener('resize', handleResize);
    }, []); // Empty array ensures that effect is only run on mount and unmount

    return (
        <Pane clearfix display="flex" justifyContent="center" alignItems="center">
            <Pane
                elevation={2}
                width={windowWidth/1.2}
                height={windowHeight/2}
                margin={36}
                borderRadius={24}
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                flexDirection="row"
            >
                <Pane
                display="flex"
                justifyContent="center"
                alignItems="center"
                flexDirection="column"
                width="inherit"
                height="inherit"
                >
                <img className='Profile-Photo' src={profilePhoto} alt='Profile' width={200} height={200}></img>
                <p className='Name-Title'> &lt;HUGO RENZZO OLCESE&gt; </p>
                <p className='Position-Title'>Software Engineer (he/him)</p>
                <Button className='Email-Button' paddingY={16} paddingX={72} backgroundColor="#101840">
                    <Text color="white">Email Me</Text>
                </Button>          
                <Pane
                    display="flex"
                    flexDirection="row"
                    justifyContent="center"
                    alignItems="center"
                    marginTop={12}
                >
                    < SocialMediaIcon marginRight={12} size={24} />
                    < SocialMediaIcon marginRight={12} size={24} />
                    < SocialMediaIcon marginRight={12} size={24} />
                    < SocialMediaIcon marginRight={12} size={24} />
                </Pane>
                </Pane>
                <Pane
                display="flex"
                justifyContent="center"
                alignItems="center"
                flexDirection="column"
                backgroundColor="#edeff5"
                width="inherit"
                height="inherit"
                paddingX={64}
                borderRadius={24}
                >
                <p className='About-Me-Header'> &lt;/About Me&gt; </p>
                <p className='About-Me-Paragraph'>
                    I am Hugo Renzzo Olcese, a dedicated and skilled software engineer with a master's degree in the field. My advanced education has provided me with a deep understanding of software engineering principles and a robust skill set. This combination of theoretical knowledge and practical experience enables me to effectively tackle complex technical challenges. My expertise extends beyond coding and development; I am also well-versed in software architecture and project management. As a professional in the dynamic world of technology, I am committed to continuous learning and applying innovative solutions to advance the field.
                </p>
                <Pane
                    display="flex"
                    width="-webkit-fill-available"
                    flexDirection="row"
                    justifyContent="space-evenly"
                    alignItems="center"
                    paddingTop={32}
                >
                    <Button paddingY={16} paddingX={60} backgroundColor="#101840">
                    <Text color="white">Resume</Text>
                    </Button>
                    <Button paddingY={16} paddingX={60} backgroundColor="#101840">
                    <Text color="white">Projects</Text>
                    </Button>
                </Pane>
                </Pane>
            </Pane>
        </Pane>
    );
}

export default ProfileCard;