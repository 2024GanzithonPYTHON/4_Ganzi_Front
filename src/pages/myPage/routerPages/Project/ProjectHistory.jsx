import React, {useState} from 'react'
import { FilterSection, FilterItem, LongListSection, MainTitle, SubTitle, TitleSection } from './Project.styled'
import ListItemLong from './components/ListItemLong'
import Recommend from './components/Recommend'

export default function ProjectHistory() {
  const [isFilterLatest, setIsFilterLatest] = useState(true)
  return (
    <>
      <TitleSection>
        <MainTitle>Project</MainTitle>
        <SubTitle>내가 참여한 프로젝트 현황</SubTitle>
      </TitleSection>
      <LongListSection>
        <FilterSection>
          <FilterItem
          onClick={() => setIsFilterLatest(true)}
          isActive={isFilterLatest}>최신순</FilterItem>
          <span className='middle-bar'>|</span>
          <FilterItem
          onClick={() => setIsFilterLatest(false)}
          isActive={!isFilterLatest}>오래된 순</FilterItem>
        </FilterSection>
        <ListItemLong filter={isFilterLatest}/>
      </LongListSection>
      <Recommend/>
    </>
  )
}
