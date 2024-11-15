import React from 'react';
import {
    TrendingSection,
    SectionTitle,
    SectionSubtitle,
    ProjectsContainer,
    StyledProjectCard
} from './TrendingProjects.styled';

const TrendingProjects = () => {
    return (
        <TrendingSection>
            <SectionTitle>요즘 뜨고 있는 모집 &gt;</SectionTitle>
            <SectionSubtitle>어떤 모집을 찾을지 고민되시나요? 사람들이 많이 관심 가진 모집을 확인해보세요!</SectionSubtitle>
            <ProjectsContainer>
                <StyledProjectCard title="제목1" imgSrc="image1_path" />
                <StyledProjectCard title="제목1" imgSrc="image2_path" />
                <StyledProjectCard title="제목1" imgSrc="image3_path" />
                <StyledProjectCard title="제목1" imgSrc="image4_path" />
            </ProjectsContainer>
        </TrendingSection>
    );
};

export default TrendingProjects;