import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 350px;
  min-width: 350px;
`;

export const CardImage = styled.img`
  width: 350px;
  height: 218px;
  object-fit: cover;
  cursor: pointer;
`;

export const CardTitle = styled.h3`
  font-size: 20px;
  font-weight: bold;
  padding-top: 10px;
`;

export const CardTitleText = styled.span`
  cursor: pointer;
`;
