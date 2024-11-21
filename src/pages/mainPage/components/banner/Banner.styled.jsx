import styled from "styled-components";

export const BannerSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  height: auto;
  gap: 50px;
  background-color: #f0f0f0;
`;

export const BannerContainer = styled.div`
  width: 580px;
  padding: 10px;
`;

export const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: start;

  height: 400px;
  gap: 30px;
  padding: 40px 0;

  @media (max-width: 1024px) {
    height: 200px;
  }
`;

export const SearchTitle = styled.h2`
  font-size: 40px;
  font-weight: 600;
`;

export const SearchBar = styled.div`
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

export const SearchTextField = styled.input`
  width: 350px;
  border: none;
  outline: none;
`;

export const SearchIconButton = styled.img`
  cursor: pointer;
`;
