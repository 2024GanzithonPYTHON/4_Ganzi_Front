import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { getMockData } from "../ProjectMokData";

const Wrapper = styled.div`
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  border: 1px solid gray;
  cursor: pointer;
`


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
        <div>
          <img src={item.image} alt={item.title} />
          <div>
            <p>{item.title}</p>
            <p>{item.summary}</p>
          </div>
          <div>
            <p>
              {item.currentMembers}/{item.totalMembers}
            </p>
          </div>
        </div>
      ))}
    </Wrapper>
  )
}
