import React from "react";
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
  return (
    <PageContainer>
      <Wrap1>
        <Search>
          <SearchBar placeholder="어떠한 지혜구를 검색해보세요!" />
          <MakeBtn>
            <img src={plusImg} alt="plus" />
            <p>등록하기</p>
          </MakeBtn>
        </Search>

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
        </FilterContainer>
      </Wrap1>

      <RecommendedSection>
        <RecommendedTitle>??? 추천 비법서</RecommendedTitle>
        <RecommendedContainer>
          {[1, 2, 3].map((id) => (
            <BookContainer key={id}>
              <BookCard id={id}>
                <p>이미지 들어갈거임</p>
              </BookCard>
              <SpecCard className="spec-card">
                <SC>
                  <SCtitle>스핀 ON/OFF</SCtitle>
                  <SCcontent>
                    {" "}
                    스핀 상태를 On/Off 에 더해 그 중첩 상태까지 분석하여
                    양자역학을 연구한 보고서
                  </SCcontent>
                </SC>
                <ProfileWrap>
                  <div class="info">모임장 정보</div>
                  <Pf>
                    <img src={userImg} alt="user" />
                    <div class="id">
                      <p1>파사삭</p1>
                      <p1>재미있는 프로젝트를 기획해요</p1>
                    </div>
                  </Pf>
                  <Em>
                    <img src={emailImg} alt="emailImg" />
                    <p1>vktktkr@gmail.com</p1>
                  </Em>
                  <Lk>
                    <img src={heartImg} alt="heart" />
                    <p1>100</p1>
                  </Lk>
                </ProfileWrap>
              </SpecCard>
            </BookContainer>
          ))}
        </RecommendedContainer>
      </RecommendedSection>
      <Wrap2>
        <CategoryTitle>카테고리1</CategoryTitle>
        <CategoryList>
          {[...Array(4)].map((_, index) => (
            <ListItem key={index}>
              <ItemImage src={image} alt="image" />
              <div class="content">
                <ItemTitle>제목1</ItemTitle>
                <ItemCategory>카테고리1</ItemCategory>
                <ItemDescription>짧은 소개글</ItemDescription>
                <ItemStats>
                  <div class="score">⭐5.0</div>
                  <div class="download">
                    100+
                    <img src={downloadImg} alt="down" />
                  </div>
                  <div class="price">10 P</div>
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
