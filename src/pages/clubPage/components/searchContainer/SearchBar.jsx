import React from "react";
import { useNavigate } from "react-router-dom";
import {
  StyledSearchBar,
  SearchInput,
  SearchButton,
  RegisterButton,
  SearchBarContainer,
} from "./SearchBar.styled";
import { FaSearch } from "react-icons/fa";

const SearchBar = () => {
  const navigate = useNavigate();
  const toRegister = () => {
    navigate("/club/register");
  };
  return (
    <SearchBarContainer>
      <StyledSearchBar>
        <SearchInput placeholder="어쩌구 저쩌구를 검색해보세요!" />
        <SearchButton>
          <FaSearch />
        </SearchButton>
      </StyledSearchBar>
      <RegisterButton onClick={toRegister}>+ 등록하기</RegisterButton>
    </SearchBarContainer>
  );
};

export default SearchBar;
