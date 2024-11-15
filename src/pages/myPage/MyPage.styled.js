import styled from 'styled-components';

export const PageContainer = styled.div`
    display: flex;
    gap: 20px;
    padding: 20px;
`;

export const LeftSection = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

export const RightSection = styled.div`
    flex: 2;
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

export const UserInfoSection = styled.section`
    background-color: #fff;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export const PurchaseManagementSection = styled.section`
    padding: 20px;
    border: 1px solid #e8e8e8;
    border-radius: 5px;
`;

export const BudgetSection = styled.section`
    padding: 20px;
    border-radius: 5px;
    background-color: #f8f8f8;
`;

export const MenuSection = styled.section`
    background-color: #fff;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export const HistorySection = styled.section`
    padding: 20px;
`;

export const SectionTitle = styled.h3`
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 15px;
`;