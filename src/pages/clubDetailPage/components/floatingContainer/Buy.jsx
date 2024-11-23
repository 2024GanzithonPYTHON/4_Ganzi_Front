import React, { useEffect, useState } from "react";
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
import { useNavigate } from "react-router-dom";

export const Buy = ({data}) => {
  // 좋아요 상태 관리
  const [isLiked, setIsLiked] = useState(false);
  const [date, setDate] = useState({dateStart: "", dateEnd: ""});
  const navigate = useNavigate();
  const handleLikeClick = () => {
    setIsLiked((prev) => !prev); // 현재 상태의 반대를 설정
  };

  useEffect(() => {
    setDate({
      dateStart: data.createdAt.split("T")[0], 
      dateEnd: data.dateEnd})
  }, [data]);

  return (
    <PageContainers>
      <Hits>
        <img src={eye} alt="hits" />
        <div>{data.viewCount}</div>
      </Hits>
      <Date>
        <div className="title">모집 기간</div>
        <div className="content">{date.dateStart} ~ {date.dateEnd} </div>
      </Date>
      <Eligibility>
        <div className="title">지원 자격</div>
        <div className="content">
          {data.bodyRequirement}
        </div>
      </Eligibility>
      <RecruitNum>
        <div className="title">모집 인원</div>
        <RecruiteWrap>
          <img src={recruit} alt="recruit" />
          <div>{data.memberCount}/{data.memberCountMax}</div>
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
        <ApplyBtn onClick={() => navigate("/club/purchase")}>지원하기</ApplyBtn>
        <LikeBtn isLiked={isLiked} onClick={handleLikeClick}>
          <img src={isLiked ? like : likeNone} alt="likeNone" />
        </LikeBtn>
      </Buttons>
    </PageContainers>
  );
};
