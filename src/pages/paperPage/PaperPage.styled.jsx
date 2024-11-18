import styled from "styled-components";

export const PageContainer = styled.div`
  padding: 20px;
  background-color: #f9f9f9;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Wrap1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 1000px;
  gap: 18px;
  margin-bottom: 40px;
`;
export const Search = styled.div`
  display: flex;
  margin-left: auto;
  gap: 20px;
`;

export const SearchBar = styled.input`
  width: 467px;
  padding: 10px;
  margin-bottom: 20px;
  font-size: 10px;
  height: 40px;
  border: 1px solid #00a8cc;
  border-radius: 15px;

  &::placeholder {
    padding-left: 170px;
  }
`;
export const MakeBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 117px;
  height: 40px;
  background-color: #00a8cc;
  gap: 5px;
  border: none;
  border-radius: 10px;
  p {
    font: 10px;
    color: #fff8e1;
  }
`;
export const FilterContainer = styled.div`
  display: flex;
  margin-bottom: 20px;
  flex-wrap: wrap;
  border-top: 3px solid black;
  }
`;

export const FilterButton = styled.button`
  padding: 8px 12px;
  color: black;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  width: 200px;
  height: 50px;

  &:hover {
    background-color: #c6ebf4;
  }
`;

export const RecommendedSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  border-radius: 10px;
`;

export const RecommendedContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  width: 1200px;
`;
export const BookContainer = styled.div``;

export const RecommendedTitle = styled.h2`
  font-size: 24px;
  font-weight: 700;
`;

export const BookCard = styled.div`
  background-color: #333;
  padding: 20px;
  color: white;
  text-align: center;
  margin-right: 10px;
  flex: 1;
  width: 324px;
  height: 536px;

  p {
    font-size: 14px;
  }

  &:hover + .spec-card {
    opacity: 1;
    visibility: visible;
  }
  cursor: pointer;
`;

export const SpecCard = styled.div`
  background-color: #f3f3f3;
  border: 2px solid #4b3621;
  color: #333;
  flex: 1;
  text-align: left;
  width: 324px;
  height: 536px;
  position: absolute;
  z-index: 1;

  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s ease, visibility 0.3s ease;

  h4 {
    font-size: 18px;
    color: #000;
    margin-bottom: 10px;
  }

  p {
    font-size: 14px;
    color: #666;
  }

  div {
    font-size: 12px;
  }
`;

export const SC = styled.div`
  padding-left: 14px;
  padding-right: 14px;
`;
export const SCtitle = styled.h2`
  font-size: 25px;
  font-weight: bold;
  padding-top: 20px;
  padding-bottom: 14px;
`;
export const SCcontent = styled.div`
  font-size: 12px;
  padding-bottom: 30px;
`;
export const ProfileWrap = styled.div`
  background-color: #4b3621;
  color: #ffff;
  .info {
    display: flex;
    justify-content: flex-end;
  }
  padding-left: 15px;
  padding-right: 10px;
  padding-top: 10px;
  padding-bottom: 20px;
`;
export const Pf = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  gap: 8px;
  .info {
    padding-left: auto;
  }
  .id {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 3px;
  }
  p1 {
    font-weight: bold;
  }
`;
export const Em = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  gap: 8px;
`;
export const Lk = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  gap: 8px;
`;
export const Wrap2 = styled.div`
  display: flex;
  flex-direction: column;
  width: 1204px;
  margin-top: 100px;
  gap: 20px;
`;
export const CategoryTitle = styled.h3`
  font-size: 24px;
  font-weight: 700;
`;

export const CategoryList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;

  .content {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
`;

export const ListItem = styled.div`
  display: flex;
  align-items: center;
  padding: 15px;
  cursor: pointer;

  &:hover {
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  }
`;

export const ItemImage = styled.img`
  width: 322px;
  height: 150px;
  object-fit: cover;
  margin-right: 15px;
  border-radius: 5px;
`;

export const ItemTitle = styled.h4`
  font-size: 25px;
  font-weight: bold;
  margin-bottom: 5px;
`;

export const ItemCategory = styled.p`
  font-size: 20px;
  font-weight: bold;
  color: #666;
`;

export const ItemDescription = styled.p`
  font-size: 20px;
  color: #999;
`;

export const ItemStats = styled.div`
  margin-left: auto;
  font-size: 25px;
  color: #333;
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: medium;
  margin-right: 0;
  .score {
    font-weight: bold;
  }
`;
