<<<<<<< HEAD
import { CardImage, CardInfo, CardTitle, ProjectCardContainer } from "./ProjectCard.styled";

export const ProjectCard = ({title, info, src, height}) => {
    return (
        <ProjectCardContainer>
            <CardImage src={src} height={height} alt="Project" />
            <CardTitle>{title}</CardTitle>
            <CardInfo>{info}</CardInfo>
        </ProjectCardContainer>
    );
}
=======
import {
  CardImage,
  CardInfo,
  CardTitle,
  ProjectCardContainer,
} from "./ProjectCard.styled";
import { useNavigate } from "react-router-dom";

export const ProjectCard = ({ title, info, src, height, to }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(to);
  };
  return (
    <ProjectCardContainer onClick={handleClick}>
      <CardImage src={src} height={height} alt="Project" />
      <CardTitle>{title}</CardTitle>
      <CardInfo>{info}</CardInfo>
    </ProjectCardContainer>
  );
};
>>>>>>> 9e30258ba8009f5fc7aa39006c24869ad88da4a3
