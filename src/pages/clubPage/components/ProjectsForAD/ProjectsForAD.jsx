import { ProjectCard } from "../components/ProjectCard";
import { ProjectsGridForAD } from "./ProjectsGridForAD";


export const ProjectsForAD = () => {
    return (
        <ProjectsGridForAD>
            {[...Array(2)].map((_, index) => (
                <ProjectCard 
                    key={index}
                    height={"200px"}
                    title={"제목1"}
                    info={"한줄 소개 한줄 소개 한줄 소개 한줄 소개"}
                    src={"https://t1.daumcdn.net/friends/prod/editor/dc8b3d02-a15a-4afa-a88b-989cf2a50476.jpg"} />
            ))}
        </ProjectsGridForAD>
    );
}