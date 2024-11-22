import React from "react";
import styled from "styled-components";
import { FaTag } from "react-icons/fa";

const PaymentItem = ({ title, price }) => {
  return (
    <Card>
      <ItemInfo>
        <Icon />
        <TextContainer>
          <Title>{title}</Title>
          <Subtitle>상품 정보</Subtitle>
        </TextContainer>
      </ItemInfo>
      <Price>{price.toLocaleString()} 원</Price>
    </Card>
  );
};

export default PaymentItem;

const Card = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 20px;
  background: #ffffff;
  border: 1px solid #f0f0f0;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
  transition: box-shadow 0.3s ease, transform 0.3s ease;

  &:hover {
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
    transform: translateY(-4px);
  }
`;

const ItemInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const Icon = styled(FaTag)`
  color: #00a8cc;
  font-size: 1.8rem;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.div`
  font-size: 1.1rem;
  font-weight: bold;
  color: #333;
`;

const Subtitle = styled.div`
  font-size: 0.9rem;
  color: #666;
`;

const Price = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: #00a8cc;
  text-align: right;
`;