import styled from "styled-components";

export const UserProfileContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    margin-bottom: 10px;
`;

export const UserInfoContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;
    gap: 10px;
`;

export const UserProfileImg = styled.img`
    /* width: 80px; */
    height: 80px;
    border-radius: 50%;
    margin-bottom: 10px;
    src: ${props => props.src};
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
    justify-content: space-between;
    align-items: center;
    width: 100%;
    gap: 10px;
`;

export const BalanceBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: start;
    width: 100%;
    border-radius: 15px;
    color: white;
    text-align: center;
    padding: 15px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    background: linear-gradient(135deg, #00A8CC, #003DCC);
    gap: 15px;

    & > span {
        font-size: 20px;
        font-weight: bold;
    }

    & > div {
        font-size: 18px;
        font-weight: bold;
        margin: 10px 0;
    }

    & > button {
        width: 100%;
        background-color: #00A8CC;
        color: white;
        border: none;
        border-radius: 5px;
        padding: 8px 10px;
        cursor: pointer;
        font-size: 18px;
    }
`;

export const PaySettingBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 100%;

    background-color: ${props => props.backgroundColor || "black"};
    color: ${props => props.color || "white"};
    border-radius: 8px;
    padding: 12px 16px;
    font-size: 14px;
    font-weight: bold;
    margin-top: 15px;
    border: 1px solid #333; /* 테두리 스타일 */
    cursor: pointer;

    & > .icon {
        display: flex;
        align-items: center;
        font-size: 18px;
        gap: 8px;
    }
    
    & > .arrow {
        font-size: 14px;
        font-weight: normal;
    }
`;

export const SettingMenuContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
`;

export const SettingMenu = styled.div`
    font-size: 14px;
    font-weight: normal;
`;