import React from 'react'
import {Wrapper, DescriptSection, ToProjectBtn, ToPage} from './Recommend.styled'


export default function Recommend() {
  return (
    <Wrapper>
      <DescriptSection>
        <h3>원하는 서비스가 없으신가요?</h3>
        <div>
          <ToPage>수수료 없이</ToPage>
          <p>내가 원하는 프로젝트의 멤버를 모집해보세요!</p>
        </div>
      </DescriptSection>
      <ToProjectBtn>
        <p>프로젝트</p>
        <p>모집하러 가기</p>
      </ToProjectBtn>
    </Wrapper>
  )
}