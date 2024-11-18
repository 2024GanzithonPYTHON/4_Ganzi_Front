import { useState, useEffect } from "react";
import ClubCategory from "./ClubCategory";

const FormStepOne = ({ changeStep, formData, setFormData }) => {
  const [category, setCategory] = useState(formData.category);

  useEffect(() => {
    setCategory(formData.category);
  }, [formData]);

  const handleCategoryChange = (selectedCategories) => {
    setCategory(selectedCategories);
    setFormData((prevData) => ({
      ...prevData,
      category: selectedCategories,
    }));
  };

  return (
    <div>
      <ClubCategory
        onChange={handleCategoryChange}
        initialCategory={category}
      />
    </div>
  );
};

export default FormStepOne;
