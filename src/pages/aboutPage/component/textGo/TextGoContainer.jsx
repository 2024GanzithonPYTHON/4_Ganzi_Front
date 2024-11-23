import React from "react";
import {
  Container,
  Img,
  TextWrap,
  Title,
  Text0,
  Text1,
  Text2,
  Text3,
} from "./TextGoContainer.styled";
import Go from "./img/Go.svg";
import aboutLogo from "./img/aboutLogo.svg";
export const TextGoContainer = () => {
  return (
    <Container>
      <TextWrap>
        <Title>
          <div>side + Go</div>
          <img src={aboutLogo} alt="logo" />
        </Title>
        <Text0>"함께 가자! (Go Together)" "지금 시작하자! (Go Now)"</Text0>
        <Text1>
          새로운 도전을 두려워하지 않고, 열정을 행동으로 옮기라는 뜻이 담겨
          있습니다.
        </Text1>
        <Text2>sidEgo는 당신의 아이디어와 열정이 그저 멈춰 있지 않도록,</Text2>
        <Text3>도전의 동력을 제공하고, 함꼐 갈 동료를 연결합니다.</Text3>
      </TextWrap>
      <Img>
        <img src={Go} alt="Go" />
      </Img>
    </Container>
  );
};
