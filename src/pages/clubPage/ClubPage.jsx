import React, { useEffect, useState } from 'react';
import {
    PageContainer,
    CategoryTitle,
} from './ClubPage.styled';
import { SearchContainer } from './components/searchContainer/SearchContainer';
import { AIBanner } from './components/aiBanner/AIBanner';
import { ProjectsForAD } from './components/ProjectsForAD/ProjectsForAD';
import { ProjectsForAll } from './components/ProjectsForAll/ProjectsForAll';
import { readProjectListAll, readProjectListCategory } from '../../server/project';

const ClubPage = () => {
    const [category, setCategory] = useState("");
    const [projects, setProjects] = useState([
        {
            "id": 0,
            "title": "",
            "memberCount": 0,
            "memberCountMax": 0,
            "thumbnail": "",
            "aiDescription": "",
            "createdAt": "2000-01-01T00:00:00"
        }
    ]);

    const [adProjects, setAdProjects] = useState([]);

    useEffect(() => {
        const fetchProjects = async () => {
            let response = "";
            if (category === "") {
                response = await readProjectListAll();
            } else {
                response = await readProjectListCategory(category);
            }
            setProjects(response);

            const shuffled = response.sort(() => 0.5 - Math.random());
            setAdProjects(shuffled.slice(0, 2));
        };
        fetchProjects();
    }, [category]);

    return (
        <PageContainer>
            <SearchContainer onCategory={setCategory} />
            <AIBanner />
            <CategoryTitle>카테고리1</CategoryTitle>
            <ProjectsForAD projects={adProjects} />
            <ProjectsForAll projects={projects} />
        </PageContainer>
    );
};

export default ClubPage;