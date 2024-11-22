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

export const CardGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(330px, 1fr));
    gap: 20px;
`;

export const Card = styled.div`
    display: flex;
    background-color: #f8f8f8;
    border: 1px solid #ddd;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const Thumbnail = styled.img`
    background-color: #c4c4c4;
    object-fit: scale-down;
    width: 150px;
    aspect-ratio: 9 / 12;
`;

export const Content = styled.div`
    flex: 1;
    padding: 15px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const TitleText = styled.div`
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 5px;
`;

export const Author = styled.div`
    font-size: 14px;
    color: gray;
`;

export const Buttons = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-top: 10px;
    gap: 5px;

    .download {
        background-color: #00aaff;
        color: white;
    }

    .view {
        background-color: #ffd700;
        color: black;
    }

    .review {
        background-color: #ddd;
        color: black;
    }
`;

export const ButtonGroup = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 10px;
`

export const Button = styled.button`
    width: 100%;
    border: none;
    border-radius: 5px;
    padding: 5px 10px;
    font-size: 14px;
    cursor: pointer;
`;