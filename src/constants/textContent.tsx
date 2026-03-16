// Need to replace this with an API
import React from 'react';

const BIRTH_YEAR = 1999;

const getAge = () => {
  const currentYear = new Date().getFullYear();
  return currentYear - BIRTH_YEAR;
};

export const aboutMeHeader = "About Me";
export const aboutMeDesc = "I am Hugo Renzzo Olcese, a dedicated and skilled software engineer with a master's degree in the field. My advanced education has provided me with a deep understanding of software engineering principles and a robust skill set. This combination of theoretical knowledge and practical experience enables me to effectively tackle complex technical challenges. My expertise extends beyond coding and development; I am also well-versed in software architecture and project management. As a professional in the dynamic world of technology, I am committed to continuous learning and applying innovative solutions to advance the field."
export const servicesHeader = "Services";
export const expHeader = "Experience";
export const conactHeader = "Contact Me"

export const fullName = [
    "HUGO",
    "RENZZO",
    "OLCESE"
]

export const titleName = "<HUGO RENZZO OLCESE/>"

export const downloadCV = "Download CV";

export const personalInsight = [
    `${getAge()} Years Old`,
    "Coffee Lover"
]

export const navItems = [
    "Home",
    "About Me",
    "Experience",
    "Contact Me"
]

export const workExperienceItems = [
    {
        title: 'NOW',
        cardTitle: "Blackrock Inc.",
        cardSubtitle: "Software Associate",
        timelineContent: (
            <div>
                <p>Frontend engineer on the Portfolio Management platform, building a suite of micro-frontend personas for an enterprise-scale internal application.</p>
                <ul>
                    <li>Architected and delivered multiple <strong>MFEs</strong> using <strong>Angular</strong>, <strong>Single-Spa</strong>, and <strong>NgRx</strong> to power a unified client-facing application suite</li>
                    <li>Collaborated with core engineering to define and scale <strong>frontend architecture</strong> patterns across teams</li>
                    <li>Built out <strong>MicroServices</strong> integration layer to enable seamless cross-feature functionality</li>
                    <li>Authored technical <strong>documentation</strong> and onboarding guides to accelerate new engineer ramp-up</li>
                    <li>Championed <strong>developer experience</strong> improvements that reduced time-to-first-contribution for new joiners</li>
                </ul>
            </div>
        ),
    },
    {
        title: 'Aug 2020  -  Dec 2022',
        cardTitle: "Blackrock Inc.",
        cardSubtitle: "Software Analyst",
        timelineContent: (
            <div>
                <p>Full rotation across engineering, product management, and UX design within the Portfolio Management division.</p>
                <ul>
                    <li>Engineered a new <strong>data visualization component</strong> for the internal design system, enabling developers to build richer analytics interfaces</li>
                    <li>Built and shipped an <strong>internal notification server</strong> to surface product updates and gather usage analytics</li>
                    <li>Worked as a <strong>Product Manager</strong> leading cross-functional teams to deliver client-facing portfolio tools</li>
                    <li>Applied <strong>UX/UI design principles</strong> to produce wireframes for a next-gen internal platform</li>
                    <li>Resolved critical bugs across the design system, improving <strong>application stability</strong> for all internal developers</li>
                </ul>
            </div>
        ),
    },
    {
        title: 'Mar 2019  -  Aug 2019',
        cardTitle: "Blackrock Inc.",
        cardSubtitle: "Summer Intern",
        timelineContent: (
            <div>
                <p>Built client-facing frontend features for BlackRock's reporting software.</p>
                <ul>
                    <li>Developed <strong>Angular 5</strong> frontend screens for client-reporting software using <strong>ag-grid</strong> and <strong>Angular Material</strong></li>
                    <li>Applied <strong>UX/UI design principles</strong> to deliver polished, user-centered interfaces</li>
                    <li>Practiced <strong>Agile development</strong> in a professional team setting, participating in sprints and code reviews</li>
                </ul>
            </div>
        ),
    },
    {
        title: 'Aug 2018  -  Apr 2019',
        cardTitle: "The Coder School",
        cardSubTitle: "Coder Coach",
        timelineContent: (
            <div>
                <p>Introduced students of all ages to programming fundamentals in a 1-on-1 coaching environment.</p>
                <ul>
                    <li>Taught <strong>Python</strong>, <strong>Java</strong>, and <strong>Scratch</strong> to students ranging from elementary to high school age</li>
                    <li>Served as many students' first exposure to programming, sparking interest in <strong>software engineering</strong></li>
                    <li>Developed strong <strong>communication and mentorship</strong> skills working with students and parents simultaneously</li>
                </ul>
            </div>
        ),
    },
    {
        title: 'Jun 2017  -  Aug 2017',
        cardTitle: "Hofstra University",
        cardSubtitle: "Lead Research",
        timelineContent: (
            <div>
                <p>Led a team researching next-generation intrusion detection systems using low-level CPU instrumentation.</p>
                <ul>
                    <li>Led a team of <strong>5 student researchers</strong> building a CPU-level <strong>intrusion detection system</strong> using <strong>Intel PT</strong></li>
                    <li>Achieved <strong>4000x speed-up</strong> over the default Intel PT decoder using <strong>CUDA GPU programming</strong></li>
                    <li>Successfully detected and captured <strong>buffer overflow attacks</strong> in controlled environments</li>
                    <li>Developed proficiency in <strong>automated GDB scripting</strong> and low-level systems programming</li>
                </ul>
            </div>
        ),
    },
];

export const contactDesc = 'Always looking for new opportunities!'