import React, { useState } from 'react'
import { MainTitle, SubTitle, TitleCont, ListCont } from './Project.styled'
import ProjectListItem from './components/ProjectListItem'

export default function ProjectLiked() {
  const [isFilterLatest, setIsFilterLatest] = useState(false)

  return (
    <>
      <TitleCont>
        <MainTitle>Project</MainTitle>
        <SubTitle>내가 찜한 프로젝트</SubTitle>
      </TitleCont>
      <ListCont>
        <div>
          <span onClick={() => setIsFilterLatest(false)}>마감 임박순</span>
          <span>|</span>
          <span onClick={() => setIsFilterLatest(true)}>최신순</span>
        </div>
        <ProjectListItem filter={isFilterLatest}/>
      </ListCont>
    </>
  )
}