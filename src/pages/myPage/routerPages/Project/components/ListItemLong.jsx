import React, { useEffect, useState } from 'react'
import { getMockData } from '../ProjectMokData'
import { LongListItem, LongListImgBox, LongListContBox } from './ListItemLong.styled';
import { getJoinProjects, getLateJoinProjects } from '../../../../../server/project';

export default function ListItemLong({filter}) {
  const[ projectData, setProjectData ] = useState([]);

  useEffect(() => {
    if (filter) {
      getJoinProjects().then((response) => setProjectData(response))
    } else {
      getLateJoinProjects
    }
  }, [filter])

  useEffect(() => {
    console.log('filter 값: ', filter);
  }, [filter])

  return (
    <>
      {projectData.map((item) => (
        <LongListItem>
          <LongListImgBox>
            <img src={item.thumbNail}/>
          </LongListImgBox>
          <LongListContBox>
            <div>
              <h4>{item.shortTitle}</h4>
              <p>{item.endDate}</p>
            </div>
            <p>{item.aiDescription}</p>
          </LongListContBox>
        </LongListItem>
      ))}
    </>
  )
}
