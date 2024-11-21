import styled from "styled-components";

export const ApplyedInfoWrapper = styled.div`
  border: 1px solid #D8D8D8;
  padding: 20px 0;
`

export const ApplyedInfoBox = styled.div`
  display: flex;
  padding: 0 20px;
  justify-content: space-between;
`

export const ApplyedInfoItem = styled.div`
  display: flex;
  align-items: center;
`

export const Profile = styled.img`
  width: 15px;
  height: 15px;
  margin-right: 10px;
  margin-left: 15px;
`

export const ToggleBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 38px;
  border-radius: 5px;
  background-color: #FFE048;
  font-size: 14px;

  div {
    display: flex;
    align-items: center;
  }

  img {
    margin-left: 8px;
  }
`

export const ApplyedPeopleBox = styled.div`
  margin: 30px 20px;
`

export const FilterBtn = styled.button`
  padding: 8px 20px;
  margin-bottom: 20px;
  border-radius: 5px;
  border: 2px solid #FFE048;
  font-size: 12px;
  background-color: ${(props) => (props.isFiltered ? '#FFE048' : '#fff')}
`