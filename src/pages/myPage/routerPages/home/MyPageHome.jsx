import React from 'react'
import { BudgetSection, HistorySection, PurchaseManagementSection, SectionTitle } from '../../MyPage.styled'
import MyBudgetInfo from './components/myBudgetInfo/MyBudgetInfo'
import PurchaseItemList from './components/purchaseItemList/PurchaseItemList'
import HistoryList from './components/historyList/HistoryList'

export default function MyPageHome() {
  return (
    <>
      <SectionTitle>구매 관리</SectionTitle>
      <BudgetSection>
        <MyBudgetInfo/>
      </BudgetSection>
      <PurchaseManagementSection>
        <SectionTitle>내역을 한눈에 확인해보세요</SectionTitle>
        <PurchaseItemList />
      </PurchaseManagementSection>
      <HistorySection>
        <SectionTitle>전체 내역</SectionTitle>
        <HistoryList />
      </HistorySection>
    </>
  )
}
