import React from "react";
import { useNavigate } from "react-router-dom";
import { Container } from "./BackButton.styled";
export const BackButton = () => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  return (
    <Container onClick={goBack}>
      <div>돌아가기</div>
    </Container>
  );
};
