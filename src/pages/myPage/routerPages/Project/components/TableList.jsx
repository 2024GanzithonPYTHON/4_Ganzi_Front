import React, { useEffect, useState } from 'react'
import { getMockData } from '../ProjectMokData'
import { TableCont, TableRow, TableTitleRow, TableCellBig, TableCellSmall, TableCellBtn, Button } from './TableList.styled'
import { Profile } from './ListItemShort.styled'
import profile from '../../../../../assets/profileIcon.png'

export default function TableList() {
  const [applyData, setApplyData] = useState([])

  useEffect(() => {
    getMockData().then((response) => setApplyData(response));
  }, [])
  return (
    <TableCont>
        {/* 헤더 */}
        <TableTitleRow>
          <TableCellSmall>신청 날짜</TableCellSmall>
          <TableCellBig>프로젝트명</TableCellBig>
          <TableCellSmall>인원 달성률</TableCellSmall>
          <TableCellSmall>상태</TableCellSmall>
          <TableCellBtn></TableCellBtn>
        </TableTitleRow>
        {/* 데이터 */}
        {applyData.map((row) => (
          <TableRow key={row.id}>
            <TableCellSmall>{row.date}</TableCellSmall>
            <TableCellBig>{row.title}</TableCellBig>
            <TableCellSmall>
              <Profile src={profile} />
              {row.currentMembers}/{row.totalMembers}
            </TableCellSmall>
            <TableCellSmall>
              {row.mystate}
            </TableCellSmall>
            <TableCellBtn>
              <Button>내 지원서</Button>
              <Button style={{backgroundColor: '#4D4D4D'}}>취소</Button>
            </TableCellBtn>
          </TableRow>
        ))}
      </TableCont>
  )
}
