import React, { useEffect, useState } from 'react'
import { getMockData } from '../ProjectMokData'
import styled from 'styled-components'

const TableCont = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #ddd;
  overflow: hidden;
  width: 100%;
  margin: auto;
`

const TableRow = styled.div`
  display: flex;
  border-bottom: 1px solid #ddd;
  padding: 8px 0;
`

const TableCell = styled.div`
  flex: 1;
  padding: '8px';
  text-align: center;
`

const Button = styled.button`
  background-color: tomato;
  margin: 5px;
`

export default function TableList() {
  const [applyData, setApplyData] = useState([])

  useEffect(() => {
    getMockData().then((response) => setApplyData(response));
  }, [])
  return (
    <TableCont>
        {/* 헤더 */}
        <TableRow>
          <TableCell>신청 날짜</TableCell>
          <TableCell>프로젝트명</TableCell>
          <TableCell>인원 달성률</TableCell>
          <TableCell>상태</TableCell>
          <TableCell></TableCell>
        </TableRow>
        {/* 데이터 */}
        {applyData.map((row) => (
          <TableRow key={row.id}>
            <TableCell>{row.date}</TableCell>
            <TableCell>{row.title}</TableCell>
            <TableCell>
              <span>{row.currentMembers}</span>
              <span>/</span>
              <span>{row.totalMembers}</span>
            </TableCell>
            <TableCell>
              {row.status}
            </TableCell>
            <TableCell>
              <Button>내 지원서</Button>
              <Button>취소</Button>
            </TableCell>
          </TableRow>
        ))}
      </TableCont>
  )
}
