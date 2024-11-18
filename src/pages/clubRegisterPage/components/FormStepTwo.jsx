import { useState, useEffect } from "react";
import { Button } from "../ClubRegisterPage.styled";

const FormStepTwo = ({ changeStep, formData, setFormData }) => {
  useEffect(() => {}, [formData]);

  return (
    <div>
      <Button onClick={() => changeStep("1")}>이전 페이지</Button>
    </div>
  );
};

export default FormStepTwo;
