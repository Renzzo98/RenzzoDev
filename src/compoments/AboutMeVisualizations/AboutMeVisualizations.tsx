import './AboutMeVisualizations.css';
import { FC } from 'react';
import { motion } from 'framer-motion';

interface AboutMeVisualizationsProps {}

const AboutMeVisualizations: FC<AboutMeVisualizationsProps> = () => {
    // Option 1: Key Pillars
    const pillars = [
        { icon: '🏗️', title: 'Architecture', desc: 'Design systems, micro-frontends, scalable systems' },
        { icon: '📱', title: 'Cross-Platform', desc: 'Angular, SwiftUI, React' },
        { icon: '⚡', title: 'Performance', desc: 'Optimization, high-impact improvements' },
        { icon: '👥', title: 'Leadership', desc: 'Team mentoring, technical direction' },
        { icon: '🎨', title: 'Design', desc: 'UX/UI, product thinking' },
    ];

    // Option 2: Spotlight Highlights
    const highlights = [
        { number: '4+', label: 'MFEs Shipped' },
        { number: '500+', label: 'Enterprise Users' },
        { number: '40%', label: 'Performance Gain' },
        { number: '1', label: 'Lead iOS App' },
    ];

    // Option 3: Skills/Roles
    const skillCategories = [
        { category: 'Frontend', skills: ['Angular', 'React', 'TypeScript'] },
        { category: 'Mobile', skills: ['SwiftUI', 'iOS', 'Combine'] },
        { category: 'Architecture', skills: ['Design Systems', 'Micro-frontends', 'Scalability'] },
        { category: 'Leadership', skills: ['Mentoring', 'Technical Strategy', 'Product Design'] },
    ];

    // Option 4: Icon Tag Grid
    const skills = [
        'Angular', 'React', 'TypeScript', 'SwiftUI', 'Design Systems',
        'Micro-frontends', 'Performance', 'Leadership', 'UX/UI', 'iOS',
        'Product Strategy', 'System Design'
    ];

    return (
        <div className='visualizations-container'>
            {/* Option 1: Key Pillars */}
            <motion.div className='visualization-option' initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <h3 className='option-title'>Option 1: Key Pillars</h3>
                <div className='pillars-grid'>
                    {pillars.map((pillar, idx) => (
                        <div key={idx} className='pillar-card'>
                            <div className='pillar-icon'>{pillar.icon}</div>
                            <h4>{pillar.title}</h4>
                            <p>{pillar.desc}</p>
                        </div>
                    ))}
                </div>
            </motion.div>

            {/* Option 2: Spotlight Highlights */}
            <motion.div className='visualization-option' initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <h3 className='option-title'>Option 2: Spotlight Highlights</h3>
                <p className='spotlight-intro'>Lead Frontend Engineer building beautiful, scalable UI experiences across web and iOS.</p>
                <div className='highlights-grid'>
                    {highlights.map((highlight, idx) => (
                        <div key={idx} className='highlight-card'>
                            <div className='highlight-number'>{highlight.number}</div>
                            <div className='highlight-label'>{highlight.label}</div>
                        </div>
                    ))}
                </div>
            </motion.div>

            {/* Option 3: Two-Column Layout */}
            <motion.div className='visualization-option' initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <h3 className='option-title'>Option 3: Two-Column Layout</h3>
                <div className='two-column'>
                    <div className='column-left'>
                        <p className='intro-text'>Lead Frontend Engineer specializing in scalable UI architecture and design systems. Expert in Angular, SwiftUI, and micro-frontend architecture building beautiful, high-performance experiences.</p>
                    </div>
                    <div className='column-right'>
                        {skillCategories.map((cat, idx) => (
                            <div key={idx} className='skill-category'>
                                <h5>{cat.category}</h5>
                                <div className='skill-tags'>
                                    {cat.skills.map((skill, sidx) => (
                                        <span key={sidx} className='skill-tag'>{skill}</span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </motion.div>

            {/* Option 4: Icon Tag Grid */}
            <motion.div className='visualization-option' initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <h3 className='option-title'>Option 4: Icon Tag Grid</h3>
                <p className='intro-text'>Lead Frontend Engineer. Product-focused. Design systems expert. iOS developer. Technical leader.</p>
                <div className='tag-grid'>
                    {skills.map((skill, idx) => (
                        <span key={idx} className='tag'>{skill}</span>
                    ))}
                </div>
            </motion.div>
        </div>
    );
};

export default AboutMeVisualizations;
