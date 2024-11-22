import { FaSyncAlt, FaWallet } from "react-icons/fa";
import styled from "styled-components";

export const CashInfoContainer = styled.div`
  background: #ffffff;
  padding: 20px;
  border-radius: 12px;
  border: 1px solid #f0f0f0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const InfoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const WalletIcon = styled(FaWallet)`
  color: #00a8cc;
  font-size: 2rem;
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h3`
  font-size: 1rem;
  font-weight: 600;
  color: #333;
`;

export const Cash = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: #00a8cc;
`;

export const ChargeButton = styled.button`
  padding: 12px 16px;
  font-size: 1rem;
  font-weight: bold;
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

export const RefreshButtonContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const RefreshIcon = styled(FaSyncAlt)`
  font-size: 1.5rem;
  color: #666;
  cursor: pointer;
  transition: transform 0.2s ease, color 0.3s ease;

  &:hover {
    color: #333;
    transform: rotate(90deg);
  }

  &:active {
    color: #00a8cc;
  }
`;