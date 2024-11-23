import React, { useEffect, useState } from 'react'
import { MainTitle, StatusSection, StatusItem, SubTitle, TitleSection } from './Project.styled'
import styled from 'styled-components'
import TableList from './components/TableList'
import Recommend from './components/Recommend'
import { getStatusCount } from '../../../../server/project'



const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 40px;
`

export default function ProjectApply() {
  const [ countData, setCountData ] = useState({});

  useEffect(() => {
    getStatusCount().then((response) => setCountData(response))
  }, []);

  return (
    <Wrapper>
      <TitleSection>
        <MainTitle>Project</MainTitle>
        <SubTitle>내가 지원한 프로젝트 현황</SubTitle>
      </TitleSection>
      <StatusSection>
        <StatusItem>
          <p>전체</p>
          <span>{countData.totalCount}</span>
        </StatusItem>
        <StatusItem>
          <p>승인</p>
          <span style={{ color: '#529F52' }}>{countData.approveCount}</span>
        </StatusItem>
        <StatusItem>
          <p>반려</p>
          <span style={{ color: '#ED4949' }}>{countData.rejectCount}</span>
        </StatusItem>
        <StatusItem>
          <p>대기</p>
          <span>{countData.waitCount}</span>
        </StatusItem>
        <StatusItem>
          <p>취소</p>
          <span style={{ color: '#757575' }}>{countData.cancelCount}</span>
        </StatusItem>
      </StatusSection>
      <TableList/>
      <Recommend/>
    </Wrapper>
  )
}
