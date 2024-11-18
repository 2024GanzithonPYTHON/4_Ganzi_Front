import React from "react";
import { useNavigate } from "react-router-dom";
import {
  PageContainer,
  Wrap,
  Text1,
  Text2,
  Buttons,
  GoMypage,
  GoBack,
} from "./ApplyDone.styled";
import check from "./img/check.svg";

const ApplyDone = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate("/paper"); //실제로는 해당 비법서 상세페이지로! 나중에 수정하기
  };

  const goMypage = () => {
    navigate("/my");
  };
  return (
    <PageContainer>
      <Wrap>
        <img className="checkImg" src={check} alt="check" />
        <Text1>등록 신청 완료</Text1>
        <Text2>내부 심사 후 비법서 등록이 완료됩니다.</Text2>
        <Buttons>
          <GoMypage onClick={goMypage}>마이페이지</GoMypage>
          <GoBack onClick={goBack}>돌아가기</GoBack>
        </Buttons>
      </Wrap>
    </PageContainer>
  );
};

export default ApplyDone;
