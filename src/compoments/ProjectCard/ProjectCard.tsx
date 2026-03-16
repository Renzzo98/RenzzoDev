import './ProjectCard.css';

import { FC } from 'react';
import { motion } from 'framer-motion';

interface ProjectLink {
    label: string;
    url: string;
}

interface ProjectCardProps {
    project: {
        id: number;
        title: string;
        subtitle: string;
        description: string;
        technologies: string[];
        features?: string[];
        status?: string;
        featured?: boolean;
        github?: string;
        liveDemo?: string;
        links: ProjectLink[];
    };
}

const ProjectCard: FC<ProjectCardProps> = ({ project }) => {
    return (
        <motion.div
            className={`project-card ${project.featured ? 'featured' : ''}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
        >
            <div className="project-header">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-subtitle">{project.subtitle}</p>
            </div>

            <p className="project-description">{project.description}</p>

            <div className="project-tech">
                <span className="tech-label">Tech Stack:</span>
                <div className="tech-tags">
                    {project.technologies.map((tech, idx) => (
                        <span key={idx} className="tech-tag">
                            {tech}
                        </span>
                    ))}
                </div>
            </div>

            {project.features && project.features.length > 0 && (
                <div className="project-features">
                    <span className="features-label">Key Features:</span>
                    <ul className="features-list">
                        {project.features.map((feature, idx) => (
                            <li key={idx}>{feature}</li>
                        ))}
                    </ul>
                </div>
            )}

            {project.status && (
                <p className="project-status">
                    <strong>Status:</strong> {project.status}
                </p>
            )}

            <div className="project-links">
                {project.links
                    .filter(link => link.label !== 'GitHub')
                    .map((link, idx) => (
                    <a
                        key={idx}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link"
                    >
                        {link.label} →
                    </a>
                ))}
            </div>
        </motion.div>
    );
};

export default ProjectCard;
