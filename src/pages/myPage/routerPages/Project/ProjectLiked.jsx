import React, { useState } from 'react'
import { MainTitle, SubTitle, TitleSection, ListSection } from './Project.styled'
import ListItemShort from './components/ListItemShort'

export default function ProjectLiked() {
  const [isFilterLatest, setIsFilterLatest] = useState(false)

  return (
    <>
      <TitleSection>
        <MainTitle>Project</MainTitle>
        <SubTitle>내가 찜한 프로젝트</SubTitle>
      </TitleSection>
      <ListSection>
        <div>
          <span onClick={() => setIsFilterLatest(false)}>마감 임박순</span>
          <span>|</span>
          <span onClick={() => setIsFilterLatest(true)}>최신순</span>
        </div>
        <ListItemShort filter={isFilterLatest}/>
      </ListSection>
    </>
  )
}