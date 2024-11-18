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
  TextArea,
} from "../ClubRegisterPage.styled";

const InputType = styled.h3`
  padding-bottom: 10px;
  font-size: 15px;
  font-weight: 600;
`;

const ClubContent = ({ onChange, initialContent }) => {
  const [content, setContent] = useState(initialContent);

  useEffect(() => {
    setContent(initialContent);
  }, [initialContent]);

  const handleInputChange = (field) => (e) => {
    const newValue = e.target.value;
    setContent((prev) => {
      const newContent = {
        ...prev,
        [field]: newValue,
      };

      onChange(newContent);
      return newContent;
    });
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
        <div>
          <InputType>소개</InputType>
          <TextArea
            height="139px"
            value={content.introduce}
            onChange={handleInputChange("introduce")}
            placeholder="프로젝트 소개를 작성해주세요."
          />
        </div>
        <div>
          <InputType>목표</InputType>
          <TextArea
            height="70px"
            value={content.goal}
            onChange={handleInputChange("goal")}
            placeholder="프로젝트의 최종 목표를 작성해주세요."
          />
        </div>
        <div>
          <InputType>계획</InputType>
          <TextArea
            height="217px"
            value={content.plan}
            onChange={handleInputChange("plan")}
            placeholder="프로젝트 진행 계획에 대해 최대한 상세하게 작성해주세요."
          />
        </div>
        <div>
          <InputType>진행 형태</InputType>
          <TextArea
            height="84px"
            value={content.participationMode}
            onChange={handleInputChange("participationMode")}
            placeholder={`프로젝트 진행 시 주로 활용할 진행 형태를 작성해주세요.\n(대면으로 진행 시, 주로 만날 지역/장소)`}
          />
        </div>
      </InputContainer>
    </FormListContainer>
  );
};

export default ClubContent;
