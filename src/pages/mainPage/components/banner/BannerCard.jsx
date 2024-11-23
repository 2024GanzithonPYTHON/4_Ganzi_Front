import {
  BannerContainer,
  Description,
  Logo,
  LogoContainer,
  ProjectName,
  Subtitle,
  Title,
} from "./BannerCard.styled";
import { useNavigate } from "react-router-dom";

const colors = ["#C6EBF4", "#EAF7FB", "#ffd700", "#FF6F61"];

const BannerCard = ({
  id,
  title,
  subtitle,
  description,
  logo,
  projectName,
}) => {
  const navigate = useNavigate();
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  const handleClub = () => {
    navigate(`/club/detail/${id}`);
  };
  return (
    <BannerContainer
      BannerContainer
      style={{ backgroundColor: randomColor }}
      onClick={handleClub}
    >
      <Title>{title}</Title>
      <LogoContainer>
        <Logo src={logo} alt="Logo" />
        <Subtitle>{subtitle}</Subtitle>
      </LogoContainer>
      <Description>{description}</Description>
      <ProjectName>{projectName}</ProjectName>
    </BannerContainer>
  );
};

export default BannerCard;
