import { useState, useEffect } from "react";
import styled from "styled-components";
import {
  FormListContainer,
  ListDescriptionContainer,
  ListTextContainer,
  ListTitle,
  RequiredMarker,
  ListDescription,
  InputContainer,
  InputContentContainer,
} from "../ClubRegisterPage.styled";

const InputField = styled.input`
  width: 136px;
  height: 41px;
  padding: 20px;
  border-radius: 5px;
  border: 1px solid #757575;
  outline: none;
`;

const ClubDeadLine = ({ onChange, initialDeadline }) => {
  const [deadline, setDeadline] = useState(initialDeadline || "");

  useEffect(() => {
    setDeadline(initialDeadline || "");
  }, [initialDeadline]);

  const handleDeadlineChange = (e) => {
    const selectedDeadline = e.target.value;
    setDeadline(selectedDeadline);
    onChange(selectedDeadline);
  };

  const today = new Date().toLocaleDateString("en-CA");

  return (
    <FormListContainer>
      <ListDescriptionContainer>
        <ListTextContainer>
          <ListTitle>
            모집 마감<RequiredMarker> ⁎</RequiredMarker>
          </ListTitle>
          <ListDescription>
            프로젝트를 함께할 팀원 모집을 마감할 날짜를 작성해주세요.
          </ListDescription>
        </ListTextContainer>
      </ListDescriptionContainer>
      <InputContainer>
        <InputContentContainer>
          <InputField
            type="date"
            value={deadline}
            onChange={handleDeadlineChange}
            min={today}
          />
        </InputContentContainer>
      </InputContainer>
    </FormListContainer>
  );
};

export default ClubDeadLine;
