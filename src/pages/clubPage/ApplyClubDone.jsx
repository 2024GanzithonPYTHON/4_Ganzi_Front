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
} from "./ApplyClubDone.styled";
import check from "./img/check.svg";

const ApplyClubDone = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate("/paper");
  };

  const goMypage = () => {
    navigate("/my");
  };
  return (
    <PageContainer>
      <Wrap>
        <img className="checkImg" src={check} alt="check" />
        <Text1>지원 완료</Text1>
        <Text2>지원 승인 여부는 마이페이지에서 확인 가능합니다.</Text2>
        <Buttons>
          <GoMypage onClick={goMypage}>마이페이지</GoMypage>
          <GoBack onClick={goBack}>돌아가기</GoBack>
        </Buttons>
      </Wrap>
    </PageContainer>
  );
};

export default ApplyClubDone;
