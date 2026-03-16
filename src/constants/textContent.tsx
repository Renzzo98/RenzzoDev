// Need to replace this with an API
import React from 'react';

const BIRTH_YEAR = 1998;
const BIRTH_MONTH = 1; // February (0-indexed)
const BIRTH_DATE = 3;

const getAge = () => {
  const today = new Date();
  let age = today.getFullYear() - BIRTH_YEAR;

  // Subtract 1 if birthday hasn't occurred yet this year
  if (today.getMonth() < BIRTH_MONTH ||
      (today.getMonth() === BIRTH_MONTH && today.getDate() < BIRTH_DATE)) {
    age--;
  }

  return age;
};

export const aboutMeHeader = "About Me";
export const aboutMeDesc = `I'm a product-focused engineer obsessed with building beautiful, performant UI experiences that users love. With deep expertise in Angular and micro-frontend architecture, I thrive solving complex UX problems—whether that's architecting scalable design systems, shipping iOS apps for everyday problems, or tweaking performance down to the millisecond. I've worn multiple hats (engineer, product manager, UX designer) at BlackRock, which has shaped how I think: every pixel matters, but so does the system behind it. I mentor engineers and lead design-driven initiatives, believing great UI is the intersection of technical excellence and human-centered design. Looking for lead UI roles where I can build experiences that are both beautifully designed and technically sound.`
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
                <div className="card-logo-container">
                    <img src="https://logo.clearbit.com/blackrock.com?size=80" alt="BlackRock" className="card-company-logo" />
                </div>
                <p>Frontend engineer on the Portfolio Management platform, building a suite of micro-frontend personas for an enterprise-scale internal application.</p>
                <ul>
                    <li>Architected and delivered <strong>4+ micro-frontends</strong> using <strong>Angular</strong>, <strong>Single-Spa</strong>, and <strong>NgRx</strong>, serving <strong>500+ internal users</strong> across portfolio management workflows</li>
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
                <div className="card-logo-container">
                    <img src="https://logo.clearbit.com/blackrock.com?size=80" alt="BlackRock" className="card-company-logo" />
                </div>
                <p>Full rotation across engineering, product management, and UX design within the Portfolio Management division.</p>
                <ul>
                    <li>Engineered a <strong>data visualization component</strong> adopted by <strong>50+ engineers</strong> across the design system, reducing chart implementation time by <strong>40%</strong></li>
                    <li>Built and shipped an <strong>internal notification server</strong>, delivering <strong>100K+ notifications</strong> to <strong>800+ internal users</strong> with <strong>65% engagement rate</strong></li>
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
                <div className="card-logo-container">
                    <img src="https://logo.clearbit.com/blackrock.com?size=80" alt="BlackRock" className="card-company-logo" />
                </div>
                <p>Built client-facing frontend features for BlackRock's reporting software.</p>
                <ul>
                    <li>Developed <strong>6 Angular 5</strong> frontend screens for client-reporting software using <strong>ag-grid</strong> and <strong>Angular Material</strong>, used by <strong>200+ institutional clients</strong></li>
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
                <div className="card-logo-container">
                    <img src="https://logo.clearbit.com/thecoderschool.com?size=80" alt="The Coder School" className="card-company-logo" />
                </div>
                <p>Introduced students of all ages to programming fundamentals in a 1-on-1 coaching environment.</p>
                <ul>
                    <li>Taught <strong>Python</strong>, <strong>Java</strong>, and <strong>Scratch</strong> to <strong>75+ students</strong> across elementary through high school, maintaining <strong>90% student retention</strong> and progressing <strong>12 students to AP Computer Science</strong></li>
                    <li>Mentored students' first introduction to coding, developing strong <strong>communication and mentorship</strong> skills working with diverse learners</li>
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
                <div className="card-logo-container">
                    <img src="https://logo.clearbit.com/hofstra.edu?size=80" alt="Hofstra University" className="card-company-logo" />
                </div>
                <p>Led a team researching next-generation intrusion detection systems using low-level CPU instrumentation.</p>
                <ul>
                    <li>Led a team of <strong>5 student researchers</strong> building a CPU-level <strong>intrusion detection system</strong> using <strong>Intel PT</strong></li>
                    <li>Achieved <strong>4000x speed-up</strong> over baseline Intel PT decoder using <strong>CUDA GPU programming</strong>—enabling real-time intrusion detection at scale</li>
                    <li>Successfully detected and captured <strong>buffer overflow attacks</strong> in controlled environments</li>
                    <li>Developed proficiency in <strong>automated GDB scripting</strong> and low-level systems programming</li>
                </ul>
            </div>
        ),
    },
];

export const contactDesc = 'Open to lead UI roles focused on design systems, mobile experiences, and complex UX problems across web and iOS. Looking for companies serious about design excellence.'