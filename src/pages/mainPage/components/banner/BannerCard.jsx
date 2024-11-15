import { BannerContainer, Description, Logo, LogoContainer, ProjectName, Subtitle, Title } from "./BannerCard.styled";

const BannerCard = ({ title, subtitle, description, logo }) => {
    return (
        <BannerContainer>
            <Title>{title}</Title>
            <LogoContainer>
                <Logo src={logo} alt="Logo" />
                <Subtitle>{subtitle}</Subtitle>
            </LogoContainer>
            <Description>{description}</Description>
            <ProjectName>Mama Bear</ProjectName>
        </BannerContainer>
    );
};

export default BannerCard;