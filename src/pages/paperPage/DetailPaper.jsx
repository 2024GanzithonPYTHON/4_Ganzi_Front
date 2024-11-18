import React from "react";
import { useNavigate } from "react-router-dom";
import {
  PageContainer,
  Title,
  TitleText,
  Wrap,
  Left,
  PaperImg,
  PaperTitle,
  Tap,
  Content,
  Right,
  Buy,
  Point,
  ShortTitle,
  ShortIntro,
  BuyBtn,
  Seller,
  Profile,
  Pwrap,
  Email,
  Heart,
} from "./DetailPaper.styled";
import backBtn from "./img/back.svg";
import point from "./img/point.svg";
import profileImg from "./img/profileImg.svg";
import email from "./img/PaperEmail.svg";
import heart from "./img/PaperHeart.svg";
import sampleImg from "./img/sampleImg.svg";

const DetailPaper = () => {
  /* 뒤로가기 */
  const navigate = useNavigate();
  const onClickBackBtn = () => {
    navigate(-1);
  };

  return (
    <PageContainer>
      <Title>
        <button>
          <img src={backBtn} alt="backBtn" onClick={onClickBackBtn} />
        </button>
        <TitleText>상세페이지</TitleText>
      </Title>
      <Wrap>
        <Left>
          <PaperImg>
            <img src={sampleImg} alt="sampleImg" />
          </PaperImg>
          <PaperTitle>
            달력 제작부터 펀딩까지 A to Z 로드맵dddddddddddddddddddddddd
          </PaperTitle>
          <Tap></Tap>
          <Content></Content>
        </Left>
        <Right>
          <Buy>
            <Point>
              5,000
              <img src={point} alt="point" />
            </Point>
            <ShortTitle>달력 펀딩률 170%의 실전 비법서</ShortTitle>
            <ShortIntro>
              만들어보고 싶었던 달력 제작부터 펀딩 성공까지?
            </ShortIntro>
            <BuyBtn>구매하기</BuyBtn>
          </Buy>
          <Seller>
            <Profile>
              <img src={profileImg} alt="profileImg" />
              <Pwrap>
                <div className="name"> 파사삭</div>
                <div className="introduce">재밌는 프로젝트를 기획해요</div>
              </Pwrap>
            </Profile>
            <Email>
              <img src={email} alt="email" />
              <div className="adress">vktktkr@gmail.com</div>
            </Email>
            <Heart>
              <img src={heart} alt="heart" />
              <div className="heartCount">100</div>
            </Heart>
          </Seller>
        </Right>
      </Wrap>
    </PageContainer>
  );
};

export default DetailPaper;
