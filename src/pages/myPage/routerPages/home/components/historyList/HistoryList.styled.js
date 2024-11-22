import styled from 'styled-components';

export const HistoryItem = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 10px 0 8px;
    font-size: 18px;
`;

export const Points = styled.span`
    color: ${(props) => props.color || "#007bff"};
    font-weight: bold;
`;

export const HistoryItemBox = styled.div`
    margin-top: 16px;
`