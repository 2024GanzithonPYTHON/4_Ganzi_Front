import React from 'react';
import { CardContainer, CardImage, CardTitle } from './ProjectCard.styled';

const ProjectCard = ({ title, imgSrc }) => {
    return (
        <CardContainer>
            <CardImage src={imgSrc} alt={title} />
            <CardTitle>{title}</CardTitle>
        </CardContainer>
    );
};

export default ProjectCard;