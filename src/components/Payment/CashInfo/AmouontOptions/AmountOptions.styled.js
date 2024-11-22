import styled from "styled-components";

export const AmountOptionsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 16px;
`;

export const AmountButton = styled.button`
  padding: 16px;
  font-size: 1rem;
  border-radius: 10px;
  border: 1px solid ${(props) => (props.active ? "#00A8CC" : "#e0e0e0")};
  background-color: ${(props) => (props.active ? "#f0fbfd" : "#fff")};
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: ${(props) =>
    props.active ? "0 4px 8px rgba(0, 168, 204, 0.2)" : "none"};

  &:hover {
    background-color: ${(props) =>
      props.active ? "#e0f7fa" : "rgba(0, 168, 204, 0.05)"};
  }
`;

export const Points = styled.div`
  font-size: 1.4rem;
  font-weight: bold;
  color: ${(props) => (props.active ? "#00A8CC" : "#333")};
`;

export const AmountText = styled.div`
  font-size: 0.9rem;
  color: #666;
  margin-top: 8px;
`;