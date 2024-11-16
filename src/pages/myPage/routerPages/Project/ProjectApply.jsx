import React from 'react'
import { MainTitle, StatusSection, SubTitle, TitleSection } from './Project.styled'
import styled from 'styled-components'
import TableList from './components/TableList'
import Recommend from './components/Recommend'

const StatusItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px;
`

export default function ProjectApply() {
  return (
    <>
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
          <p>수락</p>
          <span>1</span>
        </StatusItem>
        <StatusItem>
          <p>거절</p>
          <span>1</span>
        </StatusItem>
        <StatusItem>
          <p>대기</p>
          <span>2</span>
        </StatusItem>
        <StatusItem>
          <p>취소</p>
          <span>1</span>
        </StatusItem>
      </StatusSection>
      <TableList/>
      <Recommend/>
    </>
  )
}
