import styled from "styled-components";
export const PageContainer = styled.div`
  display: grid;
  place-items: center;

  width: 100vw;
  height: 100vh;
`;
export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .checkImg {
    width: 57px;
    height: 57px;
    margin-bottom: 30px;
  }
`;
export const Text1 = styled.div`
  font-size: 30px;
  font-weight: bold;
  padding-bottom: 60px;
`;
export const Text2 = styled.div`
  padding-bottom: 20px;
`;
export const Buttons = styled.div`
  display: flex;
  gap: 20px;
`;
export const GoMypage = styled.button`
  width: 268px;
  height: 58px;

  background-color: #00a8cc;
  border-radius: 10px;
  border: none;
  color: white;
  font-size: 20px;
  &:hover {
    background-color: #0094b8;
  }
`;
export const GoBack = styled.button`
  width: 268px;
  height: 58px;

  border-radius: 10px;
  border: 1px solid black;
  font-size: 20px;
  &:hover {
    background-color: #f0f0f0;
  }
`;
export const Download = styled.button`
  width: 556px;
  height: 58px;

  border-radius: 10px;
  border: 1px solid #00a8cc;
  font-size: 20px;
  color: #00a8cc;
  margin-top: 10px;

  &:hover {
    background-color: #e1edf1;
  }
`;
