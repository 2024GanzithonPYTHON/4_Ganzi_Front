import styled from 'styled-components'

export const TableCont = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  width: 100%;
  margin: auto;
`
export const TableTitleRow = styled.div`
  display: flex;
  align-items: center;
  height: 41px;
  border-radius: 5px;
  background-color: #3A3A3A;
  color: #fff;
  padding: 8px 0;
`

export const TableRow = styled.div`
  display: flex;
  align-items: center;
  height: 41px;
  border-bottom: 1px solid #ddd;
  padding: 8px 0;
`

export const TableCellSmall = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  width: 130px;
  color: ${(props) => props.Color === "승인"
  ? "#00C400"
  : props.Color === "반려"
  ? "#EE5648"
  : props.Color === '취소'
  ? "#4D4D4D"
  : "#757575"};
`
export const TableCellBig = styled.div`
  display: flex;
  width: 300px;
  padding: 8px 15px 8px auto;
  box-sizing: border-box;
  text-align: start;
`

export const TableCellBtn = styled.div`
  display: flex;
  width: 30vw;
  padding: 8px 20px;
  justify-content: right;
`

export const Button = styled.button`
  background-color: #0049B9;
  color: #fff;
  padding: 5px 14px;
  border-radius: 5px;
  margin: 5px;
`