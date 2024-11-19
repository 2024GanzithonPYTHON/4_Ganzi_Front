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
import star from "./img/star.svg";

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

  // 샘플 데이터
  const sampleItems = [
    {
      id: 1,
      image: image,
      title: "디자인 노트북",
      category: "디자인 문구",
      description: "고급스러운 디자인 노트북으로 당신의 아이디어를 기록하세요.",
      score: 4.8,
      downloadCount: 150,
      price: "20 P",
    },
    {
      id: 2,
      image: image,
      title: "홈 데코 세트",
      category: "홈/리빙",
      description: "집안을 환하게 만들어 줄 홈 데코 제품 세트.",
      score: 4.9,
      downloadCount: 120,
      price: "30 P",
    },
    {
      id: 3,
      image: image,
      title: "굿즈 컬렉션",
      category: "캐릭터/굿즈",
      description: "한정판 캐릭터 굿즈로 팬심을 채워보세요.",
      score: 5.0,
      downloadCount: 200,
      price: "15 P",
    },
    {
      id: 4,
      image: image,
      title: "파티 플래너",
      category: "파티/행사",
      description: "완벽한 파티를 위한 플래너 키트.",
      score: 4.7,
      downloadCount: 80,
      price: "25 P",
    },
  ];

  // 선택된 BookCard ID를 저장
  const [selectedBookId, setSelectedBookId] = useState(null);
  // 선택된 BookCard의 데이터를 찾는 함수
  //const selectedBook = books.find((book) => book.id === selectedBookId);

  /* 카테고리 */
  // 선택된 카테고리 버튼의 값을 저장
  const [selectedCategory, setSelectedCategory] = useState("전체");

  // 필터링된 데이터
  const filteredItems =
    selectedCategory === "전체"
      ? sampleItems
      : sampleItems.filter((item) => item.category === selectedCategory);

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
          {filteredItems.map((item) => (
            <ListItem key={item.id}>
              <ItemImage src={item.image} alt={item.title} />
              <div className="content">
                <ItemTitle>{item.title}</ItemTitle>
                <ItemCategory>{item.category}</ItemCategory>
                <ItemDescription>{item.description}</ItemDescription>
                <ItemStats>
                  <div className="score">⭐{item.score}</div>
                  <div className="download">
                    {item.downloadCount}+
                    <img className="down" src={downloadImg} alt="down" />
                  </div>
                  <div className="price">{item.price}</div>
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
