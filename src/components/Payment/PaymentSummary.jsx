import React from "react";
import styled from "styled-components";

const PaymentSummary = ({ itemPrice, discount }) => {
  const finalPrice = itemPrice - discount;

  return (
    <Container>
      <Row>
        <Label>주문 상품</Label>
        <Value>{itemPrice} P</Value>
      </Row>
      <Row>
        <Label>할인 내역</Label>
        <Value>{discount} P</Value>
      </Row>
      <Row>
        <Label>최종 결제 금액</Label>
        <FinalValue>{finalPrice} P</FinalValue>
      </Row>
    </Container>
  );
};

export default PaymentSummary;

const Container = styled.div`
  border-top: 1px solid #ccc;
  padding-top: 10px;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
`;

const Label = styled.div`
  font-size: 0.9rem;
`;

const Value = styled.div`
  font-size: 0.9rem;
`;

const FinalValue = styled.div`
  font-size: 1rem;
  font-weight: bold;
  color: #00aaff;
`;