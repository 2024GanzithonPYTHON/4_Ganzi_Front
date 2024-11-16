import React from 'react';
import { HistoryItem, Points } from './HistoryList.styled';

const HistoryList = () => (
    <>
        <HistoryItem>충전 <Points>+500,000 포인트</Points></HistoryItem>
        <HistoryItem>랜덤박스 <Points>+1,500,000 포인트</Points></HistoryItem>
        <HistoryItem>프로젝트1 참여 <Points>-40,000 포인트</Points></HistoryItem>
    </>
);

export default HistoryList;