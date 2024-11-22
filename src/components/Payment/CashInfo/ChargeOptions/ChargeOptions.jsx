import React from "react";
import { FaCreditCard, FaMoneyBillWave, FaLink, FaWallet } from "react-icons/fa";
import { Options, OptionButton } from "./ChargeOptions.styled";

const ChargeOptions = ({ chargeOption, setChargeOption }) => {
  const options = [
    { id: "NONE", label: "충전 안함", icon: <FaWallet /> },
    { id: "BANK_TRANSFER", label: "무통장 입금", icon: <FaMoneyBillWave /> },
    { id: "LINKED_ACCOUNT", label: "연동 계좌", icon: <FaLink /> },
    { id: "KAKAOPAY", label: "카카오페이", icon: <FaCreditCard /> },
  ];

  return (
    <Options>
      {options.map(({ id, label, icon }) => (
        <OptionButton
          key={id}
          active={chargeOption === id}
          onClick={() => setChargeOption(id)}
        >
          {icon}
          <span>{label}</span>
        </OptionButton>
      ))}
    </Options>
  );
};

export default ChargeOptions;