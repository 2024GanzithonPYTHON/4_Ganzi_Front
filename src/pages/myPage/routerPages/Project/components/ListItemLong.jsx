import React, { useEffect, useState } from 'react'
import { getMockData } from '../ProjectMokData'
import styled from 'styled-components';

const LongListItem = styled.div`
  display: flex;
`

export default function ListItemLong({filter}) {
  const[ projectData, setProjectData ] = useState([]);

  useEffect(() => {
    getMockData().then((response) => setProjectData(response))
  }, [filter])

  useEffect(() => {
    console.log('filter 값: ', filter);
  }, [filter])

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
