import styled from 'styled-components';
import ProjectCard from '../ProjectCard';

export const TrendingSection = styled.section`
    padding: 20px;
    background-color: #f9f9f9;
`;

export const SectionTitle = styled.h2`
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 10px;
`;

export const SectionSubtitle = styled.p`
    font-size: 14px;
    color: #666;
    margin-bottom: 20px;
`;

export const ProjectsContainer = styled.div`
    display: flex;
    gap: 15px;
    overflow-x: auto;
    padding-bottom: 10px;

    &::-webkit-scrollbar {
        height: 6px;
    }

    &::-webkit-scrollbar-thumb {
        background-color: #ccc;
        border-radius: 3px;
    }

    &::-webkit-scrollbar-track {
        background-color: #f1f1f1;
    }
`;

export const StyledProjectCard = styled(ProjectCard)`
    width: 200px;
    min-width: 200px;
    background-color: #fff;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;

    &:hover {
        transform: translateY(-5px);
    }

    img {
        width: 100%;
        height: 120px;
        object-fit: cover;
    }

    h3 {
        font-size: 16px;
        font-weight: bold;
        margin: 10px;
    }
`;