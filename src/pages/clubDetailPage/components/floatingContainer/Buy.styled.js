import styled from "styled-components";

export const PageContainers = styled.div`
  display: flex;
  flex-direction: column;

  border: 1px solid #d9d9d9;
  border-radius: 10px;
  padding-top: 30px;
  padding-bottom: 30px;
  padding-left: 45px;
  padding-right: 45px;
`;
export const Point = styled.div`
  display: flex;
  align-items: center;
  font-size: 30px;
  font-family: medium;
  gap: 5px;
  margin-bottom: 24px;
`;
export const ShortTitle = styled.div`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 13px;
`;
export const ShortIntro = styled.div`
  font-size: 20px;
  margin-bottom: 50px;
`;
export const BuyBtn = styled.button`
  width: 359px;
  height: 52px;
  background-color: #00a8cc;
  border: none;
  border-radius: 5px;

  color: white;
  font-size: 20px;
  &:hover {
    background-color: #0094b8;
  }
`;
