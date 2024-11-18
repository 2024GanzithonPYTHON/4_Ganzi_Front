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
`;
export const PaperImg = styled.div`
  width: 645px;
  height: 300px;
  margin-bottom: 33px;
`;
export const PaperTitle = styled.h2`
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 55px;
`;
export const Tap = styled.div`
  height: 36px;
  width: 645px;
  background: blue; //확인용
  margin-bottom: 65px;
`;
export const Content = styled.div`
  height: 466px;
  background: blue; //확인용
  margin-bottom: 65px;
`;

/*오른쪽 (플로팅)*/
//구매 창
export const Right = styled.div`
  display: flex;
  flex-direction: column;
  gap: 33px;
  width: 450px;
`;
export const Buy = styled.div`
  display: flex;
  flex-direction: column;

  border: 1px solid #d9d9d9;
  border-radius: 10px;
  padding-top: 30px;
  padding-bottom: 30px;
  padding-left: 45px;
  padding-right: 45px;
`;
export const Point = styled.div`
  display: flex;
  align-items: center;
  font-size: 30px;
  font-family: medium;
  gap: 5px;
  margin-bottom: 24px;
`;
export const ShortTitle = styled.div`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 13px;
`;
export const ShortIntro = styled.div`
  font-size: 20px;
  margin-bottom: 50px;
`;
export const BuyBtn = styled.button`
  width: 359px;
  height: 52px;
  background-color: #00a8cc;
  border: none;
  border-radius: 5px;

  color: white;
  font-size: 20px;
  &:hover {
    background-color: #0094b8;
  }
`;

//판매자 프로필
export const Seller = styled.div`
  display: flex;
  flex-direction: column;

  border: 1px solid #d9d9d9;
  border-radius: 10px;
  padding-top: 30px;
  padding-bottom: 30px;
  padding-left: 45px;
  padding-right: 45px;
`;
export const Profile = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 42px;
`;
export const Pwrap = styled.div``;
export const Email = styled.div`
  display: flex;
  align-items: center;
`;
export const Heart = styled.div`
  display: flex;
  align-items: center;
`;
