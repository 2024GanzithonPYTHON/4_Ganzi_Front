import styled from 'styled-components';

export const PageContainer = styled.div`
    padding: 20px;
    background-color: #f9f9f9;
`;

export const SearchBar = styled.input`
    width: 100%;
    padding: 10px;
    margin-bottom: 20px;
    font-size: 16px;
    border: 1px solid #ddd;
    border-radius: 5px;
`;

export const FilterContainer = styled.div`
    display: flex;
    gap: 10px;
    margin-bottom: 20px;
    flex-wrap: wrap;
`;

export const FilterButton = styled.button`
    padding: 8px 12px;
    color: #333;
    cursor: pointer;

    &:hover {
        background-color: #ddd;
    }
`;

export const AIBanner = styled.div`
    background-color: #000;
    color: white;
    padding: 20px;
    margin-bottom: 20px;
    text-align: center;
    border-radius: 10px;
`;

export const BannerText = styled.h2`
    font-size: 24px;
    margin-bottom: 10px;
`;

export const BannerHighlight = styled.p`
    font-size: 16px;
    line-height: 1.5;
`;

export const CategoryTitle = styled.h3`
    font-size: 20px;
    margin-bottom: 15px;
`;

export const ProjectsGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 20px;
`;

export const ProjectCard = styled.div`
`;

export const CardImage = styled.img`
    width: 100%;
    height: 150px;
    object-fit: cover;
`;

export const CardTitle = styled.h4`
    font-size: 16px;
    font-weight: bold;
    margin: 10px 0;
`;

export const CardInfo = styled.p`
    font-size: 14px;
    color: #666;
    padding: 0 10px 10px;
`;