import React from 'react';
import { BudegtInfoBox, BudgetBox, MyBudgetInfoContainer, MyStateBox, MyStateLine } from './MyBudgetInfo.styled';
import cash from '../../assets/mypage-cash-icon.svg'
import coupon from '../../assets/mypage-coupon-icon.svg'
import voucher from '../../assets/mypage-voucher-icon.svg'

const MyBudgetInfo = () => {
    return (
        <MyBudgetInfoContainer>
            <BudgetBox>
                <img src={cash} alt="캐시 아이콘" />
                <BudegtInfoBox>캐시<span>0</span></BudegtInfoBox>
            </BudgetBox>
            <BudgetBox>
                <img src={coupon} alt="쿠폰 아이콘" />
                <BudegtInfoBox>쿠폰<span>0</span></BudegtInfoBox>
            </BudgetBox>
            <BudgetBox>
                <img src={voucher} alt="이용권 아이콘" />
                <BudegtInfoBox>캐시<span>0</span></BudegtInfoBox>
            </BudgetBox>
            <MyStateBox>
                <MyStateLine>참가중<span>4</span></MyStateLine>
                <MyStateLine>모집중<span>1</span></MyStateLine>
                <MyStateLine>구매 확정 대기<span>3</span></MyStateLine>
            </MyStateBox>
        </MyBudgetInfoContainer>
    );
};

export default MyBudgetInfo;