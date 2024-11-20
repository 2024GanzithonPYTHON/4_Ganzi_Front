import React, {useState} from 'react'
import { LongListSection, MainTitle, SubTitle, TitleSection } from './Project.styled'
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
        <div>
          <span onClick={() => setIsFilterLatest(true)}>최신순</span>
          <span>|</span>
          <span onClick={() => setIsFilterLatest(false)}>오래된 순</span>
        </div>
        <ListItemLong filter={isFilterLatest}/>
      </LongListSection>
      <Recommend/>
    </>
  )
}
