import {
  CardImage,
  CardInfo,
  CardTitle,
  ProjectCardContainer,
} from "./ProjectCard.styled";
import { useNavigate } from "react-router-dom";

export const ProjectCard = ({ title, info, src, height, to }) => {
  const navigate = useNavigate();
  return (
    <ProjectCardContainer onClick={() => navigate(to)}>
      <CardImage src={src} height={height} alt="Project" />
      <CardTitle>{title}</CardTitle>
      <CardInfo>{info}</CardInfo>
    </ProjectCardContainer>
  );
};
