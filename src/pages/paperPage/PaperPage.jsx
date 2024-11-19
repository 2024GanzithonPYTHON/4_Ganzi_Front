import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  PageContainer,
  Wrap1,
  Search,
  SearchBar,
  MakeBtn,
  FilterContainer,
  FilterButton,
  RecommendedSection,
  RecommendedTitle,
  BookContainer,
  BookCard,
  SpecCard,
  SC,
  SCtitle,
  SCcontent,
  ProfileWrap,
  Pf,
  Em,
  Lk,
  Wrap2,
  CategoryTitle,
  CategoryList,
  ListItem,
  ItemImage,
  ItemTitle,
  ItemCategory,
  ItemDescription,
  ItemStats,
} from "./PaperPage.styled";
import { RecommendedContainer } from "./PaperPage.styled";
import plusImg from "./img/plus.svg";
import userImg from "./img/user.svg";
import emailImg from "./img/email.svg";
import heartImg from "./img/heart.svg";
import image from "./img/image.svg";
import downloadImg from "./img/downloadImg.svg";

const PaperPage = () => {
  const navigate = useNavigate();
  // 로그인 상태 관리 (임시 구현)
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const handleMakeBtnClick = () => {
    if (isLoggedIn) {
      console.log("로그인 됨");
      navigate("/applypaper"); // 로그인 상태에서 /applypaper로 이동
    } else {
      console.log("로그인 안됨");
      // 여기에 로그인 페이지로 이동하는 로직을 추가할 수 있음
    }
  };

  // 샘플 데이터
  const books = [
    {
      id: 1,
      title: "스핀 ON/OFF",
      content:
        "스핀 상태를 On/Off 에 더해 그 중첩 상태까지 분석하여 양자역학을 연구한 보고서",
      userImg,
      name: "파사삭",
      intro: "재미있는 프로젝트를 기획해요",
      email: "aodrnzhWLfWlf@naver.com",
      heartCount: 100,
    },
    {
      id: 2,
      title: "양자역학 개론",
      content: "양자역학의 기초부터 심화까지 다룬 비법서",
      userImg,
      name: "초보과학자",
      intro: "양자역학을 처음 공부해보는 사람을 위한 비법서입니다.",
      email: "gkehdgk@naver.com",
      heartCount: 85,
    },
    {
      id: 3,
      title: "실험 보고서 작성법",
      content: "효율적으로 실험 보고서를 작성하는 팁과 예시",
      userImg,
      name: "실험실의 하루",
      intro: "실험을 진행하며 얻은 팁을 공유합니다.",
      email: "gktjddjs@naver.com",
      heartCount: 120,
    },
  ];

  // 선택된 BookCard ID를 저장
  const [selectedBookId, setSelectedBookId] = useState(null);
  // 선택된 BookCard의 데이터를 찾는 함수
  //const selectedBook = books.find((book) => book.id === selectedBookId);

  /* 카테고리 */
  // 선택된 카테고리 버튼의 값을 저장
  const [selectedCategory, setSelectedCategory] = useState("전체");

  return (
    <PageContainer>
      <Wrap1>
        <Search>
          <SearchBar placeholder="검색어를 검색해보세요!" />
          <MakeBtn onClick={handleMakeBtnClick}>
            <img src={plusImg} alt="plus" />
            <p>등록하기</p>
          </MakeBtn>
        </Search>

        <FilterContainer>
          {[
            "전체",
            "디자인 문구",
            "홈/리빙",
            "캐릭터/굿즈",
            "파티/행사",
            "출판",
            "의류",
            "예술",
          ].map((filter, index) => (
            <FilterButton
              key={index}
              onClick={() => setSelectedCategory(filter)}
              isselected={selectedCategory === filter} // 선택된 버튼인지 확인
            >
              {filter}
            </FilterButton>
          ))}
        </FilterContainer>
      </Wrap1>

      <RecommendedSection>
        <RecommendedTitle>sidEGO 추천 비법서</RecommendedTitle>
        <RecommendedContainer>
          {books.map((book) => (
            <BookContainer key={book.id}>
              {/* BookCard */}
              <BookCard
                onMouseEnter={() => setSelectedBookId(book.id)} // 호버 시 ID 설정
              >
                <p>Book ID: {book.id}</p>
              </BookCard>

              {/* SpecCard - BookCard 바로 위에 위치 */}
              {selectedBookId === book.id && (
                <SpecCard className="spec-card">
                  <SC>
                    <SCtitle>{book.title}</SCtitle>
                    <SCcontent>{book.content}</SCcontent>
                  </SC>
                  <ProfileWrap>
                    <div className="info">모임장정보</div>
                    <Pf>
                      <img className="userImg" src={book.userImg} alt="user" />
                      <div className="id">
                        <p1>{book.name}</p1>
                        <p2>{book.intro}</p2>
                      </div>
                    </Pf>
                    <Em>
                      <img src={emailImg} alt="email" />
                      <div className="email">{book.email}</div>
                    </Em>
                    <Lk>
                      <img src={heartImg} alt="heart" />
                      <p>{book.heartCount}</p>
                    </Lk>
                  </ProfileWrap>
                </SpecCard>
              )}
            </BookContainer>
          ))}
        </RecommendedContainer>
      </RecommendedSection>

      <Wrap2>
        <CategoryTitle>{selectedCategory}</CategoryTitle>
        <CategoryList>
          {[...Array(4)].map((_, index) => (
            <ListItem key={index}>
              <ItemImage src={image} alt="image" />
              <div className="content">
                <ItemTitle>제목1</ItemTitle>
                <ItemCategory>카테고리1</ItemCategory>
                <ItemDescription>짧은 소개글</ItemDescription>
                <ItemStats>
                  <div className="score">⭐5.0</div>
                  <div className="download">
                    100+
                    <img src={downloadImg} alt="down" />
                  </div>
                  <div className="price">10 P</div>
                </ItemStats>
              </div>
            </ListItem>
          ))}
        </CategoryList>
      </Wrap2>
    </PageContainer>
  );
};

export default PaperPage;
