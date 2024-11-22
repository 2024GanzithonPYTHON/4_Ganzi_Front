import React, { useState } from "react";
import styled from "styled-components";

const DiscountForm = ({ coupons, selectedCoupon, onSelectCoupon }) => {
  const [customCoupon, setCustomCoupon] = useState(""); // 사용자 입력 쿠폰 코드
  const [error, setError] = useState(""); // 에러 메시지

  const handleApplyCoupon = () => {
    if (customCoupon.trim()) {
      onSelectCoupon({ id: "custom", code: customCoupon, description: "사용자 입력 쿠폰" });
      setCustomCoupon("");
      setError(""); // 에러 초기화
    } else {
      setError("쿠폰 코드를 입력하세요.");
    }
  };

  const handleSelectCoupon = (e) => {
    const selectedId = e.target.value;
    if (selectedId === "none") {
      onSelectCoupon(null);
    } else {
      const selected = coupons.find((coupon) => coupon.id.toString() === selectedId);
      onSelectCoupon(selected);
    }
    setError(""); // 에러 초기화
  };

  return (
    <Container>
      <Label>쿠폰 선택</Label>
      <Select value={selectedCoupon?.id || "none"} onChange={handleSelectCoupon}>
        <option value="none">사용 안함</option>
        {coupons.map((coupon) => (
          <option key={coupon.id} value={coupon.id}>
            {coupon.description}
          </option>
        ))}
      </Select>
      <Divider />
      <Label>쿠폰 코드 입력</Label>
      <InputWrapper>
        <Input
          type="text"
          value={customCoupon}
          onChange={(e) => setCustomCoupon(e.target.value)}
          placeholder="쿠폰 코드를 입력하세요"
        />
        <ApplyButton onClick={handleApplyCoupon}>적용</ApplyButton>
      </InputWrapper>
      {error && <ErrorText>{error}</ErrorText>}
    </Container>
  );
};

export default DiscountForm;

const Container = styled.div`
  margin-top: 20px;
`;

const Label = styled.label`
  font-size: 1rem;
  font-weight: bold;
  margin-bottom: 8px;
  display: block;
  color: #333;
`;

const Select = styled.select`
  width: 100%;
  padding: 12px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  margin-bottom: 20px;

  &:focus {
    outline: none;
    border-color: #00a8cc;
    box-shadow: 0 0 4px rgba(0, 168, 204, 0.5);
  }
`;

const Divider = styled.hr`
  border: none;
  border-top: 1px solid #e0e0e0;
  margin: 20px 0;
`;

const InputWrapper = styled.div`
  display: flex;
  gap: 10px;
`;

const Input = styled.input`
  flex: 1;
  padding: 12px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 8px;

  &:focus {
    outline: none;
    border-color: #00a8cc;
    box-shadow: 0 0 4px rgba(0, 168, 204, 0.5);
  }
`;

const ApplyButton = styled.button`
  padding: 12px 16px;
  font-size: 1rem;
  font-weight: bold;
  background-color: #00a8cc;
  color: #fff;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #007a99;
  }
`;

const ErrorText = styled.div`
  margin-top: 10px;
  color: red;
  font-size: 0.9rem;
`;