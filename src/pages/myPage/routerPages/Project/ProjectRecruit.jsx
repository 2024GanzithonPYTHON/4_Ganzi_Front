import React from 'react'
import { ListSection, MainTitle, SubTitle, TitleSection } from './Project.styled'
import ToggleList from './components/ToggleList'

export default function ProjectRecruit() {
  return (
    <>
      <TitleSection>
        <MainTitle>Project</MainTitle>
        <SubTitle>내가 모집 중인 프로젝트</SubTitle>
      </TitleSection>
      <ListSection>
        <ToggleList />
      </ListSection>
    </>
  )
}
