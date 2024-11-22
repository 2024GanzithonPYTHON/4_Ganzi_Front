import styled from "styled-components";

// 페이지 전체 컨테이너
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  align-items: center;
  width: 100%;
`;

// 버튼 스타일
export const Button = styled.button`
  background-color: #007bff;
  color: #ffffff;
  width: 100%;
  font-size: 16px;
  font-weight: 600;
  padding: 12px 24px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;

  &:hover {
    background-color: #0056b3;
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }

  &[disabled] {
    background-color: #ccc;
    cursor: not-allowed;
    transform: none;
  }
`;

// 계좌 정보 텍스트
export const InfoText = styled.p`
  background-color: #f1f8ff;
  color: #007bff;
  font-size: 15px;
  font-weight: 500;
  padding: 12px;
  border-left: 4px solid #007bff;
  border-radius: 4px;
  text-align: left;
  margin: 0;
  width: 100%;
`;

// 작은 설명 텍스트
export const SmallText = styled.p`
  color: #666;
  font-size: 13px;
  margin-top: 5px;
  text-align: center;
  line-height: 1.4;
`;