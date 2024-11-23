import styled from "styled-components";
export const Container = styled.div`
 position: relative;

  img {
    height: 375px;
    width: 100%;
    object-fit: cover;
    background-repeat: no-repeat;
    }
  }
`;

export const Title1 = styled.div`
  position: absolute;
  top: 127px;
  left: 10%;

  font-size: 24px;
  color: white;
`;
export const Title2 = styled.div`
  position: absolute;
  top: 162px;
  left: 10%;
  display: flex;
  gap: 10px;

  font-size: 40px;
  font-weight: bold;
  color: white;

  div {
    color: #00a8cc;
  }
`;
export const Text1 = styled.div`
  position: absolute;
  top: 237px;
  left: 10%;

  font-size: 15px;
  color: white;

  display: flex;
`;
export const Text2 = styled.div`
  position: absolute;
  top: 255px;
  left: 10%;

  font-size: 15px;
  color: white;

  display: flex;
  gap: 5px;
  div {
    font-weight: bold;
  }
`;
