import React from "react";
import { PageContainer, Btns } from "./Login.styled";
import { KakaoButton } from "./components/buttons/KakaoButton";
import { BackButton } from "./components/buttons/BackButton";
import { IntroducePage } from "./components/introduce/IntroducePage";
const Login = () => {
  return (
    <PageContainer>
      <IntroducePage />
      <Btns>
        <KakaoButton />
        <BackButton />
      </Btns>
    </PageContainer>
  );
};

export default Login;
