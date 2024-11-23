import styled from "styled-components";

export const ProjectCardContainer = styled.div`
  cursor: pointer;
`;

export const CardImage = styled.div`
  width: 100%; /* 부모 컨테이너의 너비에 맞게 */
  aspect-ratio: 16 / 9; /* 원하는 비율로 설정 (예: 16:9) */
  object-fit: cover;
  background-image: url(${(props) =>
    props.src ||
    "https://t1.daumcdn.net/friends/prod/editor/dc8b3d02-a15a-4afa-a88b-989cf2a50476.jpg"});
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
