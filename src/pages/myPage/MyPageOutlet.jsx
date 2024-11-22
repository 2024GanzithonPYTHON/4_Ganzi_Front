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
import ProjectLiked from './routerPages/Project/ProjectLiked';
import ProjectApply from './routerPages/Project/ProjectApply';
import ProjectHistory from './routerPages/Project/ProjectHistory';
import ProjectRecruit from './routerPages/Project/ProjectRecruit';
import PaperPurchases from './routerPages/paper/PaperPurchases';
import PaperShared from './routerPages/paper/PaperShared';

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
                    <Route path='project/like' element={<ProjectLiked/>} />
                    <Route path='project/apply' element={<ProjectApply/>}/>
                    <Route path='project/history' element={<ProjectHistory/>}/>
                    <Route path='project/recruit' element={<ProjectRecruit/>}/>
                    <Route path='paper/purchases' element={<PaperPurchases/>}/>
                    <Route path='paper/shared' element={<PaperShared/>}/>
                </Routes>
            </RightSection>
        </PageContainer>
    );
};

export default MyPage;