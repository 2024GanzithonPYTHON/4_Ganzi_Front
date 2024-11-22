import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 16px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  
`

export const Card = styled.div`
  border: 1px solid gray;
`

export const CardImg = styled.img`
  width: 100%;
  aspect-ratio: 1/1;
  object-fit: contain;
`

export const CardTitleSection = styled.div`
  padding: 10px;

  h4 {
    font-size: 18px;
    font-weight: 700;
    margin-bottom: 10px;
  }
`
export const PeopleSection = styled.div`
  display: flex;
  justify-content: right;
  align-items: center;
  padding: 10px 20px;
`
export const Profile = styled.img`
  display: flex;
  align-items: center;
  width: 15px;
  height: 15px;
  margin-right: 10px;
`