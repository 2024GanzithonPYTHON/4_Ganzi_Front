import React, { useState } from "react";
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
  ReviewList,
  Review,
  Rprofile,
  Rwrap,
  Rwrap1,
  Rdate,
  Rreview,
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
import defaultprofileImg from "./img/defaultprofileImg.svg";
import star from "./img/star.svg";

const DetailPaper = () => {
  /* 뒤로가기 */
  const navigate = useNavigate();
  const onClickBackBtn = () => {
    navigate(-1);
  };

  const goPurchase = () => {
    navigate("/paper/purchase");
  };

  /* 탭 */
  const [activeIndex, setActiveIndex] = useState(0);

  const tabClickHandler = (index) => {
    setActiveIndex(index);
  };

  /* 샘플 데이터 (후기 리스트) */
  const reviews = [
    {
      id: "사용자1",
      score: 5.0,
      date: "24.11.10 18:32",
      content:
        "달력 만들어보고 싶었는데, 상세히 작성해주셔서 연말에 한 번 도전해볼 수 있겠어요~ 잘 활용하겠습니다.",
    },
    {
      id: "사용자2",
      score: 4.5,
      date: "24.11.11 10:15",
      content: "좋은 비법서 감사합니다. 많은 도움이 됐습니다!",
    },
    {
      id: "사용자3",
      score: 4.8,
      date: "24.11.12 14:20",
      content: "설명도 쉽고, 필요한 정보가 많이 담겨 있어서 유익했습니다.",
    },
  ];

  /* 샘플 데이터 (비법서 정보) */
  const paperData = {
    title: "달력 제작부터 펀딩까지 A to Z 로드맵",
    image: sampleImg,
    price: 5000,
    shortTitle: "달력 펀딩률 170%의 실전 비법서",
    shortIntro: "만들어보고 싶었던 달력 제작부터 펀딩 성공까지?",
  };

  /* 샘플 데이터 (판매자 정보) */
  const sellerData = {
    profileImage: profileImg,
    name: "파사삭",
    introduce: "재밌는 프로젝트를 기획해요",
    email: "vktktkr@gmail.com",
    heartCount: 100,
  };

  /* 샘플 데이터 (탭 데이터) */
  const tabContArr = [
    {
      tabTitle: (
        <li
          className={activeIndex === 0 ? "is-active" : ""}
          onClick={() => tabClickHandler(0)}
        >
          비법서 설명
        </li>
      ),
      tabTitleText: "비법서 설명", // 제목 데이터 추가
      tabCont: (
        <div className="paper">
          {`ssssssssssss
            sssdfadf
            zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz
            dfasdf
            `}
        </div>
      ),
    },
    {
      tabTitle: (
        <li
          className={activeIndex === 1 ? "is-active" : ""}
          onClick={() => tabClickHandler(1)}
        >
          후기
        </li>
      ),
      tabTitleText: `후기 ${reviews.length}개`, // 제목 데이터 추가
      tabCont: (
        <ReviewList>
          {reviews.map((review, index) => (
            <Review key={index}>
              <Rprofile>
                <img src={defaultprofileImg} alt="dpimg" />
                <Rwrap>
                  <Rwrap1>
                    <div className="id">{review.id}</div>
                    <img src={star} alt="star" />
                    <div className="score">{review.score.toFixed(1)}</div>
                  </Rwrap1>
                  <Rdate>{review.date}</Rdate>
                </Rwrap>
              </Rprofile>
              <Rreview>{review.content}</Rreview>
            </Review>
          ))}
        </ReviewList>
      ),
    },
  ];

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
            <img src={paperData.image} alt="sampleImg" />
          </PaperImg>
          <PaperTitle>{paperData.title}</PaperTitle>
          <Tap>
            <ul className="tabis-boxed">
              {tabContArr.map((section, index) => {
                return section.tabTitle;
              })}
            </ul>
          </Tap>
          <Content>
            {/* 동적으로 제목 표시 */}
            <div className="title">{tabContArr[activeIndex].tabTitleText}</div>
            {tabContArr[activeIndex].tabCont}
          </Content>
        </Left>
        <Right>
          <Buy>
            <Point>
              {paperData.price}
              <img src={point} alt="point" />
            </Point>
            <ShortTitle>{paperData.shortTitle}</ShortTitle>
            <ShortIntro>{paperData.shortIntro}</ShortIntro>
            <BuyBtn onClick={goPurchase}>구매하기</BuyBtn>
          </Buy>
          <Seller>
            <Profile>
              <img src={sellerData.profileImage} alt="profileImg" />
              <Pwrap>
                <div className="name">{sellerData.name}</div>
                <div className="introduce">{sellerData.introduce}</div>
              </Pwrap>
            </Profile>
            <Email>
              <div className="img">
                <img src={email} alt="email" />
              </div>
              <div className="adress">{sellerData.email}</div>
            </Email>
            <Heart>
              <div className="img">
                <img src={heart} alt="heart" />
              </div>
              <div className="heartCount">{sellerData.heartCount}</div>
            </Heart>
          </Seller>
        </Right>
      </Wrap>
    </PageContainer>
  );
};

export default DetailPaper;
