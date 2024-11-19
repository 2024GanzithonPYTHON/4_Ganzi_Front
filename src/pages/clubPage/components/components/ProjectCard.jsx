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