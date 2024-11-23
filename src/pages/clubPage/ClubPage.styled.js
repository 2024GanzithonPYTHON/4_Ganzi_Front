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

export const FilterButton = styled.button`
    padding: 8px 12px;
    color: #333;
    cursor: pointer;

    &:hover {
        background-color: #ddd;
    }
`;

export const CategoryTitle = styled.h3`
    font-size: 20px;
    margin-bottom: 15px;
`;