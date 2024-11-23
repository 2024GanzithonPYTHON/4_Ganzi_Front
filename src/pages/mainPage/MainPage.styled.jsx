import styled from "styled-components";

export const Wrap = styled.div`
  padding: 50px 50px 100px 50px;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-size: 20px;

  b {
    font-weight: bold;
  }
`;

export const Comment = styled.h2`
  font-size: 28px;
  font-weight: bold;
  gap: 20px;
`;

export const PopularSection = styled.section`
  padding: 40px;
`;

export const SectionTitle = styled.h2`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

export const SectionSubtitle = styled.p`
  font-size: 20px;
  color: #757575;
  margin-bottom: 10px;
`;

export const MoreIcon = styled.span`
  cursor: pointer;
  font-size: 40px;
  text-align: center;
  line-height: 1;
`;
