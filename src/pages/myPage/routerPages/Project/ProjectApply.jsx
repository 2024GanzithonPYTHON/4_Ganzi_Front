import React from 'react'
import { MainTitle, StatusSection, StatusItem, SubTitle, TitleSection } from './Project.styled'
import styled from 'styled-components'
import TableList from './components/TableList'
import Recommend from './components/Recommend'



const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 40px;
`

export default function ProjectApply() {
  return (
    <Wrapper>
      <TitleSection>
        <MainTitle>Project</MainTitle>
        <SubTitle>내가 지원한 프로젝트 현황</SubTitle>
      </TitleSection>
      <StatusSection>
        {/* map으로 고칠 수 있으면 고치기 */}
        <StatusItem>
          <p>전체</p>
          <span>5</span>
        </StatusItem>
        <StatusItem>
          <p>승인</p>
          <span style={{ color: '#529F52' }}>1</span>
        </StatusItem>
        <StatusItem>
          <p>반려</p>
          <span style={{ color: '#ED4949' }}>1</span>
        </StatusItem>
        <StatusItem>
          <p>대기</p>
          <span>2</span>
        </StatusItem>
        <StatusItem>
          <p>취소</p>
          <span style={{ color: '#757575' }}>1</span>
        </StatusItem>
      </StatusSection>
      <TableList/>
      <Recommend/>
    </Wrapper>
  )
}
