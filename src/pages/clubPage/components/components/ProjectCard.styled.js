import styled from "styled-components";

export const ProjectCardContainer = styled.div`
  cursor: pointer;
  position: relative;
`;

export const CardImage = styled.div`
  width: 100%; /* 부모 컨테이너의 너비에 맞게 */
  aspect-ratio: 16 / 9; /* 원하는 비율로 설정 (예: 16:9) */
  object-fit: cover;
  background-image: url(${props => props.src});
  background-size: cover;
  background-position: center;
`;

export const CardTitle = styled.h4`
  font-size: 16px;
  font-weight: bold;
  margin: 10px 0;
`;

export const CardInfo = styled.p`
  font-size: 14px;
  color: #666;
  padding: 0 10px 10px;
`;

export const AdInfo = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  padding: 5px 10px;
  background-color: #F15946;
  border-radius: 5px;
  color: #fff;
  font-size: 12px;
  font-weight: bold;
`