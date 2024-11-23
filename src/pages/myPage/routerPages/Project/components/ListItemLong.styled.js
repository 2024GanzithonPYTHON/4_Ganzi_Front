import styled from 'styled-components';

export const LongListItem = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: 17px 0;
  padding: 20px;
  border: 1px solid #D8D8D8;
`

export const LongListImgBox = styled.div`
  display: flex;
  width: 23%;
  height: 157px;
  margin-right: 30px;
  img {
    display: flex;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

export const LongListContBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 70%;
  padding: 10px 0;
  
  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    h4 {
      font-size: 20px;
    }

    p{
      font-size: 14px;
    }
  }
`