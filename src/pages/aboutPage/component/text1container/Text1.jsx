import { Container } from "./Text1.styled";

export const Text1 = () => {
  return (
    <Container>
      <div>사이드 프로젝트는 본래</div>
      <div className="boldText">
        "내가 하고 싶은 일을 실현하기 위해 비공식적인 프로젝트 단위로 시도하는
        것"
      </div>
      <div className="enter1">이라는 정의를 가지고 있습니다.</div>
      <div>
        하지만 오늘날의 사이드 프로젝트는 스팩을 쌓기 위한 도구로 변질되었고,
      </div>
      <div className="enter2">
        특히 IT 업계에 국한된 문화로 자리 잡았습니다.
      </div>

      <div className="question">저희는 여기서 질문을 던졌습니다.</div>
    </Container>
  );
};
