import styled from 'styled-components';

export const HistoryItem = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 10px 0;
    font-size: 14px;
    border-bottom: 1px solid #e0e0e0;

    &:last-child {
        border-bottom: none;
    }
`;

export const Points = styled.span`
    color: #007bff;
    font-weight: bold;
`;