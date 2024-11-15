import React from 'react';
import {
    PageContainer,
    SearchBar,
    FilterContainer,
    FilterButton,
    AIBanner,
    BannerText,
    BannerHighlight,
    CategoryTitle,
    ProjectsGrid,
    ProjectCard,
    CardImage,
    CardTitle,
    CardInfo
} from './ClubPage.styled';

const ClubPage = () => {
    return (
        <PageContainer>
            <SearchBar placeholder="어쩌구 저쩌구를 검색해보세요!" />
            <FilterContainer>
                {["전체", "디자인 문구", "홈/리빙", "캐릭터/굿즈", "파티/행사", "출판", "의류", "카테고리1"].map((filter, index) => (
                    <FilterButton key={index}>{filter}</FilterButton>
                ))}
                <button>등록하기</button>
            </FilterContainer>
            <AIBanner>
                <BannerText>AI와 함께하는 ???</BannerText>
                <BannerHighlight>모든 게시물을 일일이 확인하기 힘드신가요? ??? 서비스의 AI 한 줄 요약 서비스를 통해 간단하게 내용을 확인해보세요!</BannerHighlight>
            </AIBanner>
            <CategoryTitle>카테고리1</CategoryTitle>
            <ProjectsGrid>
                {[...Array(2)].map((_, index) => (
                    <ProjectCard key={index}>
                        <CardImage src="project_image_path" alt="Project" />
                        <CardTitle>제목1</CardTitle>
                        <CardInfo>한줄 소개한줄 소개한줄 소개한줄 소개</CardInfo>
                    </ProjectCard>
                ))}
            </ProjectsGrid>
            <ProjectsGrid>
                {[...Array(12)].map((_, index) => (
                    <ProjectCard key={index}>
                        <CardImage src="project_image_path" alt="Project" />
                        <CardTitle>제목1</CardTitle>
                        <CardInfo>한줄 소개한줄 소개한줄 소개한줄 소개</CardInfo>
                    </ProjectCard>
                ))}
            </ProjectsGrid>
        </PageContainer>
    );
};

export default ClubPage;