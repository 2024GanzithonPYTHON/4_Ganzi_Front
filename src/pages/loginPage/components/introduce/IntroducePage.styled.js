import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 134px auto 200px auto;
  align-items: center;

  .BoldText {
    font-size: 24px;
    font-weight: bold;
    margin-top: 45px;
    margin-bottom: 45px;
  }
  img {
    width: 275px;
  }
`;

export const Text1 = styled.div`
  font-size: 15px;
  margin-bottom: 5px;
  display: flex;
  align-items: center;

  .bold1 {
    font-weight: bold;
  }

  .bold2 {
    font-weight: bold;
    color: #00a8cc;
  }
`;
export const Text2 = styled.div`
  font-size: 15px;
`;
