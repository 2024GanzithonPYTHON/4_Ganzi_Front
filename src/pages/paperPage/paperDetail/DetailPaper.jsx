import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
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
import defaultprofileImg from "./img/defaultprofileImg.svg";
import star from "./img/star.svg";
import axiosInstance from "../../../server/axiosInstance";

const DetailPaper = () => {
  const { paperId } = useParams(); // URL에서 paperId 받아오기

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

  const [detailPaper, setDetailPaper] = useState({});
  useEffect(() => {
    const readOnePaper = async () => {
      try {
        const response = await axiosInstance.get(`/api/papers/${paperId}`);
        setDetailPaper(response.data);
      } catch (error) {
        if (error.response) {
          console.error("서버 오류:", error.response.data);
        } else if (error.request) {
          console.error("요청 오류:", error.request);
        } else {
          console.error("일반 오류:", error.message);
        }
        console.error("비법서 전체 목록 조회 중 오류 발생:", error);
      }
    };
    // paperId를 이용해 서버로부터 해당 비법서의 상세 정보를 가져오는 로직을 여기에 추가
    console.log("현재 paperId:", paperId);
    readOnePaper();
  }, [paperId]);

  const [detailReview, setDetailReview] = useState([]);
  const [reviewCount, setReviewCount] = useState(0);
  useEffect(() => {
    const readReviews = async () => {
      try {
        const response = await axiosInstance.get(`/api/${paperId}/review`);
        setDetailReview(response.data.reviewList);
        setReviewCount(response.data.reviewCount);
      } catch (error) {
        console.error("후기 목록 조회 중 오류 발생:", error);
      }
    };
    readReviews();
  }, [paperId]);

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
          {" "}
          {detailPaper ? detailPaper.description : "Loading..."}
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
      tabTitleText: `후기${reviewCount}개`, // 제목 데이터 추가
      tabCont: (
        <ReviewList>
          {detailReview.map((review) => (
            <Review key={review.id}>
              <Rprofile>
                <img src={defaultprofileImg} alt="dpimg" />
                <Rwrap>
                  <Rwrap1>
                    <div className="id">{review.nickname}</div>
                    <img src={star} alt="star" />
                    <div className="score">{review.score}</div>
                  </Rwrap1>
                  <Rdate>{review.createdAt}</Rdate>
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
            <img
              className="img"
              src={detailPaper.paperImg}
              alt="detailPaper.paperImg"
            />
          </PaperImg>
          <PaperTitle>{detailPaper.title}</PaperTitle>
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
              {detailPaper.price}
              <img src={point} alt="point" />
            </Point>
            <ShortTitle>{detailPaper.titleshort}</ShortTitle>
            <ShortIntro>{detailPaper.descriptionShort}</ShortIntro>
            <BuyBtn onClick={goPurchase}>구매하기</BuyBtn>
          </Buy>
          <Seller>
            <Profile>
              <img src={profileImg} alt="profileImg" />
              <Pwrap>
                <div className="name">{detailPaper.nickname}</div>
                <div className="introduce">{sellerData.introduce}</div>
              </Pwrap>
            </Profile>
            <Email>
              <div className="img">
                <img src={email} alt="email" />
              </div>
              <div className="adress">{detailPaper.userEmail}</div>
            </Email>
            <Heart>
              <div className="img">
                <img src={heart} alt="heart" />
              </div>
              <div className="heartCount">{detailPaper.likes}</div>
            </Heart>
          </Seller>
        </Right>
      </Wrap>
    </PageContainer>
  );
};

export default DetailPaper;
