import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import {
  PageContainer,
  Wrap1,
  StyledSearchBar,
  SearchInput,
  SearchButton,
  RegisterButton,
  SearchBarContainer,
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
  PaginationContainer,
  PageNumber,
} from "./PaperPage.styled";
import { RecommendedContainer } from "./PaperPage.styled";
import userImg from "./img/user.svg";
import emailImg from "./img/email.svg";
import heartImg from "./img/heart.svg";
import image from "./img/image.svg";
import downloadImg from "./img/downloadImg.svg";
import star from "./img/star.svg";

const PaperPage = () => {
  const navigate = useNavigate();

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
    {
      id: 5,
      image: image,
      title: "출판 가이드북",
      category: "출판",
      description: "출판을 처음 시작하는 사람들을 위한 안내서.",
      score: 4.5,
      downloadCount: 60,
      price: "10 P",
    },
    {
      id: 6,
      image: image,
      title: "의류 디자인 팁",
      category: "의류",
      description: "스타일리시한 의류 디자인을 위한 팁.",
      score: 4.6,
      downloadCount: 70,
      price: "18 P",
    },
    {
      id: 7,
      image: image,
      title: "예술적 감각",
      category: "예술",
      description: "예술적 감각을 키우는 방법.",
      score: 4.9,
      downloadCount: 90,
      price: "25 P",
    },
  ];

  // 선택된 BookCard ID를 저장
  const [selectedBookId, setSelectedBookId] = useState(null);

  /* 카테고리 */
  const filters = [
    "전체",
    "디자인 문구",
    "홈/리빙",
    "캐릭터/굿즈",
    "파티/행사",
    "출판",
    "의류",
    "예술",
  ];
  // 선택된 카테고리 버튼의 값을 저장
  const [selectedCategory, setSelectedCategory] = useState("전체");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // 필터링된 데이터
  const filteredItems =
    selectedCategory === "전체"
      ? sampleItems
      : sampleItems.filter((item) => item.category === selectedCategory);

  /* 리스트 페이지 */
  // 현재 페이지에 해당하는 데이터 추출
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = filteredItems.slice(startIndex, endIndex);

  // 총 페이지 수 계산
  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);

  // 페이지 변경 함수
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <PageContainer>
      <Wrap1>
        <SearchBarContainer>
          <StyledSearchBar>
            <SearchInput placeholder="어쩌구 저쩌구를 검색해보세요!" />
            <SearchButton>
              <FaSearch />
            </SearchButton>
          </StyledSearchBar>
          <RegisterButton>+ 등록하기</RegisterButton>
        </SearchBarContainer>
        <FilterContainer>
          {filters.map((filter, index) => (
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
          {currentItems.map((item) => (
            <ListItem key={item.id}>
              <ItemImage src={item.image} alt={item.title} />
              <div className="content">
                <ItemTitle>{item.title}</ItemTitle>
                <ItemCategory>{item.category}</ItemCategory>
                <ItemDescription>{item.description}</ItemDescription>
                <ItemStats>
                  <img src={star} alt="star" />
                  <div className="score">{item.score}</div>
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
        {/* Pagination */}
        <PaginationContainer>
          {Array.from({ length: totalPages }, (_, index) => (
            <PageNumber
              key={index + 1}
              onClick={() => handlePageChange(index + 1)}
              isselected={currentPage === index + 1}
            >
              {index + 1}
            </PageNumber>
          ))}
        </PaginationContainer>
      </Wrap2>
    </PageContainer>
  );
};

export default PaperPage;
