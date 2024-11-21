import styled from "styled-components"

export const TitleSection = styled.div`
display: flex;
padding: 16px;
flex-direction: column;
align-items: start;
gap: 10px;
`

export const MainTitle = styled.h3`
  margin: 5px 0;
  font-size: 25px;
  font-weight: 600;
`

export const SubTitle = styled.p`
  display: flex;
  font-size: 20px;
`

export const ListSection = styled.div`
  display: flex;
  flex-direction: column;
`

export const StatusSection = styled.div`
  display: flex;
  justify-content: center;
  padding: 0 16px 20px;
`

export const LongListSection = styled.div`
  display: flex;
  width: 100%;
  padding: 0 16px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const FilterSection = styled.div`
  width: 100%;
  padding: 4px 16px;
  display: flex;
  justify-content: right;
  align-items: center;

  .middle-bar {
    margin: 0 5px;
  }
`

export const FilterItem = styled.span`
  font-size: 14px;
  cursor: pointer;

  color: ${(props) => (props.isActive ? "#0064FF" : "#000")};
  font-weight: ${(props) => (props.isActive ? '700' : '')};
`

export const StatusItem = styled.div`
  width: 150px;
  height: 90px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
  border-right: 1px solid #757575;

  &:last-child {
    border: none;
  }

  p {
    font-size: 18px;
  }

  span {
    font-size: 50px;
    font-weight: 500;
  }
`