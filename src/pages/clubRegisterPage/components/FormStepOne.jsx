import { useState, useEffect } from "react";
import ClubCategory from "./ClubCategory";
import ClubTitle from "./ClubTitle";

const FormStepOne = ({ changeStep, formData, setFormData }) => {
  const [category, setCategory] = useState(formData.category);
  const [shortTitle, setShortTitle] = useState(formData.shortTitle);
  const [longTitle, setLongTitle] = useState(formData.longTitle);

  useEffect(() => {
    setCategory(formData.category);
    setShortTitle(formData.shortTitle);
    setLongTitle(formData.longTitle);
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
    </div>
  );
};

export default FormStepOne;
