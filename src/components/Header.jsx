import styled from "styled-components";
import logo from "../assets/logo.svg"

const HeaderContainer = styled.header`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    width: 100%;
    height: 50px;

    background-color: #333;
    color: white;
`

const ItemContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 10px;
`


export function Header() {
    return (
        <HeaderContainer>
            <ItemContainer>
                <img src={logo} alt="logo" width={'100px'} />
            </ItemContainer>
            <ItemContainer>
                <p>모집 찾기</p>
                <p>비법서 찾기</p>
                <p>메뉴3</p>
            </ItemContainer>
        </HeaderContainer>
    );
}