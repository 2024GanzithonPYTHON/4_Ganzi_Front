import React from 'react';
import {
    PageContainer,
    LeftSection,
    RightSection,
    UserInfoSection,
    MenuSection,
    SectionTitle,
} from './MyPage.styled';
import UserProfile from './components/userProfile/UserProfile';
import ProjectList from './components/menuList/MenuList';
import { Routes, Route } from 'react-router-dom';
import MyPageHome from './routerPages/home/MyPageHome';
import ProjectLiked from './routerPages/likeProject/ProjectLiked';

const MyPage = () => {
    return (
        <PageContainer>
            <LeftSection>
                <UserInfoSection>
                    <UserProfile />
                </UserInfoSection>
                <MenuSection>
                    <SectionTitle>내 프로젝트/비법서</SectionTitle>
                    <ProjectList />
                </MenuSection>
            </LeftSection>
            <RightSection>
                <Routes>
                    <Route path='/' element={<MyPageHome/>} />
                    <Route path='project/like' element={<ProjectLiked/>}/>
                </Routes>
            </RightSection>
        </PageContainer>
    );
};

export default MyPage;