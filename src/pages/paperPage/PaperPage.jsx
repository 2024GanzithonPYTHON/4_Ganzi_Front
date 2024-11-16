import React from "react";
import {
  PageContainer,
  SearchBar,
  FilterContainer,
  FilterButton,
  RecommendedSection,
  RecommendedTitle,
  BookCard,
  SpecCard,
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

const PaperPage = () => {
  return (
    <PageContainer>
      <SearchBar placeholder="어떠한 지혜구를 검색해보세요!" />
      <FilterContainer>
        {[
          "전체",
          "카테고리1",
          "카테고리2",
          "카테고리3",
          "카테고리4",
          "카테고리5",
          "카테고리6",
          "카테고리7",
        ].map((filter, index) => (
          <FilterButton key={index}>{filter}</FilterButton>
        ))}
        <button>등록하기</button>
      </FilterContainer>
      <RecommendedSection>
        <RecommendedTitle>??? 추천 비법서</RecommendedTitle>
        <RecommendedContainer>
          <BookCard>
            <p>이미지 들어갈거임</p>
          </BookCard>
          <BookCard>
            <p>이미지 들어갈거임</p>
          </BookCard>
          <SpecCard>
            <h4>스핀 On/Off</h4>
            <p>스핀 상태를 On/Off에 더해...</p>
            <div>
              <p>파4삭</p>
              <p>어쩌구</p>
              <p>귀차나ㅏ아ㅏㅏ아ㅏ</p>
            </div>
          </SpecCard>
        </RecommendedContainer>
      </RecommendedSection>
      <CategoryTitle>카테고리1</CategoryTitle>
      <CategoryList>
        {[...Array(4)].map((_, index) => (
          <ListItem key={index}>
            <ItemImage src="item_image_path" alt="item" />
            <div>
              <ItemTitle>제목1</ItemTitle>
              <ItemCategory>카테고리1</ItemCategory>
              <ItemDescription>짧은 소개글</ItemDescription>
            </div>
            <ItemStats>⭐ 5.0 | 100+ | 10 P</ItemStats>
          </ListItem>
        ))}
      </CategoryList>
    </PageContainer>
  );
};

export default PaperPage;
