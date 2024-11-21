import BannerCarousel from "./BannerCarousel";
import SearchIcon from "../../assets/SearchIcon.png";
import {
  BannerSection,
  BannerContainer,
  SearchContainer,
  SearchTitle,
  SearchBar,
  SearchTextField,
  SearchIconButton,
} from "./Banner.styled";
import { useNavigate } from "react-router-dom";

export default function Banner() {
  const navigate = useNavigate();
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
            <SearchTextField
              type="text"
              placeholder="원하시는 프로젝트를 검색해보세요!"
            />
            <SearchIconButton
              src={SearchIcon}
              alt="돋보기 아이콘"
              onClick={() => navigate("/club")}
            />
          </SearchBar>
        </div>
      </SearchContainer>
    </BannerSection>
  );
}
