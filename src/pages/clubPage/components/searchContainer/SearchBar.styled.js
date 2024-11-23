import styled from 'styled-components';

export const SearchBarContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: end;
    width: 100%;
    gap: 10px;
`;

export const StyledSearchBar = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    max-width: 500px;
    padding: 0px 12px;

    border: 2px solid #00A8CC;
    border-radius: 25px;
    background-color: white;
`;

export const SearchInput = styled.input`
    flex: 1;
    border: none;
    outline: none;
    font-size: 16px;
    padding: 8px;
    background-color: transparent;
    color: #666;
    &::placeholder {
        color: #999;
    }
`;

export const SearchButton = styled.button`
    background: none;
    border: none;
    padding: 0;
    margin: 0 8px;
    cursor: pointer;
    font-size: 18px;
    color: #4a4a4a;

    &:hover {
        color: #333;
    }
`;

export const RegisterButton = styled.button`
    min-width: 100px;
    background: #00A8CC;
    color: white;
    border: none;
    border-radius: 10px;
    padding: 10px;
    font-size: 14px;
    cursor: pointer;
    font-weight: bold;

    &:hover {
        background: #008ecc;
    }
`;