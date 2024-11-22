import styled from "styled-components";

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Buttons = styled.div`
  display: flex;
  align-items: center;
  gap: 7px;
  margin: 0px auto;
`;
export const Button1 = styled.button`
  width: 334px;
  height: 50px;
  border: 1px solid #00a8cc;
  border-radius: 7px;
  color: #00a8cc;
  &:hover {
    background-color: #00a8cc;
    color: white;
  }
`;
export const Button2 = styled.button`
  width: 334px;
  height: 50px;
  border: 1px solid #00a8cc;
  border-radius: 7px;
  color: #00a8cc;
  &:hover {
    background-color: #00a8cc;
    color: white;
  }
`;
export const Up = styled.button`
  width: 675px;
  height: 50px;
  border-radius: 7px;
  color: white;
  background-color: #e8e8e8;

  margin: 5px auto 130px;

  &:hover {
    background-color: #d9d9d9;
  }
`;
