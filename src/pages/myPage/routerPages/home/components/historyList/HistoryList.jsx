import React from 'react';
import { HistoryItem, HistoryItemBox, Points } from './HistoryList.styled';
import { DateComponent } from '../purchaseItemList/PurchaseItemList.styled';

const HistoryList = () => (
    <>
        <HistoryItemBox>
            <HistoryItem>충전 <Points>+500,000 포인트</Points></HistoryItem>
            <DateComponent>2일전</DateComponent>
        </HistoryItemBox>
        <HistoryItemBox>
            <HistoryItem>랜덤박스 <Points>+1,500,000 포인트</Points></HistoryItem>
            <DateComponent>2일전</DateComponent>
        </HistoryItemBox>
        <HistoryItemBox>
            <HistoryItem>프로젝트4 참여<Points color='#EE5648'>-40,000 포인트</Points></HistoryItem>
            <DateComponent>11월 2일</DateComponent>
        </HistoryItemBox>
        <HistoryItemBox>
            <HistoryItem>프로젝트2 참여<Points color='#EE5648'>-30,000 포인트</Points></HistoryItem>
            <DateComponent>10월 23일</DateComponent>
        </HistoryItemBox>
        <HistoryItemBox>
            <HistoryItem>랜덤박스 <Points>+500,000 포인트</Points></HistoryItem>
            <DateComponent>10월 13일</DateComponent>
        </HistoryItemBox>
    </>
);

export default HistoryList;