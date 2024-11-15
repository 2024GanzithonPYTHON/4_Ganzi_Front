import React from 'react';
import { BudgetBox, MyBudgetInfoContainer } from './MyBudgetInfo.styled';

const MyBudgetInfo = () => {
    return (
        <MyBudgetInfoContainer>
            <BudgetBox>캐시</BudgetBox>
            <BudgetBox>쿠폰</BudgetBox>
            <BudgetBox>이용권</BudgetBox>
            <BudgetBox>머시기</BudgetBox>
        </MyBudgetInfoContainer>
    );
};

export default MyBudgetInfo;