import { useState, useEffect } from "react";
import ClubCategory from "./ClubCategory";
import ClubTitle from "./ClubTitle";
import ClubCount from "./ClubCount";

const FormStepOne = ({ changeStep, formData, setFormData }) => {
  const [category, setCategory] = useState(formData.category);
  const [shortTitle, setShortTitle] = useState(formData.shortTitle);
  const [longTitle, setLongTitle] = useState(formData.longTitle);
  const [memberCount, setMemberCount] = useState(formData.memberCount);

  useEffect(() => {
    setCategory(formData.category);
    setShortTitle(formData.shortTitle);
    setLongTitle(formData.longTitle);
    setMemberCount(formData.memberCount);
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
      shortTitle: inputShortTitle,
      longTitle: inputLongTitle,
    }));
  };

  const handleMemberCountChange = (inputNumber) => {
    setMemberCount(inputNumber);
    setFormData((prevData) => ({
      ...prevData,
      memberCount: inputNumber,
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
    </div>
  );
};

export default FormStepOne;
