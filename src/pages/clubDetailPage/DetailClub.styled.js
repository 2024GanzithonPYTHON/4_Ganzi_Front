import styled from "styled-components";

export const PageContainer = styled.div``;
export const Title = styled.div`
  display: flex;
  align-items: center;
  margin-left: 70px;
  margin-top: 30px;
  margin-bottom: 50px;
  gap: 20px;
`;
export const TitleText = styled.h2`
  font-size: 30px;
  font-weight: bold;
`;
export const Wrap = styled.div`
  display: flex;
  justify-content: center;
  gap: 113px;
`;

/*왼쪽*/
export const Left = styled.div`
  width: 645px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const ClubImg = styled.div`
  width: 645px;
  height: 300px;
  margin-bottom: 33px;
`;
export const ClubTitle = styled.h2`
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 55px;
  width: 645px;
  word-wrap: break-word;
`;

export const ContentContainer = styled.div`
  min-height: 466px;
  width: 590px;
  margin-bottom: 65px;

  .paper {
    white-space: pre-wrap; /* 엔터키 반영 */
    word-wrap: break-word; /* 긴 단어 줄바꿈 */
    line-height: 1.5; /* 줄 간격 */
    font-size: 15px;
  }
  .title {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 36px;
  }
`;
