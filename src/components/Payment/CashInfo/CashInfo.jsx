import React, { useState } from "react";
import WalletInfo from "./WalletInfo/WalletInfo";
import ChargeOptions from "./ChargeOptions/ChargeOptions";
import AmountOptions from "./AmouontOptions/AmountOptions";
import ChargeActions from "./ChargeActions/ChargeActions";
import { Container, Section, SectionTitle, Divider } from "./CashInfo.styled";

const CashInfo = ({ currentCash, onChargeClick }) => {
  const [chargeOption, setChargeOption] = useState("NONE");
  const [selectedAmount, setSelectedAmount] = useState(0);

  return (
    <Container>
      <WalletInfo currentCash={currentCash} onChargeClick={onChargeClick} />
      <div>
        <Section>
          <SectionTitle>충전 수단</SectionTitle>
          <ChargeOptions
            chargeOption={chargeOption}
            setChargeOption={setChargeOption}
          />
        </Section>
        {
          chargeOption === "NONE" ? null : (
            <>
              <Divider />
              <Section>
                <SectionTitle>충전 금액</SectionTitle>
                <AmountOptions
                  selectedAmount={selectedAmount}
                  onAmountSelect={setSelectedAmount}
                />
                <ChargeActions
                  chargeOption={chargeOption}
                  selectedAmount={selectedAmount}
                />
              </Section>
            </>
          )
        }
      </div>
    </Container>
  );
};

export default CashInfo;