import {
  CardContainer,
  CardImage,
  CardTitle,
  CardTitleText,
} from "./ProjectCard.styled";
import { useNavigate } from "react-router-dom";

const ProjectCard = ({ type, id, title, src }) => {
  const navigate = useNavigate();

  const handleClub = () => {
    navigate(`/club/detail/${id}`);
  };

  const handlePaper = () => {
    navigate(`/paper/detail/${id}`);
  };

  return (
    <CardContainer onClick={type === "club" ? handleClub : handlePaper}>
      <CardImage src={src} alt={title} />
      <CardTitle>
        <CardTitleText>{title}</CardTitleText>
      </CardTitle>
    </CardContainer>
  );
};

export default ProjectCard;
