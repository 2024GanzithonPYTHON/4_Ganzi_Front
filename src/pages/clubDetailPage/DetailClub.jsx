import React from "react";
import { useNavigate } from "react-router-dom";
import { FloatingContainer } from "./components/floatingContainer/FloatingContainer";
import { Content } from "./components/contentContainer/Content";
import {
  PageContainer,
  Title,
  TitleText,
  Wrap,
  Left,
  ClubImg,
  ClubTitle,
} from "./DetailClub.styled";
import backBtn from "./img/back.svg";
import sampleImg from "./img/sampleImg.svg";

const DetailClub = () => {
  /* 뒤로가기 */
  const navigate = useNavigate();
  const onClickBackBtn = () => {
    navigate(-1);
  };

  return (
    <PageContainer>
      <Title>
        <button>
          <img src={backBtn} alt="backBtn" onClick={onClickBackBtn} />
        </button>
        <TitleText>상세페이지</TitleText>
      </Title>
      <Wrap>
        <Left>
          <ClubTitle>달력 제작부터 펀딩까지 A to Z 로드맵</ClubTitle>
          <ClubImg>
            <img src={sampleImg} alt="sampleImg" />
          </ClubImg>
          <Content />
        </Left>
        <FloatingContainer />
      </Wrap>
    </PageContainer>
  );
};

export default DetailClub;
