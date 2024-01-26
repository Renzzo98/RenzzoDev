import './WorkTimeline.css';

import { FC } from 'react';
import { Pane } from 'evergreen-ui';
import { Chrono } from "react-chrono";
import BLACKROCKLOGO from '../../assets/BlackRock-Logo.wine.svg';
import CODERSCHOOLLOGO from '../../assets/coder_school.png';
import HOFSTRALOGO from '../../assets/hofstra_logo.svg';

interface workTimelineProps {
    isMobile: boolean
}

const workTimeline: FC<workTimelineProps> = ({ isMobile }) => {

    const items = [
        {
            title: 'Active',
            cardTitle: "Software Associate",
            cardDetailedText: "From all of my experiences, I had leverage my UX experience, design strategies, technical skills, programming knowledge and the leadership and management skills that I learned and use them to become a better, efficient and effective engineer, adding values to our growing new lineup of services.",
            media: {
                name: "BLK",
                type: "IMAGE",
                source: {
                url: BLACKROCKLOGO
                },
            }
        },
        {
            title: 'Aug 2020 - Dec 2022',
            cardTitle: "Software Analyst",
            cardDetailedText: "",
            media: {
                name: "BLK",
                type: 'IMAGE',
                source: {
                    url: BLACKROCKLOGO
                },
            },
        },
        {
            title: 'Mar 2019 - Aug 2019',
            cardTitle: "Summer Intern",
            cardDetailedText: "Build the Frontend of the client-reporting software using Angular 5 and libraries such as ag-grid, angular material, etc.. Communicate and work efficiently with my team and other employees as I learned the basics of agile development. Developed and design front-end screens using UI and UX design principles and strategies.",
            media: {
                name: "BLK",
                type: 'IMAGE',
                source: {
                    url: BLACKROCKLOGO
                },
            },
        },
        {
            title: 'Aug 2018 - Apr 2019',
            cardTitle: "Coder Coach",
            cardDetailedText: "Working with a wide range of different age groups of students to teach them the fundamental basics of programming. Act as many kids’ first introduction to programming and try to spark the next generation of coders. Work with multiple different languages, such as Scratch, Python, Java, etc. Promote Organization and multi-tasking skills as I work and communication with multiple different clients, both during work hours, and off-work hours. Learned amazing social skills as I work, and interact with parents, and their kids.",
            media: {
                name: "CoderSchool",
                type: 'IMAGE',
                source: {
                    url: CODERSCHOOLLOGO
                },
            },
        },
        {
            title: 'Sep 2017 - Aug 2017',
            cardTitle: "Lead Research",
            cardDetailedText: "Building next generation of intrusion detection system by monitoring every single machine instruction on CPU! Worked with 3 other programmers on Intel PT decoder and CUDA based GPU programming. Led a group of 5 student researchers. Accomplished over 4000 times speed-up compared with default Intel decoder. Successfully captured buffer overflow attacks. Experiences with automated GDB scripting.",
            media: {
                name: "HOFSTR",
                type: 'IMAGE',
                source: {
                    url: HOFSTRALOGO
                },
            },
        },
    ];

    return (
        <Pane
            className='experience-timeline'
        >
            <p className='experience-header'>experience</p>
            <div style={{ width: "100%", height: "100%" }}>
                <Chrono 
                    items={items} 
                    theme={{
                        primary: 'black',
                        secondary: '#a947ff',
                        cardBgColor: 'white',
                        titleColor: 'black',
                        titleColorActive: 'white',
                        cardTitleColor: '#a947ff',
                    }}
                    fontSizes={{
                        cardText: '3rem',
                        cardTitle: '2rem',
                        title: isMobile ? '0.8rem' : '2rem',
                    }}
                    className={{
                        card: 'custom-card',
                        cardText: 'custom-card-detailed-text',
                        cardTitle: 'custom-card-title',
                        title: 'custom-title',
                    }}
                    mode="VERTICAL_ALTERNATING" 
                
                />
            
            </div>
        </Pane>
    ) 
}

export default workTimeline;