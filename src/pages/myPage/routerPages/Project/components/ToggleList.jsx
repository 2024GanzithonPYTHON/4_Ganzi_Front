import React, { useEffect, useState } from 'react'
import ToggleComponent from './ToggleComponent';
import { LongListContBox, LongListImgBox, LongListItem } from './ListItemLong.styled';
import { getRecruitProjects } from '../../../../../server/project';

export default function ToggleList() {
  const [projectData, setProjectData] = useState([]);

  useEffect(() => {
    getRecruitProjects().then((response) => setProjectData(response));
  }, [])

  return (
    <>
      {projectData.map((item) => (
        <div>
          <LongListItem style={{marginBottom: 0}}>
            <LongListImgBox>
              <img src={item.thumbnail}/>
            </LongListImgBox>
            <LongListContBox>
              <div>
                <h4>{item.shortTitle}</h4>
                <p>{item.createdAt}</p>
              </div>
              <p>{item.aiDescription}</p>
            </LongListContBox>
          </LongListItem>
          <ToggleComponent id={item.id}
          member={item.memberCount}
          maxMember={item.maxMemberCount}
          totalApply={item.totalApplyMemberCount}
          remain={item.remainMemberCount}
          outstanding={item.outstandingMemberCount}/>
        </div>
      ))}
    </>
  )
}
