import { ProjectCard } from "../components/ProjectCard";
import { ProjectsGridForAll } from "./ProjectsGridForAll";

export const ProjectsForAll = ({projects}) => {

  return (
    <ProjectsGridForAll>
      {projects.map((project, index) => (
        <ProjectCard
          key={project.id}
          title={project.title}
          info={project.aiDescription}
          src={project.thumbnail}
          to={`/club/detail/${project.id}`}
        />
      ))}
    </ProjectsGridForAll>
  );
};
