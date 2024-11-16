import styled from "styled-components";

export const TabMenu = styled.ul`
  background-color: #dcdcdc;
  color: rgb(232, 234, 237);
  font-weight: bold;
  display: flex;
  flex-direction: row;
  align-items: center;
  list-style: none;
  margin-bottom: 7rem;
  margin-top: 10px;

  li {
    display: flex;
    width: 100px;
    padding: 10px;
    font-size: 15px;
    transition: 0.3s;
    border-radius: 10px 10px 0px 0px;
    cursor: pointer;
  }

  .focused {
   //선택된 Tabmenu 에만 적용되는 CSS를 구현
    background-color: rgb(255,255,255);
    color: rgb(21,20,20);
  }

  & div.desc {
    text-align: center;
  }
`;