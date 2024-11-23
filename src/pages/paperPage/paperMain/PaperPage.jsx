import React, { useState, useEffect } from "react";
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
import axiosInstance from "../../../server/axiosInstance"; // import your axios instance

const PaperPage = () => {
  const [books, setBooks] = useState([]);
  const [selectedBookId, setSelectedBookId] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("전체");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  /* 이동 */
  const navigate = useNavigate();

  const goApply = () => {
    navigate("/paper/apply");
  };

  const goDetail = () => {
    navigate("/paper/detail");
  };

  // 선택된 카테고리 버튼의 값을 저장 - 필터링 기능 제거
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

  const [AllPaper, setAllPaper] = useState([]);
  useEffect(() => {
    /**
     * 비법서 전체 목록 조회
     */
    const readAllPapers = async () => {
      try {
        const response = await axiosInstance.get("/api/papers/lists/all");
        setAllPaper(response.data);
      } catch (error) {
        console.error("비법서 전체 목록 조회 중 오류 발생:", error);
        throw error;
      }
    };
    readAllPapers();
  }, []);

  const [PopularPaper, setPopularPaper] = useState([]);
  useEffect(() => {
    /**
     * 추천 비법서 목록(전체)
     */
    const popularPaperAll = async () => {
      try {
        const response = await axiosInstance.get("/api/papers/recommend/all");
        setPopularPaper(response.data);
      } catch (error) {
        console.error("추천 비법서(전체) 조회 중 오류 발생:", error);
        throw error;
      }
    };
    popularPaperAll();
  }, []);

  // 총 페이지 수 계산
  const totalPages = Math.ceil(books.length / itemsPerPage);

  // 현재 페이지에 해당하는 데이터 추출
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = books.slice(startIndex, endIndex);

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
          <RegisterButton onClick={goApply}>+ 등록하기</RegisterButton>
        </SearchBarContainer>
        <FilterContainer>
          {filters.map((filter, index) => (
            <FilterButton
              key={index}
              onClick={() => setSelectedCategory(filter)}
              isselected={selectedCategory === filter}
            >
              {filter}
            </FilterButton>
          ))}
        </FilterContainer>
      </Wrap1>

      <RecommendedSection>
        <RecommendedTitle>sidEGO 추천 비법서</RecommendedTitle>
        <RecommendedContainer>
          {PopularPaper.map((book) => (
            <BookContainer key={book.id}>
              {/* BookCard */}
              <BookCard
                onMouseEnter={() => setSelectedBookId(book.id)} // 호버 시 ID 설정
              >
                <img src={book.paperImg} alt="paperImg" />
              </BookCard>

              {/* SpecCard - BookCard 바로 위에 위치 */}
              {selectedBookId === book.id && (
                <SpecCard className="spec-card" onClick={goDetail}>
                  <SC>
                    <SCtitle>{book.title}</SCtitle>
                    <SCcontent>{book.descriptionShort}</SCcontent>
                  </SC>
                  <ProfileWrap>
                    <div className="info">모임장정보</div>
                    <Pf>
                      <img className="userImg" src={userImg} alt="user" />
                      <div className="id">
                        <p1>{book.nickname}</p1>
                      </div>
                    </Pf>
                    <Em>
                      <img src={emailImg} alt="email" />
                      <div className="email">{book.userEmail}</div>
                    </Em>
                    <Lk>
                      {/* <img src={heartImg} alt="heart" />
                      <p>{book.heartCount}</p> */}
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
          {AllPaper.map((item) => (
            <ListItem key={item.id} onClick={goDetail}>
              <ItemImage src={item.paperImg} alt={item.title} />
              <div className="content">
                <ItemTitle>{item.title}</ItemTitle>
                <ItemCategory>{item.category}</ItemCategory>
                <ItemDescription>{item.descriptionShort}</ItemDescription>
                <ItemStats>
                  <img src={star} alt="star" />
                  <div className="score">{item.score}</div>
                  <div className="download">
                    {item.downloads}+
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
