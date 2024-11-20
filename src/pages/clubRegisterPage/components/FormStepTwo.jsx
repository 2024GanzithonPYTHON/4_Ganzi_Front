import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ClubThumbnail from "./ClubThumbnail";
import ClubContent from "./ClubContent";
import ClubCriteria from "./ClubCriteria";
import SubmitModal from "./SubmitModal";
import {
  FormListContainer,
  ListDescriptionContainer,
  ButtonContainer,
  Button,
} from "../ClubRegisterPage.styled";

const FormStepTwo = ({ changeStep, formData, setFormData }) => {
  const [thumbnail, setThumbnail] = useState(formData.thumbnail);
  const [content, setContent] = useState(formData.content);
  const [criteria, setCriteria] = useState(formData.criteria);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

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

  const handleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleSubmit = () => {
    console.log("입력 폼 데이터:", formData);
    navigate("/club/register/done");
  };

  const isComplete = () => {
    return Object.entries(formData).every(([key, value]) => {
      if (key === "content") {
        return Object.values(value).every((list) => list);
      }
      return value;
    });
  };

  return (
    <div>
      <ClubThumbnail
        onChange={onThumbnailChange}
        initialThumbnail={thumbnail}
      />
      <ClubContent onChange={onContentChange} initialContent={content} />
      <ClubCriteria onChange={onCriteriaChange} initialCriteria={criteria} />
      <FormListContainer>
        <ListDescriptionContainer>
          <ButtonContainer className="before">
            <Button onClick={() => changeStep("1")}>이전 페이지</Button>
          </ButtonContainer>
        </ListDescriptionContainer>
        <ButtonContainer>
          <Button
            className="submit-button"
            onClick={handleModal}
            disabled={!isComplete()}
          >
            제출하기
          </Button>
        </ButtonContainer>
      </FormListContainer>

      {isModalOpen && (
        <SubmitModal onClose={handleModal} onSubmit={handleSubmit} />
      )}
    </div>
  );
};

export default FormStepTwo;
