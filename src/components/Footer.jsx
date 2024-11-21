import React from "react";
import styled from "styled-components";

const FooterContainer = styled.header`
  display: flex;
  flex-direction: column;
  padding: 30px 50px;
  gap: 20px;

  width: 100%;
  height: auto;

  background-color: #333;
  color: white;
`;

const ServiceName = styled.h1`
  font-size: 40px;
  font-weight: bold;
`;

const ServiceInfo = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;

  &.help-message {
    padding: 20px;
    border: 1px solid white;
    border-radius: 10px;
  }
`;

const HelpContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
`;

const InfoTitle = styled.p`
  font-size: 20px;
  font-weight: bold;
`;

const InfoText = styled.p`
  font-size: 16px;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <ServiceName>sidEGo</ServiceName>
      <ServiceInfo>
        <InfoTitle>파4삭팀</InfoTitle>
        <InfoText>이수혁, 하성언, 심창민, 이지은, 노지혜, 한채리</InfoText>
      </ServiceInfo>
      <HelpContainer>
        <ServiceInfo>
          <InfoTitle>고객센터</InfoTitle>
          <InfoText>leestana01@naver.com</InfoText>
          <InfoText>(주말, 공휴일 휴무)</InfoText>
        </ServiceInfo>
        <ServiceInfo className="help-message">
          <p>sidEGo는 서비스 중계 플랫폼 입니다.</p>
          <p>프로젝트나 기타 세부문의는 해당 담당자에게 문의 바랍니다.</p>
        </ServiceInfo>
      </HelpContainer>
    </FooterContainer>
  );
};

export default Footer;
