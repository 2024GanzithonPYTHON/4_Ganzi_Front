import styled from "styled-components";

export const Options = styled.div`
  display: flex;
  gap: 10px;
`;

export const OptionButton = styled.button`
  flex: 1;
  padding: 12px;
  font-size: 0.9rem;
  font-weight: bold;
  color: ${(props) => (props.active ? "#fff" : "#333")};
  background-color: ${(props) => (props.active ? "#00A8CC" : "#f0f0f0")};
  border-radius: 8px;
  border: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${(props) =>
      props.active ? "#007A99" : "rgba(0, 168, 204, 0.1)"};
  }

  svg {
    font-size: 1.5rem;
  }
`;
