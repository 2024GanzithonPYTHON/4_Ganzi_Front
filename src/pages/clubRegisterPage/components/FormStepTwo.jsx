import { useState, useEffect } from "react";
import { Button } from "../ClubRegisterPage.styled";
import ClubThumbnail from "./ClubThumbnail";
import ClubContent from "./ClubContent";

const FormStepTwo = ({ changeStep, formData, setFormData }) => {
  const [thumbnail, setThumbnail] = useState(formData.thumbnail);
  const [content, setContent] = useState(formData.content);

  useEffect(() => {
    setThumbnail(formData.thumbnail);
    setContent(formData.content);
  }, [formData]);

  const onThumbnailChange = (selectedThumbnail) => {
    setThumbnail(selectedThumbnail);
    setFormData((prevData) => ({
      ...prevData,
      thumbnail: selectedThumbnail,
    }));
  };

  const onContentChange = (newContent) => {
    if (JSON.stringify(newContent) !== JSON.stringify(content)) {
      setContent(newContent);
      setFormData((prevData) => ({
        ...prevData,
        content: newContent,
      }));
    }
  };

  return (
    <div>
      <ClubThumbnail
        onChange={onThumbnailChange}
        initialThumbnail={thumbnail}
      />
      <ClubContent onChange={onContentChange} initialContent={content} />
      <Button onClick={() => changeStep("1")}>이전 페이지</Button>
    </div>
  );
};

export default FormStepTwo;
