import React, { useState } from "react";
import {
  Hits,
  PageContainers,
  Date,
  Eligibility,
  RecruitNum,
  RecruiteWrap,
  PointContainer,
  Price,
  MyPoint,
  Buttons,
  ApplyBtn,
  LikeBtn,
} from "./Buy.styled";
import eye from "./img/eyes.svg";
import recruit from "./img/recruit.svg";
import pointImg from "./img/Ruble.svg";
import likeNone from "./img/likeNone.svg";
import like from "./img/like.svg";

export const Buy = () => {
  // 좋아요 상태 관리
  const [isLiked, setIsLiked] = useState(false);
  const handleLikeClick = () => {
    setIsLiked((prev) => !prev); // 현재 상태의 반대를 설정
  };

  return (
    <PageContainers>
      <Hits>
        <img src={eye} alt="hits" />
        <div>322</div>
      </Hits>
      <Date>
        <div className="title">모집 기간</div>
        <div className="content">24.11.xx ~ 24.11.xx </div>
      </Date>
      <Eligibility>
        <div className="title">지원 자격</div>
        <div className="content">
          어쩌고 하면 좋고 이렇게 하시는 분 환영합니다. 20세 이상이면 좋겠어요.
        </div>
      </Eligibility>
      <RecruitNum>
        <div className="title">모집 인원</div>
        <RecruiteWrap>
          <img src={recruit} alt="recruit" />
          <div>4/5</div>
        </RecruiteWrap>
      </RecruitNum>
      <PointContainer>
        <Price>
          <div>10</div>
          <img src={pointImg} alt="point" />
        </Price>
        <MyPoint>
          <div>내 포인트</div>
          <div>50P</div>
        </MyPoint>
      </PointContainer>
      <Buttons>
        <ApplyBtn>지원하기</ApplyBtn>
        <LikeBtn isLiked={isLiked} onClick={handleLikeClick}>
          <img src={isLiked ? like : likeNone} alt="likeNone" />
        </LikeBtn>
      </Buttons>
    </PageContainers>
  );
};
