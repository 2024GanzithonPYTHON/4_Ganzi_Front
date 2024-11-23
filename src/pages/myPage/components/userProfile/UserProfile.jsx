import React, { useEffect, useState } from 'react';
import { BalanceBox, BalanceContainer, PaySettingBox, SettingMenu, SettingMenuContainer, UserInfoContainer, UserName, UserProfileContainer, UserProfileImg, UserTextContainer } from './UserProfile.styled';
import { FiSettings } from 'react-icons/fi';

const UserProfile = () => {
    const [userInfo, setUserInfo] = useState({
        username: "",
        profileImg: "",
        email: ""
    });

    useEffect(() => {
        const userInfoJson = sessionStorage.getItem("userInfo");
        if (userInfoJson) {
            const userInfo = JSON.parse(userInfoJson);
            setUserInfo({
                username: userInfo.name,
                profileImg:userInfo.profileImg,
                email:userInfo.email
            });
        }
    }, [])

    return (
    <UserProfileContainer>
        <UserInfoContainer>
            <UserProfileImg 
                src={userInfo.profileImg} />
            <UserTextContainer>
                <UserName>{userInfo.username}님</UserName>
                <p>{userInfo.email}</p>
            </UserTextContainer>
        </UserInfoContainer>
        <BalanceContainer>
            <BalanceBox>
                <span>캐시</span>
                <div>○○○ &gt;</div>
                <button>어쩌구</button>
            </BalanceBox>
            <BalanceBox>
                <span>정산금</span>
                <div>○○○ &gt;</div>
                <button>어쩌구</button>
            </BalanceBox>
        </BalanceContainer>
        <PaySettingBox>
            <div className="icon">
                <FiSettings style={{ color: 'white', fontSize: '20px' }} />
                <span>페이 설정</span>
            </div>
            <div className="arrow">내정보, 카드/계좌 &gt;</div>
        </PaySettingBox>
        <PaySettingBox
            backgroundColor='white'
            color='black'>
            <div className="icon">
                <span>쇼핑MY</span>
                <div className="arrow">&gt;</div>
            </div>
            <SettingMenuContainer>
                <SettingMenu>찜한상품</SettingMenu>
                <SettingMenu>최근본상품</SettingMenu>
                <SettingMenu>상품리뷰</SettingMenu>
            </SettingMenuContainer>
        </PaySettingBox>
    </UserProfileContainer>
    );
};

export default UserProfile;