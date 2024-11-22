import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  gap: 20px;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`;

export const LeftSection = styled.div`
  flex: 1;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
`;

export const RightSection = styled.div`
  flex: 1.5;
  padding: 20px;
`;

export const ProjectInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 20px;
`;

export const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 20px;
`;

export const Subtitle = styled.h2`
  font-size: 1.1rem;
  font-weight: 600;
  margin-top: 16px;
  margin-bottom: 8px;
`;

export const Description = styled.p`
  font-size: 1rem;
  color: #555;
  margin-bottom: 8px;
`;

export const RelatedInfo = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

export const RelatedItem = styled.li`
  font-size: 1rem;
  color: #555;
  margin-bottom: 4px;
`;