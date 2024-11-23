<<<<<<< HEAD
import { ProjectCard } from "../components/ProjectCard"
import { ProjectsGridForAll } from "./ProjectsGridForAll"


export const ProjectsForAll = () => {
    return (
        <ProjectsGridForAll>
            {[...Array(12)].map((_, index) => (
                <ProjectCard 
                    key={index}
                    title={"제목1"}
                    info={"한줄 소개 한줄 소개 한줄 소개 한줄 소개"}
                    src={"https://t1.daumcdn.net/friends/prod/editor/dc8b3d02-a15a-4afa-a88b-989cf2a50476.jpg"} />
            ))}
        </ProjectsGridForAll>
    )
}
=======
import { ProjectCard } from "../components/ProjectCard";
import { ProjectsGridForAll } from "./ProjectsGridForAll";
import { useNavigate } from "react-router-dom";

export const ProjectsForAll = () => {
  return (
    <ProjectsGridForAll>
      {[...Array(12)].map((_, index) => (
        <ProjectCard
          key={index}
          title={"제목1"}
          info={"한줄 소개 한줄 소개 한줄 소개 한줄 소개"}
          src={
            "https://t1.daumcdn.net/friends/prod/editor/dc8b3d02-a15a-4afa-a88b-989cf2a50476.jpg"
          }
          to="/club/detail"
        />
      ))}
    </ProjectsGridForAll>
  );
};
>>>>>>> 9e30258ba8009f5fc7aa39006c24869ad88da4a3
