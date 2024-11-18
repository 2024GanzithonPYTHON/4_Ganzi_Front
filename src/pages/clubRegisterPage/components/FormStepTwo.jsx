import { useState, useEffect } from "react";
import { Button } from "../ClubRegisterPage.styled";
import ClubThumbnail from "./ClubThumbnail";
import ClubContent from "./ClubContent";
import ClubCriteria from "./ClubCriteria";

const FormStepTwo = ({ changeStep, formData, setFormData }) => {
  const [thumbnail, setThumbnail] = useState(formData.thumbnail);
  const [content, setContent] = useState(formData.content);
  const [criteria, setCriteria] = useState(formData.criteria);

  useEffect(() => {
    setThumbnail(formData.thumbnail);
    setContent(formData.content);
    setCriteria(formData.criteria);
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

  const onCriteriaChange = (newCriteria) => {
    setCriteria(newCriteria);
    setFormData((prevData) => ({
      ...prevData,
      criteria: newCriteria,
    }));
  };

  return (
    <div>
      <ClubThumbnail
        onChange={onThumbnailChange}
        initialThumbnail={thumbnail}
      />
      <ClubContent onChange={onContentChange} initialContent={content} />
      <ClubCriteria onChange={onCriteriaChange} initialCriteria={criteria} />
      <Button onClick={() => changeStep("1")}>이전 페이지</Button>
    </div>
  );
};

export default FormStepTwo;
