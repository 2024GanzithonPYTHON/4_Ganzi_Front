import React from "react";
import {
  Container,
  Title1,
  Title2,
  Text1,
  Text2,
} from "./AboutHeaderContainer.styled";
import backgroundImg from "./img/aboutBackground.svg";
export const AboutHeaderContainer = () => {
  return (
    <Container>
      <img src={backgroundImg} alt="aboutHeader" />

      <Title1>“해야 하는” “해야 했던”이 아닌,</Title1>
      <Title2>
        진정으로
        <div>“하고 싶었던“</div>
        사이드 프로젝트
      </Title2>
      <Text1>
        공허한 스펙 쌓기, 해야 할 것 같아서 해왔던 사이드 프로젝트만 해오시지
        않으셨나요?
      </Text1>
      <Text2>
        sidEGo에서는 진정으로 <div>“내가 하고 싶어서 하는”</div> 사이드
        프로젝트를 만날 수 있습니다.
      </Text2>
    </Container>
  );
};
