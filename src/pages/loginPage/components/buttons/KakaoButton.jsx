import { Container, Button } from "./KakaoButton.styled";
import kakaoImg from "./img/kakaoImg.svg";
export const KakaoButton = () => {
  return (
    <Container>
      <div className="info">카카오로 로그인으로 간편하게 시작해보세요.</div>
      <Button onClick={() => location.href = "https://api.sidego.klr.kr/oauth2/authorization/kakao"}>
        <img src={kakaoImg} alt="kakaoImg" />
        <div>카카오로 시작하기</div>
      </Button>
    </Container>
  );
};
