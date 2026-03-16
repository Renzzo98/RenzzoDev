import './AboutMeVisualizations.css';
import { FC } from 'react';
import { FiBox, FiSmartphone, FiZap, FiUsers, FiEdit3 } from 'react-icons/fi';
import { useIsMobile } from '../../hooks/useIsMobile';

interface AboutMeVisualizationsProps {}

const AboutMeVisualizations: FC<AboutMeVisualizationsProps> = () => {
    const isMobile = useIsMobile();

    // Highlights
    const highlights = [
        { number: '4+', label: 'MFEs Shipped' },
        { number: '500+', label: 'Enterprise Users' },
        { number: '40%', label: 'Performance Gain' },
        { number: '1', label: 'Lead iOS App' },
    ];

    // Pillars
    const pillars = [
        { icon: FiBox, title: 'Architecture', desc: 'Design systems, micro-frontends, scalable systems' },
        { icon: FiSmartphone, title: 'Cross-Platform', desc: 'Angular, SwiftUI, React' },
        { icon: FiUsers, title: 'Leadership', desc: 'Team mentoring, technical direction' },
        { icon: FiEdit3, title: 'Design', desc: 'UX/UI, product thinking' },
    ];

    return (
        <div className='visualizations-container'>
            {/* Intro */}
            <p className='intro-text'>Lead Frontend Engineer building beautiful, scalable UI experiences across web and iOS.</p>

            {/* Pillars */}
            <div className='pillars-section'>
                <div className='pillars-grid'>
                    {pillars.map((pillar, idx) => (
                        <div key={idx} className='pillar-card'>
                            <div className='pillar-icon'><pillar.icon /></div>
                            <h4>{pillar.title}</h4>
                            <p>{pillar.desc}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Highlights */}
            <div className='highlights-section'>
                <div className='highlights-grid'>
                    {highlights.map((highlight, idx) => (
                        <div key={idx} className='highlight-card'>
                            <div className='highlight-number'>{highlight.number}</div>
                            <div className='highlight-label'>{highlight.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AboutMeVisualizations;
