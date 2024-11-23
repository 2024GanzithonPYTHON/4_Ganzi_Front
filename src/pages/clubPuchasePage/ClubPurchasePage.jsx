import React from "react";
import Payment from "../../components/Payment/Payment";
import {
  Container,
  LeftSection,
  RightSection,
  ProjectInfo,
  Title,
  Subtitle,
  Description,
  RelatedInfo,
  RelatedItem,
} from "./ClubPurchasePage.styled";

export default function ClubPurchasePage() {
  return (
    <Container>
      {/* 좌측 지원서 작성하기 */}
      <LeftSection>
        <Title>지원서 작성하기</Title>
        <ProjectInfo>
          <img
            src="https://png.pngtree.com/thumb_back/fh260/background/20230613/pngtree-small-white-rabbit-in-the-grass-image_2915502.jpg"
            alt="프로젝트 썸네일"
            style={{ width: "100%", borderRadius: "8px", marginBottom: "16px" }}
          />
          <Subtitle>프로젝트 명</Subtitle>
          <Description>
            같이 캘린더 만들래? 제작부터 펀딩까지 팀원 모집
          </Description>
          <Subtitle>모집기간</Subtitle>
          <Description>2024년 1월 - 2024년 12월</Description>
          <Subtitle>지원자격</Subtitle>
          <Description>대학교 재학생, 졸업생 누구나</Description>
        </ProjectInfo>
        <Subtitle>지원 동기</Subtitle>
        <textarea
          placeholder="지원 동기를 작성해주세요."
          style={{
            width: "100%",
            height: "120px",
            padding: "12px",
            borderRadius: "8px",
            border: "1px solid #ccc",
            marginBottom: "16px",
          }}
        />
        <Subtitle>관련 경력</Subtitle>
        <textarea
          placeholder="관련 경력을 작성해주세요."
          style={{
            width: "100%",
            height: "120px",
            padding: "12px",
            borderRadius: "8px",
            border: "1px solid #ccc",
            marginBottom: "16px",
          }}
        />
      </LeftSection>

      {/* 우측 결제하기 */}
      <RightSection>
        <Payment to="/club/apply/done" />
      </RightSection>
    </Container>
  );
}
