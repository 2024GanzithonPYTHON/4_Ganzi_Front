import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import {
  PageContainer,
  Buttons,
  Button1,
  Button2,
  Up,
} from "./AboutPage.styled";
import { AboutHeaderContainer } from "./component/aboutHeader/AboutHeaderContainer";
import { TextEgoContainer } from "./component/textEgo/TextEgoContainer";
import { TextGoContainer } from "./component/textGo/TextGoContainer";
import { Text1 } from "./component/text1container/Text1";
import { Text2 } from "./component/text2container/Text2";
import { Text3 } from "./component/text3container/Text3";
const AboutPage = () => {
  const navigate = useNavigate();
  const toClub = () => {
    navigate("/club");
  };
  const toPaper = () => {
    navigate("/paper");
  };

  const moveUp = useRef();
  const onMoveUp = () => {
    moveUp.current.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <PageContainer ref={moveUp}>
      <AboutHeaderContainer />
      <TextEgoContainer />
      <TextGoContainer />
      <Text1 />
      <Text2 />
      <Text3 />
      <Buttons>
        <Button1 onClick={toClub}>모집 찾기</Button1>
        <Button2 onClick={toPaper}>비법서 찾기</Button2>
      </Buttons>
      <Up onClick={onMoveUp}>올라가기</Up>
    </PageContainer>
  );
};

export default AboutPage;
