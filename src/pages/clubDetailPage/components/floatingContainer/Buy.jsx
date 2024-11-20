import React from "react";
import {
  Point,
  ShortTitle,
  ShortIntro,
  BuyBtn,
  PageContainers,
} from "./Buy.styled";
import point from "./img/point.svg";

export const Buy = () => {
  return (
    <PageContainers>
      <Point>
        5,000
        <img src={point} alt="point" />
      </Point>
      <ShortTitle>달력 펀딩률 170%의 실전 비법서</ShortTitle>
      <ShortIntro>만들어보고 싶었던 달력 제작부터 펀딩 성공까지?</ShortIntro>
      <BuyBtn>구매하기</BuyBtn>
    </PageContainers>
  );
};
