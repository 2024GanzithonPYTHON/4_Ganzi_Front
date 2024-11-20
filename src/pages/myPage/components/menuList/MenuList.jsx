import React from 'react';
import { Link } from 'react-router-dom';
import { MenuContainer, Section, SectionHeader, Divider, LinkItem } from './MenuList.styled';

const MenuList = () => (
    <MenuContainer>
        <Section>
            <SectionHeader>Project</SectionHeader>
            <Divider />
            <LinkItem>
                <Link to="/my/project/like">찜한 프로젝트</Link>
            </LinkItem>
            <LinkItem>
                <Link to="/my/project/apply">지원한 프로젝트</Link>
            </LinkItem>
            <LinkItem>
                <Link to="/my/project/history">참여한 프로젝트</Link>
            </LinkItem>
            <LinkItem>
                <Link to="/my/project/recruit">모집 중인 프로젝트</Link>
            </LinkItem>
        </Section>

        <Section>
            <SectionHeader>비법서</SectionHeader>
            <Divider />
            <LinkItem>
                <Link to="/my/paper/purchases">구매 내역</Link>
            </LinkItem>
            <LinkItem>
                <Link to="/my/paper/shared">내가 공유한 비법서</Link>
            </LinkItem>
        </Section>
    </MenuContainer>
);

export default MenuList;