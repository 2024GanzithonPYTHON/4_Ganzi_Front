import React, { useState } from 'react'
import { MainTitle, SubTitle, TitleSection, ListSection, FilterSection, FilterItem } from './Project.styled'
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
        <FilterSection>
          <FilterItem
          onClick={() => setIsFilterLatest(false)}
          isActive={!isFilterLatest}>마감 임박순</FilterItem>
          <span className='middle-bar'>|</span>
          <FilterItem
          onClick={() => setIsFilterLatest(true)}
          isActive={isFilterLatest}>최신순</FilterItem>
        </FilterSection>
        <ListItemShort filter={isFilterLatest}/>
      </ListSection>
    </>
  )
}