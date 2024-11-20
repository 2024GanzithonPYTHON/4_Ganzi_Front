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
  TextArea,
} from "../ClubRegisterPage.styled";

const ClubCriteria = ({ onChange, initialCriteria }) => {
  const [criteria, setCriteria] = useState(initialCriteria);

  useEffect(() => {
    setCriteria(initialCriteria);
  }, [initialCriteria]);

  const handleCriteriaChange = (e) => {
    const newCriteria = e.target.value;
    setCriteria(newCriteria);
    onChange(newCriteria);
  };

  return (
    <FormListContainer>
      <ListDescriptionContainer>
        <ListTextContainer>
          <ListTitle>
            지원 자격<RequiredMarker> ⁎</RequiredMarker>
          </ListTitle>
          <ListDescription>
            우리는 이런 팀원이 필요해요!
            <br />
            프로젝트를 함께 하고싶은 팀원의 지원 자격을 작성해주세요.
          </ListDescription>
        </ListTextContainer>
      </ListDescriptionContainer>
      <InputContainer>
        <InputContentContainer>
          <TextArea
            height="150px"
            value={criteria}
            onChange={handleCriteriaChange}
            placeholder="프로젝트를 함께하고 싶은 팀원의 지원 자격에 대해 작성해주세요."
          />
        </InputContentContainer>
      </InputContainer>
    </FormListContainer>
  );
};

export default ClubCriteria;
