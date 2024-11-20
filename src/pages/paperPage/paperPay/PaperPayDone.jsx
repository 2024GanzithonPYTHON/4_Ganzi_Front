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
  Download,
} from "./PaperPayDone.styled";
import check from "./img/check.svg";

const PaperPayDone = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate("/paper"); //실제로는 구매한 비법서 상세페이지로! 나중에 수정하기
  };

  const goMypage = () => {
    navigate("/my");
  };

  /* 파일 다운 받기*/

  return (
    <PageContainer>
      <Wrap>
        <img className="checkImg" src={check} alt="check" />
        <Text1>결제 완료</Text1>
        <Text2>다운받기 클릭 후, 비법서를 바로 확인해보세요!</Text2>
        <Buttons>
          <GoMypage onClick={goMypage}>마이페이지</GoMypage>
          <GoBack onClick={goBack}>돌아가기</GoBack>
        </Buttons>
        <Download>다운받기</Download>
      </Wrap>
    </PageContainer>
  );
};

export default PaperPayDone;
