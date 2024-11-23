import {
  AdInfo,
  CardImage,
  CardInfo,
  CardTitle,
  ProjectCardContainer,
} from "./ProjectCard.styled";
import { useNavigate } from "react-router-dom";

export const ProjectCard = ({ title, info, src, height, to, isAd }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(to);
  };
  return (
    <ProjectCardContainer onClick={handleClick}>
      <CardImage src={src} height={height} alt="Project" />
      <CardTitle>{title}</CardTitle>
      <CardInfo>{info}</CardInfo>
      {
        isAd && <AdInfo>AD</AdInfo>
      }
    </ProjectCardContainer>
  );
};
