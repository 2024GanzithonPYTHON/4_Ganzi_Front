import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  padding: 30px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-top: 1px solid #000;
`

export const DescriptSection = styled.div`
  display: flex;
  width: 65%;
  flex-direction: column;
  justify-content: center;
  height: 100px;
  margin: 20px;

  h3 {
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 30px;
  }

  div {
    display: flex;
    flex-direction: column;
    font-size: 16px;
  }
`

export const ToPage = styled.a`
  margin-bottom: 10px;
  font-weight: 600;
  text-decoration-line: underline;
`

export const ToProjectBtn = styled.button`
  display: flex;
  padding: 10px;
  width: 30%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 2px solid #00A8CC;
  border-radius: 10px;
  font-size: 18px;
`