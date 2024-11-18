import { useState } from "react";
import { useNavigate } from "react-router-dom";
import StepMarker from "./components/StepMarker";
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
      <StepMarker currentStep={step} changeStep={setStep} />
    </PageContainer>
  );
};

export default ClubRegisterPage;
