import { useNavigate } from "react-router-dom";
import check from "./assets/check.png";
import styled from "styled-components";

export const PageContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: grid;
  place-items: center;
`;

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
`;

export const Message = styled.div`
  font-size: 30px;
  font-weight: bold;
  padding-bottom: 30px;
`;

export const Buttons = styled.div`
  display: flex;
  gap: 20px;
`;

export const MypageButton = styled.button`
  width: 268px;
  height: 58px;
  border-radius: 10px;
  border: none;
  background-color: #00a8cc;
  color: white;
  font-size: 15px;

  &:hover {
    background-color: #0094b8;
  }
`;

export const BackButton = styled.button`
  width: 268px;
  height: 58px;
  border-radius: 10px;
  border: 1px solid black;
  font-size: 15px;

  &:hover {
    background-color: #f0f0f0;
  }
`;

const ClubRegisterDone = () => {
  const navigate = useNavigate();

  const toMypage = () => {
    navigate("/my");
  };

  const toBack = () => {
    navigate("/club");
  };

  return (
    <PageContainer>
      <Wrap>
        <img src={check} alt="등록 아이콘" />
        <Message>프로젝트 등록 완료</Message>
        <Buttons>
          <MypageButton onClick={toMypage}>마이페이지</MypageButton>
          <BackButton onClick={toBack}>돌아가기</BackButton>
        </Buttons>
      </Wrap>
    </PageContainer>
  );
};

export default ClubRegisterDone;
