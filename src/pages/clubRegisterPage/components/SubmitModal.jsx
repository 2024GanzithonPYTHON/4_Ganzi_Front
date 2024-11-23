import styled from "styled-components";

const Background = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Modal = styled.div`
  width: 375px;
  height: 206px;
  background-color: white;
  border-radius: 10px;
  padding: 15px;
  text-align: center;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  position: relative;
`;

const CloseButton = styled.span`
  position: absolute;
  top: 20px;
  right: 15px;
  font-size: 20px;
  cursor: pointer;
`;

const ModalMessageContainer = styled.div`
  position: absolute;
  right: 70px;
  bottom: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  font-size: 18px;
`;

const ConfirmButton = styled.button`
  width: 100%;
  height: 44.68px;
  background-color: #5bc0de;
  border: none;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 15px;
  font-size: 15px;

  &:hover {
    background-color: #46a1c9;
  }
`;

const SubmitModal = ({ onClose, onSubmit }) => {
  return (
    <Background>
      <Modal>
        <CloseButton onClick={onClose}>&times;</CloseButton>
        <ModalMessageContainer>
          <p>프로젝트를 등록하시겠습니까?</p>
          <ConfirmButton onClick={onSubmit}>등록하기</ConfirmButton>
        </ModalMessageContainer>
      </Modal>
    </Background>
  );
};

export default SubmitModal;
