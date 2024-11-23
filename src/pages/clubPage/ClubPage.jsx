import React from 'react';
import {
    PageContainer,
    CategoryTitle,
} from './ClubPage.styled';
import { SearchContainer } from './components/searchContainer/SearchContainer';
import { AIBanner } from './components/aiBanner/AIBanner';
import { ProjectsForAD } from './components/ProjectsForAD/ProjectsForAD';
import { ProjectsForAll } from './components/ProjectsForAll/ProjectsForAll';

const ClubPage = () => {
    return (
        <PageContainer>
            <SearchContainer />
            <AIBanner />
            <CategoryTitle>카테고리1</CategoryTitle>
            <ProjectsForAD />
            <ProjectsForAll />
        </PageContainer>
    );
};

export default ClubPage;