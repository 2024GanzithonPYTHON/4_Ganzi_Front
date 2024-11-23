import styled from "styled-components";

export const ApplyedInfoWrapper = styled.div`
  border: 1px solid #D8D8D8;
  padding: 20px 0;
`

export const ApplyedInfoBox = styled.div`
  display: flex;
  padding: 0 20px;
  justify-content: space-between;
`

export const ApplyedInfoItem = styled.div`
  display: flex;
  align-items: center;
`

export const Profile = styled.img`
  width: 15px;
  height: 15px;
  margin-right: 10px;
  margin-left: 15px;
`

export const ToggleBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 38px;
  border-radius: 5px;
  background-color: #FFE048;
  font-size: 14px;

  div {
    display: flex;
    align-items: center;
  }

  img {
    margin-left: 8px;
  }
`

export const ApplyedPeopleBox = styled.div`
  margin: 30px 20px 10px;
`

export const FilterBtn = styled.button`
  padding: 8px 20px;
  margin-bottom: 20px;
  border-radius: 5px;
  border: 2px solid #FFE048;
  font-size: 12px;
  background-color: ${(props) => (props.isFiltered ? '#FFE048' : '#fff')};
`

export const CommentWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0 5px;
  margin-bottom: 14px;

  &:last-child {
    margin-bottom: 0;
  }
`

export const CommentProfileBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90px;
  font-size: 14px;

  img {
    width: 19px;
    height: 19px;
    border-radius: 50%;
    background-color: #D9D9D9;
    border: 0.5px solid #000;
  }
`

export const CommentBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
`

export const BtnContainer = styled.div`
  width: 105px;
  display: flex;
  justify-content: space-between;
`

export const CommentBtn = styled.button`
  width: 47px;
  height: 20px;
  border-radius: 3px;
  color: #fff;
  font-size: 12px;
  font-weight: 500;
  background-color: ${(props) => (props.color)};
`

export const MoreInfoLinkBtn = styled.div`
  display: flex;
  align-items: center;
  margin-left: 8px;
  color: #0064FF;
  text-decoration: underline;
  cursor: pointer;
`

export const CommentModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #00000040;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const CommentModalBox = styled.div`
  width: 740px;
  background-color: #fff;;
  padding: 30px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const CommentBoxTitle = styled.h3`
  font-size: 24px;
  span {
    font-weight: 600;
  }
`

export const DateBox = styled.div`
  display: flex;
  width: 100%;
  justify-content: right;
  font-size: 16px;
  margin: 20px 0;
`

export const CommentModalProfileBox = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  .profile {
    width: 100px;
    height: 100px;
    background-color: gray;
    margin-right: 28px;
    border-radius: 50%;
  }

  .profile-text-box {
    text-align: center;
  }

  .profile-text {
    font-size: 24px;
    span {
      font-weight: 600;
    }
  }

  .mail-box {
    display: flex;
    align-items: center;
    font-size: 18px;
    img {
      margin: 10px;
    }
  }
`

export const ModalBtnBox = styled.div`
  width: 361px;
  display: flex;
  justify-content: right;
`
export const ModalBtn = styled.button`
  margin: 8px;
  padding: 15px 40px;
  border-radius: 5px;
  color: #fff;
  font-size: 16px;
  font-weight: 500;
  background-color: ${(props) => (props.color)};
`

export const CommentContentBox = styled.div`
  width: 100%;
  margin: 20px 0;
  p {
    font-size: 15px;
    margin: 20px 0 10px;
  }

  textarea {
    font-size: 14px;
    width: 100%;
    height: 100px;
  }
`