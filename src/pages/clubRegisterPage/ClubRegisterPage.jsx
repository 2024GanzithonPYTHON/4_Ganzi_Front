import { useState } from "react";
import { useNavigate } from "react-router-dom";
import StepMarker from "./components/StepMarker";
import FormStepOne from "./components/FormStepOne";
import FormStepTwo from "./components/FormStepTwo";

import {
  PageContainer,
  PageTitleContainer,
  BackButton,
  PageTitle,
} from "./ClubRegisterPage.styled";
import BackIcon from "./assets/arrow_back.png";

const ClubRegisterPage = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState("1");
  const [formData, setFormData] = useState({
    category: [],
    shortTitle: "",
    longTitle: "",
    memberCount: 0,
    deadline: "",
    thumbnail: null,
    content: {
      introduce: "",
      goal: "",
      plan: "",
      participationMode: "",
    },
    criteria: "",
  });

  return (
    <PageContainer>
      <PageTitleContainer>
        <BackButton
          src={BackIcon}
          onClick={() => navigate(-1)}
          alt="돌아가기 화살표 아이콘"
        />
        <PageTitle>프로젝트 만들기</PageTitle>
      </PageTitleContainer>
      <StepMarker currentStep={step} />
      {step === "1" && (
        <FormStepOne
          changeStep={setStep}
          formData={formData}
          setFormData={setFormData}
        />
      )}
      {step === "2" && (
        <FormStepTwo
          changeStep={setStep}
          formData={formData}
          setFormData={setFormData}
        />
      )}
    </PageContainer>
  );
};

export default ClubRegisterPage;
