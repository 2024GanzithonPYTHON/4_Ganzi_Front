import React from 'react'
import { LongListSection, MainTitle, SubTitle, TitleSection } from './Project.styled'
import PjListItemLong from './components/PjListItemLong'
import Recommend from './components/Recommend'

export default function ProjectHistory() {
  return (
    <>
      <TitleSection>
        <MainTitle>Project</MainTitle>
        <SubTitle>내가 참여한 프로젝트 현황</SubTitle>
      </TitleSection>
      <LongListSection>
        <PjListItemLong/>
      </LongListSection>
      <Recommend/>
    </>
  )
}
