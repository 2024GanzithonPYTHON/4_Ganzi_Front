import React, { useState, useEffect } from "react";
import { Card, CardTitleSection, Wrapper, Profile, CardImg, PeopleSection } from "./ListItemShort.styled";
import profile from '../../../../../assets/profileIcon.png'
import { getLikesProjects } from "../../../../../server/project";

export default function ListItemSort({filter}) {
  const [projectData, setProjectData] = useState([]);

  useEffect(() => {
    getLikesProjects().then((response) => setProjectData(response));
  }, [])

  return (
    <Wrapper>
      {projectData.map((item) => (
        <Card>
          <CardImg src={item.thumbNail} alt={item.shortTitle} />
          <CardTitleSection>
            <h4>{item.shortTitle}</h4>
            <p>{item.aiDescription}</p>
          </CardTitleSection>
          <PeopleSection>
            <Profile src={profile} alt="" />
            <span>
              {item.memberCount}/{item.maxMemberCount}
            </span>
          </PeopleSection>
        </Card>
      ))}
    </Wrapper>
  )
}
