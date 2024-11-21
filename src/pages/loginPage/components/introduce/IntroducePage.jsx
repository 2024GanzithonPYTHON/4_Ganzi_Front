import { Container, Text1, Text2 } from "./IntroducePage.styled";
import loginImg from "./img/login.svg";

export const IntroducePage = () => {
  return (
    <Container>
      <img src={loginImg} alt="logoImg" />
      {/* <div className="BoldText">"진정으로 해보고 싶었던 일이 무엇인가요?"</div>
      <Text1>
        sidEgo에서는
        <div className="bold1">“해야 했던 일”</div>이 아닌
        <div className="bold2">“하고 싶던 일”</div>을 할 수 있습니다.
      </Text1>
      <Text2>로그인 후, 함께할 동료를 찾고 유용한 비법서도 확인해보세요.</Text2> */}
    </Container>
  );
};
