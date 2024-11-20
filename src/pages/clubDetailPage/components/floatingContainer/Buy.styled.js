import styled from "styled-components";

export const PageContainers = styled.div`
  display: flex;
  flex-direction: column;

  border: 1px solid #d9d9d9;
  border-radius: 10px;
  padding-top: 30px;
  padding-bottom: 30px;
  padding-left: 45px;
  padding-right: 45px;
`;

export const Hits = styled.div`
  display: flex;
  align-items: center;
  gap: 7px;
  margin-bottom: 26px;

  font-size: 18px;
  color: #757575;
`;
export const Date = styled.div`
  display: flex;
  align-items: center;
  gap: 27px;
  margin-bottom: 26px;

  font-size: 18px;
  .content {
    font-weight: bold;
  }
`;
export const Eligibility = styled.div`
  display: flex;
  flex-direction: column;
  gap: 11px;

  font-size: 18px;
  margin-bottom: 70px;
`;
export const RecruitNum = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 44px;
  font-size: 18px;
`;
export const RecruiteWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-left: auto;
  div {
    font-weight: bold;
  }
`;

export const PointContainer = styled.div`
  display: flex;
  margin-bottom: 24px;
`;
export const Price = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;
export const MyPoint = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
  gap: 5px;
`;

export const Buttons = styled.div`
  display: flex;
  gap: 12px;
`;
export const ApplyBtn = styled.div`
  padding: 16px 70px;
  background-color: #00a8cc;
  border-radius: 5px;

  color: white;
  font-size: 18px;
  cursor: pointer;
`;
export const LikeBtn = styled.div`
  display: flex;
  align-items: center;
  padding: 12px 18px;
  border: 1px solid black;
  border-radius: 5px;

  cursor: pointer;
`;
