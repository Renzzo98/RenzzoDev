import './ProjectSection.css';

import { FC } from 'react';
import { motion } from 'framer-motion';
import { projectsHeader, projectsItems } from '../../constants/textContent';
import Section from '../../compoments/Section/Section';
import ProjectCard from '../../compoments/ProjectCard/ProjectCard';
import Button from '../../compoments/Button/Button';
import { StyleTypes } from '../../constants';

interface ProjectSectionProps {
    refPointer: React.RefObject<HTMLDivElement>;
}

const ProjectSection: FC<ProjectSectionProps> = ({ refPointer }) => {
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
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            viewport={{ once: true, margin: '-100px' }}
        >
            <Section
                header={projectsHeader}
                refPointer={refPointer}
                childComponent={
                    <div>
                        <motion.div
                            className="projects-grid"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: '-50px' }}
                            variants={containerVariants}
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
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: '-50px' }}
                            variants={buttonVariants}
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
