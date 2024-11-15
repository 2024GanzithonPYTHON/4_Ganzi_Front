import React from 'react';
import {
    PageContainer,
    LeftSection,
    RightSection,
    UserInfoSection,
    PurchaseManagementSection,
    MenuSection,
    HistorySection,
    SectionTitle,
    BudgetSection
} from './MyPage.styled';
import UserProfile from './components/userProfile/UserProfile';
import PurchaseItemList from './components/purchaseItemList/PurchaseItemList';
import ProjectList from './components/menuList/MenuList';
import HistoryList from './components/historyList/HistoryList';
import MyBudgetInfo from './components/myBudgetInfo/MyBudgetInfo';

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
                <SectionTitle>구매 관리</SectionTitle>
                <BudgetSection>
                    <MyBudgetInfo />
                </BudgetSection>
                <PurchaseManagementSection>
                    <SectionTitle>내역을 한눈에 확인해보세요!</SectionTitle>
                    <PurchaseItemList />
                </PurchaseManagementSection>
                <HistorySection>
                    <SectionTitle>전체 내역</SectionTitle>
                    <HistoryList />
                </HistorySection>
            </RightSection>
        </PageContainer>
    );
};

export default MyPage;