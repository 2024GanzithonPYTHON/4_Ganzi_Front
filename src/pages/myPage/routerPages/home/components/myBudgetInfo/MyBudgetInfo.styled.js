import styled from "styled-components";

export const MyBudgetInfoContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 20px;
`;

export const BudgetBox = styled.div`
    width: 100%;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    background-color: #fff;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
`;

export const BudegtInfoBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: right;
    height: 70px;
    font-size: 18px;

    span {
        display: flex;
        justify-content: right;
        font-size: 24px;
        font-weight: 800;
    }
`;

export const MyStateBox = styled.div`
    width: 100%;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    background-color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

export const MyStateLine = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    font-size: 16px;

    span {
        font-weight: 700;
    }
`