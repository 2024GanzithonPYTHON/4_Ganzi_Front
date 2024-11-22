import React, { useEffect, useState } from 'react'
import { getMockData } from '../ProjectMokData';
import ToggleComponent from './ToggleComponent';
import { LongListContBox, LongListImgBox, LongListItem } from './ListItemLong.styled';

export default function ToggleList() {
  const [projectData, setProjectData] = useState([]);

  useEffect(() => {
    getMockData().then((response) => setProjectData(response));
  }, [])

  return (
    <>
      {projectData.map((item) => (
        <div>
          <LongListItem style={{marginBottom: 0}}>
            <LongListImgBox>
              <img src={item.image}/>
            </LongListImgBox>
            <LongListContBox>
              <div>
                <h4>{item.title}</h4>
                <p>{item.date}</p>
              </div>
              <p>{item.summary}</p>
            </LongListContBox>
          </LongListItem>
          <ToggleComponent id={item.id}/>
        </div>
      ))}
    </>
  )
}
