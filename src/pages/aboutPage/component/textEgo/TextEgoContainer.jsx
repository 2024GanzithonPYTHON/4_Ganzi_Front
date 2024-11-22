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
  Text4,
} from "./TextEgoContainer.styled";
import Ego from "./img/Ego.svg";
import aboutLogo from "./img/aboutLogo.svg";
export const TextEgoContainer = () => {
  return (
    <Container>
      <Img>
        <img src={Ego} alt="Ego" />
      </Img>
      <TextWrap>
        <Title>
          <img src={aboutLogo} alt="logo" />
          <div>side + Ego</div>
        </Title>
        <Text0>sidEgo는 단순히 "스펙을 쌓기 위한 프로젝트"가 아닙니다.</Text0>
        <Text1>
          <div>Ego(자아)</div>는 당신의 내면 깊은 곳에서부터 꿈꿔온
          <div>진정한 자신</div>을 의미합니다.
        </Text1>
        <Text2>
          sidEgo는 그동안 공허하게 해왔던 사이드 프로젝트 문화에서 벗어나,
        </Text2>
        <Text3>
          <div>"내가 좋아하는 것, 내 자아를 실현하는 사이드 프로젝트"</div>로의
          전환을 제안합니다.
        </Text3>
        <Text4>
          <div>진짜 내가 원하는 것을 발견하고, 그것을 세상에 펼쳐보세요.</div>
          <div>sidEgo는 당신의 꿈을 실현할 수 있는 첫 걸음이 될 것입니다.</div>
        </Text4>
      </TextWrap>
    </Container>
  );
};
