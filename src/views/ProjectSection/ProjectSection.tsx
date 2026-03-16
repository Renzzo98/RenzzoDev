import './ProjectSection.css';

import { FC } from 'react';
import { projectsHeader, projectsItems } from '../../constants/textContent';
import Section from '../../compoments/Section/Section';
import ProjectCard from '../../compoments/ProjectCard/ProjectCard';

interface ProjectSectionProps {
    refPointer: React.RefObject<HTMLDivElement>;
}

const ProjectSection: FC<ProjectSectionProps> = ({ refPointer }) => {
    return (
        <Section
            header={projectsHeader}
            refPointer={refPointer}
            childComponent={
                <div className="projects-grid">
                    {projectsItems.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
            }
        />
    );
};

export default ProjectSection;
