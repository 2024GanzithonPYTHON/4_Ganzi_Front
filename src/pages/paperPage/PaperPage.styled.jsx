import styled from "styled-components";

export const PageContainer = styled.div`
  padding: 20px;
  background-color: #f9f9f9;
  display: flex;
  flex-direction: column;
`;

export const SearchBar = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  font-size: 16px;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

export const FilterContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
  flex-wrap: wrap;
`;

export const FilterButton = styled.button`
  padding: 8px 12px;
  color: #333;
  cursor: pointer;

  &:hover {
    background-color: #ddd;
  }
`;

export const RecommendedSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  padding: 20px;
  margin-bottom: 20px;
  border-radius: 10px;
`;

export const RecommendedContainer = styled.div`
  display: flex;
  gap: 10px;
`;

export const RecommendedTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 10px;
`;

export const BookCard = styled.div`
  background-color: #333;
  padding: 20px;
  color: white;
  text-align: center;
  margin-right: 10px;
  flex: 1;

  h3 {
    font-size: 18px;
    margin-bottom: 5px;
  }

  p {
    font-size: 14px;
  }
`;

export const SpecCard = styled.div`
  background-color: #f3f3f3;
  padding: 20px;
  border-radius: 10px;
  color: #333;
  flex: 1;
  text-align: left;

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
    margin-top: 10px;
    font-size: 12px;
  }
`;

export const CategoryTitle = styled.h3`
  font-size: 20px;
  margin-top: 20px;
  margin-bottom: 15px;
`;

export const CategoryList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const ListItem = styled.div`
  display: flex;
  align-items: center;
  padding: 15px;
`;

export const ItemImage = styled.img`
  width: 60px;
  height: 60px;
  object-fit: cover;
  margin-right: 15px;
  border-radius: 5px;
`;

export const ItemTitle = styled.h4`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 5px;
`;

export const ItemCategory = styled.p`
  font-size: 14px;
  color: #666;
`;

export const ItemDescription = styled.p`
  font-size: 12px;
  color: #999;
`;

export const ItemStats = styled.div`
  margin-left: auto;
  font-size: 14px;
  color: #333;
  display: flex;
  align-items: center;

  span {
    margin-left: 5px;
  }
`;
