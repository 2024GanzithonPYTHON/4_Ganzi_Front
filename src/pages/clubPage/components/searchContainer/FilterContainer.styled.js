import styled from 'styled-components';

export const StyledFilterContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    border-top: 2px solid black;
    background-color: white;
`;

export const FilterButton = styled.button`
    background: white;
    border: 0.5px solid #ddd;
    padding: 10px 15px;
    font-size: 14px;
    cursor: pointer;

    &:hover {
        background: #e0e0e0;
    }
`;