import React from "react";
import {
  CashInfoContainer,
  InfoContainer,
  WalletIcon,
  TextWrapper,
  Title,
  Cash,
  ChargeButton,
  RefreshButtonContainer,
  RefreshIcon,
} from "./WalletInfo.styled";

const WalletInfo = ({ currentCash, onChargeClick }) => {
  const handleRefresh = () => {
    alert("갱신중입니다"); // 새로고침 알림
  };

  return (
    <CashInfoContainer>
      <InfoContainer>
        <WalletIcon />
        <TextWrapper>
          <Title>내 보유 캐시</Title>
          <Cash>{currentCash.toLocaleString()} P</Cash>
        </TextWrapper>
      </InfoContainer>
      <RefreshButtonContainer>
        <RefreshIcon onClick={handleRefresh} />
        <ChargeButton onClick={onChargeClick}>충전하기</ChargeButton>
      </RefreshButtonContainer>
    </CashInfoContainer>
  );
};

export default WalletInfo;