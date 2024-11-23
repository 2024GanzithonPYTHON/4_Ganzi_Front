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

const InputType = styled.h3`
  padding: 10px 0;
  font-size: 15px;
  font-weight: 600;
`;

const ClubContent = ({ onChange, initialContent }) => {
  const [content, setContent] = useState(initialContent);

  useEffect(() => {
    if (JSON.stringify(content) !== JSON.stringify(initialContent)) {
      onChange(content);
    }
  }, [content, initialContent]);

  const handleInputChange = (field) => (e) => {
    const newValue = e.target.value;
    setContent((prev) => ({
      ...prev,
      [field]: newValue,
    }));
  };

  return (
    <FormListContainer>
      <ListDescriptionContainer>
        <ListTextContainer>
          <ListTitle>
            본문 작성<RequiredMarker> ⁎</RequiredMarker>
          </ListTitle>
          <ListDescription>
            진행하고 싶은 프로젝트를 함께할 팀원들에게 소개해주세요.
          </ListDescription>
        </ListTextContainer>
      </ListDescriptionContainer>
      <InputContainer>
        <InputContentContainer>
          <div>
            <InputType>소개</InputType>
            <TextArea
              height="139px"
              value={content.bodyTitle}
              onChange={handleInputChange("bodyTitle")}
              placeholder="프로젝트 소개를 작성해주세요."
            />

            <InputType>목표</InputType>
            <TextArea
              height="70px"
              value={content.bodyGoal}
              onChange={handleInputChange("bodyGoal")}
              placeholder="프로젝트의 최종 목표를 작성해주세요."
            />

            <InputType>계획</InputType>
            <TextArea
              height="217px"
              value={content.bodyPlan}
              onChange={handleInputChange("bodyPlan")}
              placeholder="프로젝트 진행 계획에 대해 최대한 상세하게 작성해주세요."
            />

            <InputType>진행 형태</InputType>
            <TextArea
              height="84px"
              value={content.bodyStyle}
              onChange={handleInputChange("bodyStyle")}
              placeholder={`프로젝트 진행 시 주로 활용할 진행 형태를 작성해주세요.\n(대면으로 진행 시, 주로 만날 지역/장소)`}
            />
          </div>
        </InputContentContainer>
      </InputContainer>
    </FormListContainer>
  );
};

export default ClubContent;
