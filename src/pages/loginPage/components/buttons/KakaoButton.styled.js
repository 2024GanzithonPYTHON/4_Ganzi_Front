import styled from "styled-components";

export const Container = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 7px;
  .info {
    font-size: 10px;
  }
`;
export const Button = styled.button`
  padding: 18px 16px;
  border-radius: 7px;
  background-color: #fee500;

  display: flex;
  align-items: center;
  div {
    font-size: 16px;
    padding: 0px 80px;
  }
`;
