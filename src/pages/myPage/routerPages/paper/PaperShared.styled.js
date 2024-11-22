import styled from "styled-components";

export const Container = styled.div`
    padding: 20px;
    font-family: Arial, sans-serif;
`;

export const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
`;

export const TitleSection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 10px;
`;

export const Title = styled.h1`
    font-size: 24px;
    font-weight: bold;
    margin: 0;
`;

export const SubTitle = styled.h1`
    font-size: 20px;
    margin: 0;
`;

export const SortOptions = styled.div`
    font-size: 14px;
    color: gray;

    & > span {
        cursor: pointer;
        margin-right: 10px;
    }

    & > span:hover {
        text-decoration: underline;
    }
`;

export const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`;