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

const colors = ["gray", "#00c400", "#ffd600"];

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
