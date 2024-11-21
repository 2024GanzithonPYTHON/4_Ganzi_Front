import {
  CardContainer,
  CardImage,
  CardTitle,
  CardTitleText,
} from "./ProjectCard.styled";

const ProjectCard = ({ title, src }) => {
  return (
    <CardContainer>
      <CardImage src={src} alt={title} />
      <CardTitle>
        <CardTitleText>{title}</CardTitleText>
      </CardTitle>
    </CardContainer>
  );
};

export default ProjectCard;
