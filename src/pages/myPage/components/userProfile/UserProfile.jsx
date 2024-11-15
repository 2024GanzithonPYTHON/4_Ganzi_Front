import React from 'react';
import { BalanceBox, BalanceContainer, UserInfoContainer, UserName, UserProfileContainer, UserTextContainer } from './UserProfile.styled';

const UserProfile = () => (
    <UserProfileContainer>
        <UserInfoContainer>
            <img src="user_profile_image_path" alt="User Profile" />
            <UserTextContainer>
                <UserName>이수혁님</UserName>
                <p>cris4y</p>
            </UserTextContainer>
        </UserInfoContainer>
        <BalanceContainer>
            <BalanceBox>캐시</BalanceBox>
            <BalanceBox>정산금</BalanceBox>
        </BalanceContainer>
        <div>페이 설정, 내정보, 카드/계좌, 쇼핑MY</div>
        <div>쇼핑MY, 찜한상품 최근본상품 상품리뷰</div>
    </UserProfileContainer>
);

export default UserProfile;