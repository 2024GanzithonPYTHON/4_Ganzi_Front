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
  margin-top: 87px;
`;
export const Search = styled.div`
  display: flex;
  margin-left: auto;
  gap: 20px;
`;

export const SearchBar = styled.input`
  width: 467px;
  padding: 10px;
  font-size: 16px;
  height: 40px;
  border: 1px solid #00a8cc;
  border-radius: 15px;

  &::placeholder {
    padding-left: 150px;
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
  cursor: pointer;
  width: 200px;
  height: 50px;
  font-size: 20px;
  background-color: ${({ isselected }) => (isselected ? "#EAF7FB" : "white")};
  font-weight: ${({ isselected }) => (isselected ? "bold" : "medium")};
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
  justify-content: space-between;

  width: 1200px;
`;
export const BookContainer = styled.div`
  width: 324px;
  height: 536px;
  margin-right: 20px;
  position: relative; /* SpecCard의 기준 위치 설정 */
`;

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
  width: 330px;
  height: 536px;

  p {
    font-size: 14px;
  }

  &:hover {
    cursor: pointer;
  }
`;

export const SpecCard = styled.div`
  background-color: #f3f3f3;
  border: 2px solid #4b3621;
  color: #333;
  text-align: left;
  width: 330px;
  height: 536px;
  position: absolute;
  top: 0; /* BookCard 위로 겹치도록 설정 */
  left: 0;
  z-index: 10;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.5s ease, visibility 0.5s ease;

 ${BookContainer}:hover & {
    opacity: 1;
    visibility: visible;
    cursor: pointer;
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
  background-color: #3e2723;
  color: #ffff;
  .info {
    display: flex;
    justify-content: flex-end;
    font-size: 10px;
    font-weight: bold;
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

  .id {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 3px;
  }
  p1 {
    font-weight: bold;
  }
  p2 {
    font-size: 12px;
  }
  userImg {
    width: 20px;
    height: 20px;
    border-radius: 45px;
  }
`;
export const Em = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
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
  width: 1200px;
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
  gap: 30px;

  .content {
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 872px;
  }
`;

export const ListItem = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;

  // &:hover {
  //   box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  //   transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  // }
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
  gap: 5px;
  font-weight: medium;
  margin-right: 0;
  .score {
    font-weight: bold;
    padding-right: 25px;
  }
  .down {
    padding-right: 25px;
  }
`;

// PaginationContainer: 페이지 번호를 담는 컨테이너 스타일
export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  gap: 10px;
`;

// PageNumber: 각 페이지 번호의 스타일
export const PageNumber = styled.button`
  width: 30px;
  height: 30px;
  border: none;
  border-radius: 50%;
  background-color: ${(props) => (props.isselected ? "#00a8cc" : "#f0f0f0")};
  color: ${(props) => (props.isselected ? "#fff" : "#000")};
  font-size: 14px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: ${(props) =>
    props.isselected ? "0px 4px 6px rgba(0, 0, 0, 0.1)" : "none"};

  &:hover {
    background-color: ${(props) => (props.isselected ? "#00a8cc" : "#e0e0e0")};
  }
`;
