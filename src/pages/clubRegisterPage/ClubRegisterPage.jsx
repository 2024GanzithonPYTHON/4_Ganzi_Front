import { useNavigate } from "react-router-dom";
import {
  PageContainer,
  PageTitleContainer,
  BackButton,
  PageTitle,
} from "./ClubRegisterPage.styled";
import BackIcon from "./assets/arrow_back.png";

const ClubRegisterPage = () => {
  const navigate = useNavigate();
  return (
    <PageContainer>
      <PageTitleContainer>
        <BackButton
          src={BackIcon}
          onClick={() => navigate(-1)}
          alt="돌아가기 화살표 아이콘"
        />
        <PageTitle>프로젝트 만들기</PageTitle>
      </PageTitleContainer>
    </PageContainer>
  );
};

export default ClubRegisterPage;
