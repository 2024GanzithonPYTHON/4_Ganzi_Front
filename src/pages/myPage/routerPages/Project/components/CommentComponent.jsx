import React from 'react'
import { BtnContainer, CommentBox, CommentBtn, CommentProfileBox, CommentWrapper, MoreInfoLinkBtn } from './Toggle.styled'

export default function CommentComponent({item}) {
  return (
    <CommentWrapper>
      <CommentProfileBox>
        <span>{item.id}</span>
        <img src={item.image}/>
        <span>{item.userId}</span>
      </CommentProfileBox>
      <CommentBox>
        <span>{item.comment.length > 35
        ? `${item.comment.slice(0, 35)}...`
        : item.comment}</span>
        <MoreInfoLinkBtn>더보기</MoreInfoLinkBtn>
      </CommentBox>
      <BtnContainer>
        <CommentBtn color='#529F52'>수락</CommentBtn>
        <CommentBtn color='#ED4949'>거절</CommentBtn>
      </BtnContainer>
    </CommentWrapper>
  )
}
