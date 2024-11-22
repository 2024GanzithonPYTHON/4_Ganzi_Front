import React from "react";
import { AmountOptionsContainer, AmountButton, Points, AmountText } from "./AmountOptions.styled";

const AmountOptions = ({ selectedAmount, onAmountSelect }) => {
  const amounts = [1000, 5000, 10000, 50000];

  return (
    <AmountOptionsContainer>
      {amounts.map((amount) => (
        <AmountButton
          key={amount}
          active={selectedAmount === amount}
          onClick={() => onAmountSelect(amount)}
        >
          <Points>{amount.toLocaleString()} P</Points>
          <AmountText>{amount.toLocaleString()} 원</AmountText>
        </AmountButton>
      ))}
    </AmountOptionsContainer>
  );
};

export default AmountOptions;