import React from 'react'
import { LongListSection, MainTitle, SubTitle, TitleSection } from './Project.styled'
import ToggleList from './components/ToggleList'
import Recommend from './components/Recommend'

export default function ProjectRecruit() {
  return (
    <>
      <TitleSection>
        <MainTitle>Project</MainTitle>
        <SubTitle>내가 모집 중인 프로젝트</SubTitle>
      </TitleSection>
      <LongListSection>
        <ToggleList />
      </LongListSection>
      <Recommend />
    </>
  )
}
