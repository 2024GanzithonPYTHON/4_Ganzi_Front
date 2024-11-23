import { ProjectCard } from "../components/ProjectCard";
import { ProjectsGridForAD } from "./ProjectsGridForAD";
import { useNavigate } from "react-router-dom";

export const ProjectsForAD = ({projects}) => {
  const navigate = useNavigate();

  return (
    <ProjectsGridForAD>
      {projects.map((project, index) => (
        <ProjectCard
          key={project.id}
          title={project.title}
          info={project.aiDescription}
          src={project.thumbnail}
          isAd={true}
          to={`/club/detail/${project.id}`}
        />
      ))}
    </ProjectsGridForAD>
  );
};
