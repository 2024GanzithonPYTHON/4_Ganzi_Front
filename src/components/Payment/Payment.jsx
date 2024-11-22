import React, { useState } from "react";
import styled from "styled-components";
import PaymentItem from "./PaymentItem";
import DiscountForm from "./DiscountForm";
import CashInfo from "./CashInfo/CashInfo";
import PaymentSummary from "./PaymentSummary";

const Payment = () => {
  // Mock 데이터
  const mockCoupons = [
    { id: 1, code: "DISCOUNT10", description: "10% 할인 쿠폰" },
    { id: 2, code: "FREEDELIVERY", description: "20% 할인 쿠폰" },
  ];
  const [selectedCoupon, setSelectedCoupon] = useState(null);
  const [currentCash, setCurrentCash] = useState(5000);

  const handleCouponSelect = (coupon) => setSelectedCoupon(coupon);

  return (
    <Container>
      <Header>결제하기</Header>
      <Card>
        <Section>
          <PaymentItem title="달력 제작부터 펀딩까지 A to Z 로드맵" price={10} />
        </Section>
        <Divider />
        <Section>
          <DiscountForm
            coupons={mockCoupons}
            selectedCoupon={selectedCoupon}
            onSelectCoupon={handleCouponSelect}
          />
        </Section>
        <Divider />
        <Section>
          <CashInfo 
            currentCash={currentCash} />
        </Section>
        <Section>
          <PaymentSummary itemPrice={10} discount={selectedCoupon ? 5 : 0} />
        </Section>
        <Button>구매하기</Button>
      </Card>
    </Container>
  );
};

export default Payment;

const Container = styled.div`
  max-width: 500px;
  margin: 0 auto;
  padding: 40px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Roboto", sans-serif;

  @media (min-width: 768px) {
    max-width: 600px;
  }
`;

const Header = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 20px;
  color: #333;
`;

const Card = styled.div`
  width: 100%;
  background-color: #ffffff;
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  padding: 20px;
`;

const Section = styled.div`
  margin-bottom: 20px;
`;

const Divider = styled.hr`
  border: none;
  border-top: 1px solid #e0e0e0;
  margin: 20px 0;
`;

const Button = styled.button`
  width: 100%;
  padding: 15px 0;
  font-size: 1.2rem;
  font-weight: 700;
  color: #ffffff;
  background-color: #00a8cc;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #007a99;
  }
`;