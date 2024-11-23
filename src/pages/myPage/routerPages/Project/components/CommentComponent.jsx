import React, {useState} from 'react'
import { BtnContainer, CommentBox, CommentBoxTitle, CommentBtn, CommentContentBox, CommentModal, CommentModalBox, CommentModalProfileBox, CommentProfileBox, CommentWrapper, DateBox, ModalBtn, ModalBtnBox, MoreInfoLinkBtn } from './Toggle.styled'
import mail from '../assets/Letter-icon.svg'

export default function CommentComponent({item}) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAcceptBtn = () => {
    const isAccepted = window.confirm(`${item.userId}의 프로젝트 참여 신청을 수락하겠습니까?`)
    if (isAccepted) {
      alert('참여 신청이 수락되었습니다.');
      setIsModalOpen(false);
    }
  };

  const handleRejectBtn = () => {
    const isRejected = window.confirm(`${item.userId}의 프로젝트 참여 신청을 거절하겠습니까?`)
    if (isRejected) {
      alert('참여 신청이 거절되었습니다');
      setIsModalOpen(false);
    }
  }

  const openModal = () => {
    setIsModalOpen(true);
  }

  const closeModal = () => {
    setIsModalOpen(false);
  }

  return (
    <>
      <CommentWrapper>
        <CommentProfileBox>
          {/* 신청 순서 */}
          <span>{item.applicantId}</span>
          <img src={item.profileImg}/>
          <span>{item.username}</span>
        </CommentProfileBox>
        <CommentBox>
          <span>{item.content.length > 35
          ? `${item.content.slice(0, 35)}...`
          : item.content}</span>
          <MoreInfoLinkBtn onClick={openModal}>더보기</MoreInfoLinkBtn>
        </CommentBox>
        <BtnContainer>
          <CommentBtn onClick={() => handleAcceptBtn ()} color='#529F52'>수락</CommentBtn>
          <CommentBtn onClick={() => handleRejectBtn()} color='#ED4949'>거절</CommentBtn>
        </BtnContainer>
      </CommentWrapper>
      {isModalOpen && (
        <CommentModal onClick={closeModal}>
          <CommentModalBox onClick={(e) => e.stopPropagation()}>
            <CommentBoxTitle><span>⌜대학생 할러윈 파티 기획하기⌟</span>의 지원자</CommentBoxTitle>
            <DateBox><span>2024.10.11</span>지원</DateBox>
            <CommentModalProfileBox>
              <img className='profile'/>
              <div className='profile-text-box'>
                <p className='profile-text'><span>{item.userId}</span> 20대 여</p>
                <span className='mail-box'><img src={mail}/>crispy@ganzi.com</span>
              </div>
              <ModalBtnBox>
                <ModalBtn onClick={() => handleAcceptBtn ()} color='#529F52'>수락</ModalBtn>
                <ModalBtn onClick={() => handleRejectBtn()} color='#ED4949'>거절</ModalBtn>
              </ModalBtnBox>
            </CommentModalProfileBox>
            <CommentContentBox>
              <p>지원 동기</p>
              <textarea>{item.comment}</textarea>
              <p>관련 경력</p>
              <textarea>{item.resume}</textarea>
            </CommentContentBox>
          </CommentModalBox>
        </CommentModal>
      )}
    </>
  )
}
