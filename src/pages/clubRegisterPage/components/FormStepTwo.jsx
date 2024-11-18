import { useState, useEffect } from "react";
import { Button } from "../ClubRegisterPage.styled";
import ClubThumbnail from "./ClubThumbnail";

const FormStepTwo = ({ changeStep, formData, setFormData }) => {
  const [thumbnail, setThumbnail] = useState(formData.thumbnail);

  useEffect(() => {
    setThumbnail(formData.thumbnail);
  }, [formData]);

  const onThumbnailChange = (selectedThumbnail) => {
    setThumbnail(selectedThumbnail);
    setFormData((prevData) => ({
      ...prevData,
      thumbnail: selectedThumbnail,
    }));
  };

  return (
    <div>
      <ClubThumbnail
        onChange={onThumbnailChange}
        initialThumbnail={thumbnail}
      />
      <Button onClick={() => changeStep("1")}>이전 페이지</Button>
    </div>
  );
};

export default FormStepTwo;
