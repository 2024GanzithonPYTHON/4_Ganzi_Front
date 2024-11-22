import React, { useEffect, useState } from 'react'
import { getMockData } from '../ProjectMokData'
import { LongListItem, LongListImgBox, LongListContBox } from './ListItemLong.styled';

export default function ListItemLong({filter}) {
  const[ projectData, setProjectData ] = useState([]);

  useEffect(() => {
    getMockData().then((response) => setProjectData(response))
  }, [filter])

  useEffect(() => {
    console.log('filter 값: ', filter);
  }, [filter])

  return (
    <>
      {projectData.map((item) => (
        <LongListItem>
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
      ))}
    </>
  )
}
