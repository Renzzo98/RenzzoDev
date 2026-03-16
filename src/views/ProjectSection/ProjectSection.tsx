import './ProjectSection.css';

import { FC } from 'react';
import { motion } from 'framer-motion';
import { projectsHeader, projectsItems } from '../../constants/textContent';
import Section from '../../compoments/Section/Section';
import ProjectCard from '../../compoments/ProjectCard/ProjectCard';
import Button from '../../compoments/Button/Button';
import { StyleTypes } from '../../constants';
import { useIsMobile } from '../../hooks/useIsMobile';

interface ProjectSectionProps {
    refPointer: React.RefObject<HTMLDivElement>;
}

const ProjectSection: FC<ProjectSectionProps> = ({ refPointer }) => {
    const isMobile = useIsMobile();
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.08,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: 'easeOut' } },
    };

    const buttonVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: 'easeOut' } },
    };

    return (
        <motion.div
            initial={isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            whileInView={isMobile ? undefined : { opacity: 1, y: 0 }}
            transition={isMobile ? undefined : { duration: 0.5, ease: 'easeOut' }}
            viewport={isMobile ? undefined : { once: true, margin: '-100px' }}
        >
            <Section
                header={projectsHeader}
                refPointer={refPointer}
                childComponent={
                    <div>
                        <motion.div
                            className="projects-grid"
                            initial={isMobile ? "visible" : "hidden"}
                            whileInView={isMobile ? undefined : "visible"}
                            viewport={isMobile ? undefined : { once: true, margin: '-50px' }}
                            variants={isMobile ? undefined : containerVariants}
                        >
                            {projectsItems.map((project) => (
                                <motion.div
                                    key={project.id}
                                    variants={itemVariants}
                                    className={project.featured ? 'featured' : ''}
                                >
                                    <ProjectCard project={project} />
                                </motion.div>
                            ))}
                        </motion.div>
                        <motion.div
                            className="projects-cta"
                            initial={isMobile ? "visible" : "hidden"}
                            whileInView={isMobile ? undefined : "visible"}
                            viewport={isMobile ? undefined : { once: true, margin: '-50px' }}
                            variants={isMobile ? undefined : buttonVariants}
                        >
                            <Button contentText={'Download My Resume'} type={StyleTypes.Primary} />
                        </motion.div>
                    </div>
                }
            />
        </motion.div>
    );
};

export default ProjectSection;
