import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
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
  const location = useLocation();
  const [isLoginned, setIsLoginned] = useState(false);
  const [userInfo, setUserInfo] = useState({
    nickname: "",
    profileImg: "",
  });

  useEffect(() => {
    const userInfoJSON = sessionStorage.getItem("userInfo");
    if (userInfoJSON) {
      const userInfo = JSON.parse(userInfoJSON);
      setIsLoginned(true);
      setUserInfo({
        nickname:userInfo.nickname, 
        profileImg:userInfo.profileImg
      });
  
    }
  }, [isLoginned, location]);

  const handleLogin = () => {
    if (!isLoginned) {
      navigate("/login");
      return;
    }
    sessionStorage.removeItem("userInfo");
    sessionStorage.removeItem("access");
    sessionStorage.removeItem("refresh");
    setIsLoginned(false);
    navigate("/");
  };

  const toMypage = () => {
    isLoginned && navigate("/my");
  };
  return (
    <HeaderContainer>
      <ItemContainer>
        <img src={logo} alt="logo" width={"150px"} onClick={() => navigate("/")} />
      </ItemContainer>
      <ItemContainer>
        <p onClick={() => navigate("/about")}>ABOUT</p>
        <p onClick={() => navigate("/club")}>모집 찾기</p>
        <p onClick={() => navigate("/paper")}>비법서 찾기</p>
        <LoginContainer>
          <UserNameContainer>
            <img src={profileIcon} alt="로그인 아이콘" onClick={toMypage} />
            {isLoginned && <p onClick={toMypage}>{userInfo.nickname}님</p>}
          </UserNameContainer>
          <p onClick={handleLogin}>{isLoginned ? "로그아웃" : "로그인"}</p>
        </LoginContainer>
      </ItemContainer>
    </HeaderContainer>
  );
}
