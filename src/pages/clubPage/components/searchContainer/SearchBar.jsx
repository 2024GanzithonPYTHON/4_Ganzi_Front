import React from 'react';
import { StyledSearchBar, SearchInput, SearchButton, RegisterButton, SearchBarContainer } from './SearchBar.styled';
import { FaSearch } from 'react-icons/fa';

const SearchBar = () => {
    return (
        <SearchBarContainer>
            <StyledSearchBar>
                <SearchInput placeholder="어쩌구 저쩌구를 검색해보세요!" />
                <SearchButton>
                    <FaSearch />
                </SearchButton>
            </StyledSearchBar>
            <RegisterButton>+ 등록하기</RegisterButton>
        </SearchBarContainer>
    );
};

export default SearchBar;