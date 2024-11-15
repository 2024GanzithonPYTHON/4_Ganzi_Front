import styled from "styled-components";

export const UserProfileContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 10px;

    img {
        width: 80px;
        height: 80px;
        border-radius: 50%;
        margin-bottom: 10px;
    }
`;

export const UserInfoContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;
    gap: 10px;
`;

export const UserTextContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;
`;

export const UserName = styled.h2`
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 5px;
`;

export const BalanceContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: space-between;
    gap: 10px;
`;

export const BalanceBox = styled.div`
    background-color: #007bff;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
`;