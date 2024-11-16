import React, { useEffect, useState } from 'react'
import { getMockData } from '../ProjectMokData'
import styled from 'styled-components';

const LongListItem = styled.div`
  display: flex;
`

export default function PjListItemLong() {
  const[ projectData, setProjectData ] = useState([]);

  useEffect(() => {
    getMockData().then((response) => setProjectData(response))
  }, [])

  return (
    <div>
      {projectData.map((item) => (
        <LongListItem>
          <div>
            <img src={item.image}/>
          </div>
          <div>
            <h4>{item.title}</h4>
            <p>{item.date}</p>
          </div>
          <p>{item.summary}</p>
        </LongListItem>
      ))}
    </div>
  )
}
