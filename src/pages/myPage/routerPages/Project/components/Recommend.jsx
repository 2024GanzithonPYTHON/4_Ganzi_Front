import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

const DescriptSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100px;
  margin: 20px;
`

const ToProjectBtn = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid #00A8CC;
`

export default function Recommend() {
  return (
    <Wrapper>
      <DescriptSection>
        <h3>원하는 서비스가 없으신가요?</h3>
        <a>수수료 없이</a>
        <p>내가 원하는 프로젝트의 멤버를 모집해보세요!</p>
      </DescriptSection>
      <ToProjectBtn>
        <p>프로젝트</p>
        <p>모집하러 가기</p>
      </ToProjectBtn>
    </Wrapper>
  )
}
