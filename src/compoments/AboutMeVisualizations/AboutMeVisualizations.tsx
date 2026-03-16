import './AboutMeVisualizations.css';
import { FC } from 'react';
import { motion } from 'framer-motion';
import { FiBox, FiSmartphone, FiZap, FiUsers, FiEdit3 } from 'react-icons/fi';

interface AboutMeVisualizationsProps {}

const AboutMeVisualizations: FC<AboutMeVisualizationsProps> = () => {
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
        { icon: FiZap, title: 'Performance', desc: 'Optimization, high-impact improvements' },
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
                        <motion.div
                            key={idx}
                            className='pillar-card'
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <div className='pillar-icon'><pillar.icon /></div>
                            <h4>{pillar.title}</h4>
                            <p>{pillar.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Highlights */}
            <div className='highlights-section'>
                <div className='highlights-grid'>
                    {highlights.map((highlight, idx) => (
                        <motion.div
                            key={idx}
                            className='highlight-card'
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: idx * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <div className='highlight-number'>{highlight.number}</div>
                            <div className='highlight-label'>{highlight.label}</div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AboutMeVisualizations;
