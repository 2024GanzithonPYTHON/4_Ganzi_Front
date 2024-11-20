import styled from "styled-components";

export const PageContainer = styled.div`
  width: "100%";
  height: "auto";
`;

export const PageTitleContainer = styled.div`
  padding: 30px 40px;
  display: inline-flex;
  align-items: center;
  gap: 10px;
`;

export const BackButton = styled.img`
  cursor: pointer;
`;

export const PageTitle = styled.h1`
  font-size: 30px;
  font-weight: 600;
`;

export const FormListContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  margin-top: 80px;
  position: relative;
`;

export const ListDescriptionContainer = styled.div`
  width: 50%;
  position: relative;
  display: flex;
  justify-content: center;
`;

export const ListTextContainer = styled.div`
  width: 380px;
  display: flex;

  flex-direction: column;
  gap: 20px;
`;

export const ListTitle = styled.h3`
  font-weight: 600;
`;

export const RequiredMarker = styled.span`
  font-size: 20px;
  font-weight: 600;
  color: red;
`;

export const ListDescription = styled.p`
  font-size: 15px;
`;

export const Button = styled.button`
  width: 285px;
  height: 54px;
  border: 1px solid #00a8cc;
  color: #00a8cc;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  border-radius: 5px;
  margin-bottom: 50px;

  &:hover {
    background-color: #f0f0f0;
  }

  &.submit-button {
    background-color: ${(props) => (props.disabled ? "white" : "#00a8cc")};
    color: ${(props) => (props.disabled ? "#00a8cc" : "white")};
    &:hover {
      background-color: ${(props) => (props.disabled ? "white" : "#0094b8")};
    }
  }
`;

export const ButtonContainer = styled.div`
  width: 700px;
  display: flex;
  justify-content: end;
  &.before {
    width: 380px;
    justify-content: start;
  }
`;

export const InputContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
`;

export const InputContentContainer = styled.div`
  width: 700px;
  display: flex;
  justify-content: end;
`;

export const TextArea = styled.textarea`
  width: 558px;
  height: ${(props) => props.height};
  padding: 10px;
  border: 1px solid #b3b3b3;
  border-radius: 5px;

  font-size: 15px;
  font-family: Arial;
  resize: none;
  outline: none;
`;
