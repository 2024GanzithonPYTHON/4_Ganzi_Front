import { useState, useEffect } from "react";
import ClubCategory from "./ClubCategory";
import ClubTitle from "./ClubTitle";
import ClubCount from "./ClubCount";
import ClubDeadLine from "./ClubDeadline";
import {
  FormListContainer,
  ListDescriptionContainer,
  ButtonContainer,
  Button,
} from "../ClubRegisterPage.styled";

const FormStepOne = ({ changeStep, formData, setFormData }) => {
  const [category, setCategory] = useState(formData.category);
  const [shortTitle, setShortTitle] = useState(formData.titleShort);
  const [longTitle, setLongTitle] = useState(formData.title);
  const [memberCount, setMemberCount] = useState(formData.memberCountMax);
  const [deadline, setDeadline] = useState(formData.dateEnd);

  useEffect(() => {
    setCategory(formData.category);
    setShortTitle(formData.titleShort);
    setLongTitle(formData.title);
    setMemberCount(formData.memberCountMax);
    setDeadline(formData.dateEnd);
  }, [formData]);

  const handleCategoryChange = (selectedCategories) => {
    setCategory(selectedCategories);
    setFormData((prevData) => ({
      ...prevData,
      category: selectedCategories,
    }));
  };

  const handleTitleChange = (inputShortTitle, inputLongTitle) => {
    setShortTitle(inputShortTitle);
    setLongTitle(inputLongTitle);
    setFormData((prevData) => ({
      ...prevData,
      titleShort: inputShortTitle,
      title: inputLongTitle,
    }));
  };

  const handleMemberCountChange = (inputNumber) => {
    setMemberCount(inputNumber);
    setFormData((prevData) => ({
      ...prevData,
      memberCountMax: inputNumber,
    }));
  };

  const handleDeadline = (selectedDeadline) => {
    setDeadline(selectedDeadline);
    setFormData((prevData) => ({
      ...prevData,
      dateEnd: selectedDeadline,
    }));
  };

  return (
    <div>
      <ClubCategory
        onChange={handleCategoryChange}
        initialCategory={category}
      />
      <ClubTitle
        onChange={handleTitleChange}
        initialShortTitle={shortTitle}
        initialLongTitle={longTitle}
      />
      <ClubCount
        onChange={handleMemberCountChange}
        initialMemberCount={memberCount}
      />
      <ClubDeadLine onChange={handleDeadline} initialDeadline={deadline} />
      <FormListContainer>
        <ListDescriptionContainer />
        <ButtonContainer>
          <Button
            onClick={() => {
              changeStep("2");
            }}
          >
            다음 페이지
          </Button>
        </ButtonContainer>
      </FormListContainer>
    </div>
  );
};

export default FormStepOne;
