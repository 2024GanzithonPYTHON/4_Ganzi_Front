import styled from 'styled-components';

export const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 200px;
    min-width: 200px;
    height: 120px;
`;

export const CardImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

export const CardTitle = styled.h3`
    font-size: 16px;
    font-weight: bold;
`;