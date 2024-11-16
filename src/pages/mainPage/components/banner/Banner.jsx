import styled from "styled-components";
import BannerCarousel from "./BannerCarousel";
import SearchIcon from "../../assets/SearchIcon.png";

const BannerSection = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 400px;
  gap: 50px;
  background-color: #f0f0f0;
`;

const BannerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #333;
  font-weight: bold;
  text-align: center;
`;

const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: start;

  height: 100%;
  gap: 30px;
  padding: 40px 0;
`;

const SearchTitle = styled.h2`
  font-size: 40px;
  font-weight: 600;
`;

const SearchBar = styled.div`
  width: 466px;
  height: 55px;
  background: white;
  display: flex;
  justify-content: space-around;
  padding: 10px;
  border: 2px solid #00a8cc;
  border-radius: 50px;
  margin-top: 10px;
`;

const SearchTextField = styled.input`
  width: 350px;
  border: none;
  outline: none;
  text-align: center;
`;

export default function Banner() {
  return (
    <BannerSection>
      <BannerContainer>
        <BannerCarousel />
      </BannerContainer>
      <SearchContainer>
        <SearchTitle>이런 프로젝트는 어때요?</SearchTitle>
        <div>
          <p>다른 프로젝트를 찾으시나요?</p>
          <SearchBar>
            <img src={SearchIcon} alt="돋보기 아이콘" />
            <SearchTextField
              type="text"
              placeholder="원하시는 프로젝트를 검색해보세요!"
            />
          </SearchBar>
        </div>
      </SearchContainer>
    </BannerSection>
  );
}
