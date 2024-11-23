import styled from "styled-components";

export const TabContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const TabMenu = styled.ul`
  color: #767676;
  width: 100%;
  font-weight: bold;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  list-style: none;
  margin-top: 10px;

  li {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 10px;
    font-size: 18px;
    transition: 0.3s;
    cursor: pointer;
    border-bottom: 1px solid #B2B2B2;
  }

  div {
    width: 42px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 15px;
    background-color: #D9D9D9;
    color: #fff;
    margin-left: 10px;
  }

  .focused {
   //선택된 Tabmenu 에만 적용되는 CSS를 구현
    background-color: rgb(255,255,255);
    color: rgb(21,20,20);
    border-bottom: 3px solid #303030;
  }

  .focused-div {
    background-color: #EE5648;
  }

  & div.desc {
    text-align: center;
  }
`;

export const TabContList = styled.div`
  margin: 25px 0;
`

export const TabCont = styled.div`
  width: 100%;
  height: 42px;
  justify-content: space-between;
  margin-bottom: 32px;
`
export const TabContBox = styled.div`
  display: flex;
  cursor: pointer;

  .margin {
    margin-right: 10px;
  }
`

export const StateBox = styled.div`
  padding: 3px 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.bgColor === "승인"
  ? "#00C400"
  : props.bgColor === "반려"
  ? "#EE5648"
  : "#757575"};
  color: #fff;
  font-size: 12px;
  font-weight: 700;
  border-radius: 5px;
  margin: 0 10px;
`

export const DateComponent = styled.span`
  font-size: 14px;
  margin: 0;
  color: #ACB2B5;
`

export const LinkContainer = styled.div`
  cursor: pointer;
  font-size: 18px;
  display: flex;
  align-items: center;
  img {
    margin-right: 12px;
  }
`

export const PeopleBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;

  img {
    width: 14px;
    height: 14px;
    margin-right: 5px;
  }

  span {
    font-size: 14px;
    font-weight: 560;
  }
`