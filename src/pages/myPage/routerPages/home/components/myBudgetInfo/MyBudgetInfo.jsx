import React, { useEffect, useState } from 'react';
import { BudegtInfoBox, BudgetBox, MyBudgetInfoContainer, MyStateBox, MyStateLine } from './MyBudgetInfo.styled';
import cash from '../../assets/mypage-cash-icon.svg'
import coupon from '../../assets/mypage-coupon-icon.svg'
import voucher from '../../assets/mypage-voucher-icon.svg'
import { getUserBalance } from '../../../../../../server/user';

const MyBudgetInfo = () => {
    const [ userBalance, setUserBalance ] = useState({});
    
    useEffect(() => {
        getUserBalance().then((response) => setUserBalance(response))
    }, []);

    return (
        <MyBudgetInfoContainer>
            <BudgetBox>
                <img src={cash} alt="캐시 아이콘" />
                <BudegtInfoBox>캐시<span>{userBalance.cash}</span></BudegtInfoBox>
            </BudgetBox>
            <BudgetBox>
                <img src={coupon} alt="쿠폰 아이콘" />
                <BudegtInfoBox>쿠폰<span>{userBalance.coupons}</span></BudegtInfoBox>
            </BudgetBox>
            <BudgetBox>
                <img src={voucher} alt="이용권 아이콘" />
                <BudegtInfoBox>이용권<span>{userBalance.tickets}</span></BudegtInfoBox>
            </BudgetBox>
            <MyStateBox>
                <MyStateLine>참가중<span>0</span></MyStateLine>
                <MyStateLine>모집중<span>0</span></MyStateLine>
                <MyStateLine>구매 확정 대기<span>0</span></MyStateLine>
            </MyStateBox>
        </MyBudgetInfoContainer>
    );
};

export default MyBudgetInfo;