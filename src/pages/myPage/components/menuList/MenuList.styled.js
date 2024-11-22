import styled from 'styled-components';

export const MenuContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

export const Section = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

export const SectionHeader = styled.h1`
    font-size: 18px;
    font-weight: bold;
    margin: 0;
    color: black;
`;

export const Divider = styled.hr`
    border: none;
    height: 1px;
    background-color: black;
    margin: 10px 0;
`;

export const LinkItem = styled.p`
    font-size: 16px;
    margin: 0;
    font-weight: ${({ bold }) => (bold ? 'bold' : 'normal')};
    color: black;
    cursor: pointer;

    &:hover {
        text-decoration: underline;
    }
`;