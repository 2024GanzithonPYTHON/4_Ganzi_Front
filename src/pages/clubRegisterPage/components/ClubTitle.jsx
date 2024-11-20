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

import PreviewShort from "../assets/preview_short.png";
import PreviewLong from "../assets/preview_long.png";

const TitleBox = styled.div`
  width: 100%;
`;

const TitleType = styled.h1`
  font-size: 15px;
  font-weight: 600;
`;

const TitlePreviewBox = styled.div`
  width: 100%;
  height: 150px;
  padding: 0 50px;
  margin: 10px 0;
  border-radius: 5px;
  display: flex;

  justify-content: space-between;
  align-items: center;

  box-shadow: 2px 4px 5px 0px rgba(0, 0, 0, 0.3);
`;

const TitleDescription = styled.div`
  width: 150px;
  height: 50px;
  display: flex;

  align-items: center;

  font-size: 13px;
  font-weight: 700;
`;

const TitleInput = styled.input`
  width: 100%;
  height: 50px;
  padding: 0 20px;
  border-radius: 5px;
  border: 1px solid #757575;
  outline: none;
`;

const TitleLength = styled.p`
  margin-top: 10px;
  padding: 0 10px;
  display: flex;
  justify-content: end;
  font-size: 12px;
  color: #757575;
`;

const ClubTitle = ({ onChange, initialShortTitle, initialLongTitle }) => {
  const [shortTitle, setShortTitle] = useState(initialShortTitle || "");
  const [longTitle, setLongTitle] = useState(initialLongTitle || "");

  useEffect(() => {
    setShortTitle(initialShortTitle || "");
    setLongTitle(initialLongTitle || "");
  }, [initialShortTitle, initialLongTitle]);

  const handleShortTitleChange = (e) => {
    const newShortTitle = e.target.value;
    setShortTitle(newShortTitle);
    onChange(newShortTitle, longTitle);
  };

  const handleLongTitleChange = (e) => {
    const newLongTitle = e.target.value;
    setLongTitle(newLongTitle);
    onChange(shortTitle, newLongTitle);
  };

  return (
    <FormListContainer>
      <ListDescriptionContainer>
        <ListTextContainer>
          <ListTitle>
            프로젝트 제목<RequiredMarker> ⁎</RequiredMarker>
          </ListTitle>
          <ListDescription>
            프로젝트 주제, 활동의 목적이 명확하게 드러나는 멋진 제목을
            붙여주세요.
          </ListDescription>
        </ListTextContainer>
      </ListDescriptionContainer>
      <InputContainer>
        <InputContentContainer>
          <TitleBox>
            <TitleType>짧은 제목</TitleType>
            <TitlePreviewBox>
              <TitleDescription>
                짧은 제목은 <br />
                어디에 쓰이나요?
              </TitleDescription>
              <img src={PreviewShort} alt="짧은 제목 미리 보기" />
            </TitlePreviewBox>
            <TitleInput
              type="text"
              maxLength={12}
              value={shortTitle}
              onChange={handleShortTitleChange}
              placeholder="프로젝트의 짧은 제목을 입력해주세요."
            />
            <TitleLength>{shortTitle.length}/12</TitleLength>
            <TitleType>긴 제목</TitleType>
            <TitlePreviewBox>
              <TitleDescription>
                긴 제목은 <br />
                어디에 쓰이나요?
              </TitleDescription>
              <img src={PreviewLong} alt="긴 제목 미리 보기" />
            </TitlePreviewBox>
            <TitleInput
              type="text"
              maxLength={22}
              value={longTitle}
              onChange={handleLongTitleChange}
              placeholder="프로젝트의 긴 제목을 입력해주세요."
            />
            <TitleLength>{longTitle.length}/22</TitleLength>
          </TitleBox>
        </InputContentContainer>
      </InputContainer>
    </FormListContainer>
  );
};

export default ClubTitle;
