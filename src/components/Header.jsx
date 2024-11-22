import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import logo from "../assets/logo.svg";
import profileIcon from "../assets/profileIcon.png";

const HeaderContainer = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: 80px;
  padding: 0 50px;

  color: black;
  border-bottom: 1px solid black;

  p,
  img {
    &:hover {
      cursor: pointer;
    }
  }
`;

const ItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;

const UserNameContainer = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
`;

const LoginContainer = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 10px;
`;

export function Header() {
  const navigate = useNavigate();
  const [isLoginned, setIsLoginned] = useState(false);

  useEffect(() => {
    if (!isLoginned) {
      navigate("/");
    }
  }, [isLoginned, navigate]);

  const handleLogin = () => {
    setIsLoginned(!isLoginned);
  };

  const toFindClub = () => {
    navigate("/club");
  };

  const toFindPaper = () => {
    navigate("/paper");
  };

  const toMain = () => {
    navigate("/");
  };

  const toMypage = () => {
    isLoginned && navigate("/my");
  };

  const toAbout = () => {
    navigate("/about");
  };
  return (
    <HeaderContainer>
      <ItemContainer>
        <img src={logo} alt="logo" width={"150px"} onClick={toMain} />
      </ItemContainer>
      <ItemContainer>
        <p onClick={toAbout}>ABOUT</p>
        <p onClick={toFindClub}>모집 찾기</p>
        <p onClick={toFindPaper}>비법서 찾기</p>
        <LoginContainer>
          <UserNameContainer>
            <img src={profileIcon} alt="로그인 아이콘" onClick={toMypage} />
            {isLoginned && <p onClick={toMypage}>개똥이님</p>}
          </UserNameContainer>
          <p onClick={handleLogin}>{isLoginned ? "로그아웃" : "로그인"}</p>
        </LoginContainer>
      </ItemContainer>
    </HeaderContainer>
  );
}
