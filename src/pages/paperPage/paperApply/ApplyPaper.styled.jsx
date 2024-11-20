import styled from "styled-components";
export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
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
export const Back = styled.div`
  display: flex;
  flex-direction: column;
  gap: 82px;
  align-items: center;
  background: #fcfcfc;
  width: 100%;
  margin-bottom: 50px;
  box-shadow: inset 0 5px 5px -5px;
`;

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 1100px;
  gap: 50px;
  margin-top: 80px;
`;

// 카테고리
export const PCategory = styled.div`
  display: flex;
  gap: 155px;
`;
export const PCtext = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 388px;
`;
export const PCt1 = styled.div`
  display: flex;
  gap: 5px;
  font-size: 20px;
  font-weight: bold;
`;
export const PCt2 = styled.div``;
export const FilterContainer = styled.div`
  display: flex;
  flex-wrap: wrap;

  gap: 10px;
  width: 557px;
`;
export const FilterButton = styled.button`
  padding-left: 50px;
  padding-right: 50px;
  padding-top: 10px;
  padding-bottom: 10px;
  border-radius: 20px;

  cursor: pointer;
  transition: background-color 0.3s ease-in-out;
  &:hover {
    background-color: ${(props) => (props.isSelected ? "#00A8CC" : "#F0F0F0")};
  }
  background-color: ${(props) => (props.isSelected ? "#00A8CC" : "white")};
  color: ${(props) => (props.isSelected ? "white" : "black")};
  border: ${(props) =>
    props.isSelected ? "1px solid #fcfcfc" : "1px solid #757575"};
`;

// 제목
export const PTitle = styled.div`
  display: flex;
  gap: 155px;
`;
export const PTtext = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 388px;
`;
export const PTt1 = styled.div`
  display: flex;
  gap: 5px;
  font-size: 20px;
  font-weight: bold;
`;
export const PTt2 = styled.div`
  width: 388px;
`;
export const PTWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 557px;
`;
export const PTwrap1 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 557px;

  .title {
    font-weight: bold;
  }
`;
export const PTinfo1 = styled.div`
  display: flex;
  align-items: center;
  padding-left: 40px;
  gap: 123px;
  width: 557px;
  height: 166px;
  border: 0.2px solid #b3b3b3;
  box-shadow: 5px 5px 5px -5px #b3b3b3;
  border-radius: 3px;
  .title {
    font-weight: bold;
    line-height: 20px;
  }
`;
export const PTinput1 = styled.input`
  border-radius: 3px;
  border-color: #757575;
  padding: 10px 10px 10px 10px;
  border-radius: 3px;
  border: 0.5px solid #d9d9d9;
`;
export const PTinput1Count = styled.div`
  font-size: 10px;
  color: #757575;
  margin-left: auto;
  width: 45px;
`;
export const PTwrap2 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 557px;
  .title {
    font-weight: bold;
  }
`;
export const PTinfo2 = styled.div`
  display: flex;
  align-items: center;
  padding-left: 40px;
  gap: 123px;
  width: 557px;
  height: 166px;
  border: 0.2px solid #b3b3b3;
  box-shadow: 5px 5px 5px -5px #b3b3b3;
  border-radius: 3px;
  .title {
    font-weight: bold;
    line-height: 20px;
  }
`;
export const PTinput2 = styled.input`
  border-radius: 3px;
  border-color: #757575;
  padding: 10px 10px 10px 10px;
  border-radius: 3px;
  border: 0.5px solid #d9d9d9;
`;
export const PTinput2Count = styled.div`
  font-size: 10px;
  color: #757575;
  margin-left: auto;
  width: 45px;
`;
// 소개
export const PIntro = styled.div`
  display: flex;
  gap: 155px;
`;
export const PItext = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 388px;
`;
export const PIt1 = styled.div`
  display: flex;
  gap: 5px;
  font-size: 20px;
  font-weight: bold;
`;
export const PIt2 = styled.div``;
export const PIwrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 557px;
`;
export const PIwrap1 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 557px;
  .title {
    font-weight: bold;
  }
