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
import UploadIcon from "../assets/Upload.png";

const UploadFileTag = styled.input`
  display: none;
`;

const UploadBox = styled.label`
  width: 500px;
  height: 300px;
  border: 1px solid #b3b3b3;

  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  position: relative;
  cursor: pointer;
  border-radius: 5px;
`;

const ThumbnailPreview = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  position: absolute;
  top: 0;
  left: 0;
`;

const UploadMessage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  gap: 10px;
`;

const ClubThumbnail = ({ onChange, initialThumbnail }) => {
  const [thumbnail, setThumbnail] = useState(initialThumbnail);
  const [previewUrl, setPreviewUrl] = useState("");

  useEffect(() => {
    if (initialThumbnail && initialThumbnail instanceof File) {
      const objectUrl = URL.createObjectURL(initialThumbnail);
      setPreviewUrl(objectUrl);

      return () => URL.revokeObjectURL(objectUrl);
    }
  }, [initialThumbnail]);

  const handleThumbnailChange = (e) => {
    const newFile = e.target.files[0];
    if (newFile && newFile instanceof File) {
      setThumbnail(newFile);
      const objectUrl = URL.createObjectURL(newFile);
      setPreviewUrl(objectUrl);
      onChange(newFile);
      return () => URL.revokeObjectURL(objectUrl);
    }
  };

  return (
    <FormListContainer>
      <ListDescriptionContainer>
        <ListTextContainer>
          <ListTitle>
            섬네일 사진 등록<RequiredMarker> ⁎</RequiredMarker>
          </ListTitle>
          <ListDescription>
            진행하고 싶은 프로젝트를 소개할 수 있는 섬네일 사진을
            <br />
            등록해주세요.
          </ListDescription>
        </ListTextContainer>
      </ListDescriptionContainer>

      <InputContainer>
        <InputContentContainer>
          <UploadFileTag
            id="fileInput"
            type="file"
            accept="image/*"
            onChange={handleThumbnailChange}
          />
          <UploadBox htmlFor="fileInput">
            {previewUrl ? (
              <ThumbnailPreview src={previewUrl} alt="이미지 미리보기" />
            ) : (
              <UploadMessage>
                <img
                  src={UploadIcon}
                  alt="업로드 아이콘"
                  width="15px"
                  height="15px"
                />
                <p>이미지 업로드</p>
              </UploadMessage>
            )}
          </UploadBox>
        </InputContentContainer>
      </InputContainer>
    </FormListContainer>
  );
};

export default ClubThumbnail;
