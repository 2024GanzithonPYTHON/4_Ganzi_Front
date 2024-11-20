import React, { useState, useEffect } from "react";
import { Card, CardTitleSection, Wrapper, Profile, CardImg, PeopleSection } from "./ListItemShort.styled";
import { getMockData } from "../ProjectMokData";
import profile from '../../../../../assets/profileIcon.png'

export default function ListItemSort({filter}) {
  const [projectData, setProjectData] = useState([]);

  useEffect(() => {
    console.log('filter 값: ', filter);
  }, [filter])

  useEffect(() => {
    getMockData().then((response) => setProjectData(response));
  }, [])

  return (
    <Wrapper>
      {projectData.map((item) => (
        <Card>
          <CardImg src={item.image} alt={item.title} />
          <CardTitleSection>
            <h4>{item.title}</h4>
            <p>{item.summary}</p>
          </CardTitleSection>
          <PeopleSection>
            <Profile src={profile} alt="" />
            <span>
              {item.currentMembers}/{item.totalMembers}
            </span>
          </PeopleSection>
        </Card>
      ))}
    </Wrapper>
  )
}