`;
export const PIinfo1 = styled.div`
  display: flex;
  align-items: center;
  padding-left: 40px;
  gap: 123px;
  width: 557px;
  height: 166px;
  border: 0.2px solid #b3b3b3;
  box-shadow: 5px 5px 5px -5px #b3b3b3;
  border-radius: 3px;
  .title {
    font-weight: bold;
    line-height: 20px;
  }
`;
export const PIinput1 = styled.input`
  border-radius: 3px;
  border-color: #757575;
  padding: 10px 10px 10px 10px;
  border-radius: 3px;
  border: 0.5px solid #d9d9d9;
`;
export const PIinput1Count = styled.div`
  font-size: 10px;
  color: #757575;
  margin-left: auto;
  width: 45px;
`;
export const PIwrap2 = styled.div`
  display: flex;
  flex-direction: column;
  width: 557px;
  gap: 10px;
  .title {
    font-weight: bold;
  }
`;
export const PIinput2 = styled.textarea`
  padding: 10px 10px 10px 10px;
  border-radius: 3px;
  border: 0.5px solid #d9d9d9;
  resize: none;
  height: 200px;
`;

//섬네일 파일
export const PTHumnail = styled.div`
  display: flex;
  gap: 155px;
`;
export const PTHtext = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 388px;
`;
export const PTHt1 = styled.div`
  display: flex;
  gap: 5px;
  font-size: 20px;
  font-weight: bold;
`;
export const PTHt2 = styled.div``;
export const PTHwrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 557px;
  border: 1px dashed #ccc;
  border-radius: 10px;
  padding: 20px;
  text-align: center;
  background-color: #f9f9f9;
  position: relative;

  &:hover {
    background-color: #f1f1f1;
  }
`;

//비법서 파일
export const PFile = styled.div`
  display: flex;
  gap: 155px;
`;
export const PFtext = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 388px;
`;
export const PFt1 = styled.div`
  display: flex;
  gap: 5px;
  font-size: 20px;
  font-weight: bold;
`;
export const PFt2 = styled.div``;

export const PFwrap = styled.div`
  width: 557px;
  border: 1px dashed #ccc;
  border-radius: 10px;
  padding: 20px;
  text-align: center;
  background-color: #f9f9f9;
  position: relative;

  &:hover {
    background-color: #f1f1f1;
  }
`;

export const Label = styled.label`
  display: block;
  cursor: pointer;
  font-size: 16px;
  color: #666;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const FileList = styled.ul`
  margin-top: 20px;
  padding: 0;
  list-style: none;
`;
export const FileItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #f5f5f5;
  border: 1px solid #ddd;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 5px;
`;

export const DeleteButton = styled.button`
  background-color: red;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
  cursor: pointer;

  &:hover {
    background-color: darkred;
  }
`;

//버튼
export const ApplyBtn = styled.button`
  margin-left: auto;
  padding-left: 50px;
  padding-right: 50px;
  padding-top: 10px;
  padding-bottom: 10px;
  border-radius: 10px;
  background-color: #00a8cc;
  font-size: 20px;
  width: 268px;

  background-color: ${(props) => (props.disabled ? "#ccc" : "#00A8CC")};
  color: ${(props) => (props.disabled ? "#666" : "#fff")};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  transition: background-color 0.3s ease;
  &:hover {
    background-color: ${(props) => (props.disabled ? "#ccc" : "#0094B8")};
  }
`;

// 모달 오버레이 (화면 전체)
export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(77, 77, 77, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

// 모달 컨텐츠 (중앙 박스)
export const ModalContent = styled.div`
  background-color: #ffffff;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  gap: 15px;
  padding-top: 20px;
  padding-bottom: 35px;
  padding-left: 35px;
  padding-right: 35px;
  .text1 {
    font-size: 20px;
    text-align: center;
    line-height: 25px;
  }
  .bold-text {
    font-weight: bold;
  }
  .text2 {
    font-size: 10px;
    color: #4d4d4d;
    text-align: center;
    padding-top: 10px;

    line-height: 15px;
  }
  .close {
    margin-left: auto;
  }
`;

// RealApplyButton (모달 안의 버튼)
export const RealApplyButton = styled.button`
  width: 287px;
  height: 44px;
  background-color: #00a8cc;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0094b8;
  }
`;
