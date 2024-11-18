import styled from "styled-components";

const StepContainer = styled.div`
  width: 100%;
  height: 80px;
  position: relative;
  display: flex;

  justify-content: space-around;
  align-items: center;
`;

const Step = styled.div`
  width: 50%;
  height: 100%;
  display: flex;

  justify-content: center;
  align-items: center;

  font-size: 20px;
  font-weight: bold;

  color: ${(props) => (props.$isActive ? "#00A2D3" : "#757575")};
  border-bottom: ${(props) =>
    props.$isActive ? "6px solid #00A2D3" : "6px solid #D9D9D9"};

  cursor: pointer;
`;

const StepMarker = ({ currentStep, changeStep }) => {
  return (
    <StepContainer>
      <Step $isActive={currentStep === "1"} onClick={() => changeStep("1")}>
        STEP.1
      </Step>
      <Step $isActive={currentStep === "2"} onClick={() => changeStep("2")}>
        STEP.2
      </Step>
    </StepContainer>
  );
};

export default StepMarker;
