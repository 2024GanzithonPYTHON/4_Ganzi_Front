import React, { useState } from "react";
import { Button, Container, InfoText, SmallText } from "./ChargeActions.styled";

const ChargeActions = ({ chargeOption, selectedAmount }) => {
  const [isAccountVisible, setIsAccountVisible] = useState(false);

  const handleButtonClick = (type) => {
    alert(`클릭한 버튼: ${type}, 충전 금액: ${selectedAmount}원`);
    if (type === "가상계좌 발급") {
      setIsAccountVisible(true);
    }
  };

  return (
    <Container>
      {chargeOption === "BANK_TRANSFER" && (
        <>
          <Button onClick={() => handleButtonClick("가상계좌 발급")}>
            가상계좌 발급
          </Button>
          {isAccountVisible && (
            <InfoText>
              무통장 입금 계좌: 카카오뱅크 3333-123456***
            </InfoText>
          )}
          <SmallText>
            가상계좌는 24시간 이내에 입금해야만 충전됩니다.
          </SmallText>
        </>
      )}
      {chargeOption === "LINKED_ACCOUNT" && (
        <>
          <InfoText>현재 연동된 계좌: 카카오뱅크 3333-543210***</InfoText>
          <Button onClick={() => handleButtonClick("충전하기")}>
            충전하기
          </Button>
          <SmallText>
            연동된 계좌를 통해 즉시 충전이 가능합니다.
          </SmallText>
        </>
      )}
      {chargeOption === "KAKAOPAY" && (
        <>
          <Button onClick={() => handleButtonClick("카카오페이로 결제하기")}>
            카카오페이로 결제하기
          </Button>
          <SmallText>
            카카오페이 결제는 안전하고 빠르게 처리됩니다.
          </SmallText>
        </>
      )}
    </Container>
  );
};

export default ChargeActions;