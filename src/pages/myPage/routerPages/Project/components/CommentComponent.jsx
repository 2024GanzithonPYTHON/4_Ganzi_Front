import React, {useEffect, useState} from 'react'
import { BtnContainer, CommentBox, CommentBoxTitle, CommentBtn, CommentContentBox, CommentModal, CommentModalBox, CommentModalProfileBox, CommentProfileBox, CommentWrapper, DateBox, ModalBtn, ModalBtnBox, MoreInfoLinkBtn } from './Toggle.styled'
import mail from '../assets/Letter-icon.svg'
import { getApplicant } from '../../../../../server/applicant';

export default function CommentComponent({item}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [applyData, setApplyData] = useState({
    id: 1,
    shortTitle: "귀여운 강아지 캐릭터를 만들고 캐릭터로 스티커, 키링 등 굿즈를 만들 팀원 구합니다!",
    username: "b",
    email: "b@gmail.com",
    content: "평소에 캐릭터 만들기를 좋아하고 종종 해왔습니다. 이번 기회에 캐릭터를 이용한 다양한 굿즈를 제작해보고 싶습니다.",
    career: "마스코트 제작 수상 경력",
    createdAt: "2024-11-20"
  });

  useEffect(() => {
    const userId = item.applicantId
    getApplicant().then((response) => setApplyData(response));
  }, [userId])

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
          <MoreInfoLinkBtn
          onClick={openModal}
          >더보기</MoreInfoLinkBtn>
        </CommentBox>
        <BtnContainer>
          <CommentBtn onClick={() => handleAcceptBtn ()} color='#529F52'>수락</CommentBtn>
          <CommentBtn onClick={() => handleRejectBtn()} color='#ED4949'>거절</CommentBtn>
        </BtnContainer>
      </CommentWrapper>
      {isModalOpen && (
        <CommentModal onClick={closeModal}>
          <CommentModalBox onClick={(e) => e.stopPropagation()}>
            <CommentBoxTitle><span>{applyData.shortTitle}</span>의 지원자</CommentBoxTitle>
            <DateBox><span>{applyData.createdAt}</span>지원</DateBox>
            <CommentModalProfileBox>
              <img className='profile'/>
              <div className='profile-text-box'>
                <p className='profile-text'><span>{item.userId}</span> 20대 여</p>
                <span className='mail-box'><img src={mail}/>{applyData.email}</span>
              </div>
              <ModalBtnBox>
                <ModalBtn onClick={() => handleAcceptBtn ()} color='#529F52'>수락</ModalBtn>
                <ModalBtn onClick={() => handleRejectBtn()} color='#ED4949'>거절</ModalBtn>
              </ModalBtnBox>
            </CommentModalProfileBox>
            <CommentContentBox>
              <p>지원 동기</p>
              <textarea>{applyData.content}</textarea>
              <p>관련 경력</p>
              <textarea>{applyData.career}</textarea>
            </CommentContentBox>
          </CommentModalBox>
        </CommentModal>
      )}
    </>
  )
}
