import React from 'react';
import { BalanceBox, BalanceContainer, PaySettingBox, SettingMenu, SettingMenuContainer, UserInfoContainer, UserName, UserProfileContainer, UserProfileImg, UserTextContainer } from './UserProfile.styled';
import { FiSettings } from 'react-icons/fi';

const UserProfile = () => (
    <UserProfileContainer>
        <UserInfoContainer>
            <UserProfileImg 
                src="https://mblogthumb-phinf.pstatic.net/MjAyMTAzMTJfNjQg/MDAxNjE1NTI5NDE5ODk4.yxOKTxAf4mkrxbEWHopib3_XLI-EFI-7BCY91vi26TEg.NFAGxpj-t4T2hRS1dyoNrcC5DKUD4Y331ELpxJ5ghG8g.JPEG.sj330035/%EC%9D%B8%EC%8A%A4%ED%83%80%EA%B7%B8%EB%9E%A8_%ED%94%84%EC%82%AC_(1).jpeg?type=w800" 
                alt="User Profile" />
            <UserTextContainer>
                <UserName>이수혁님</UserName>
                <p>cris4y</p>
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

export default UserProfile;