import React, { useEffect, useState } from "react";
import { getMockRecruitData } from "../ProjectMokData";
import profile from '../../../../../assets/profileIcon.png'
import { ApplyedInfoWrapper, ApplyedInfoBox, ApplyedInfoItem, Profile, ToggleBtn, FilterBtn, ApplyedPeopleBox } from "./Toggle.styled.js";
import tr from '../assets/tr.svg'
import CommentComponent from "./CommentComponent.jsx";
import { getApplicant } from "../../../../../server/applicant.js";
import { getRecruitProjects } from "../../../../../server/project.js";

function ToggleComponent({id, member, maxMember,totalApply, remain, outstanding}) {
  const [isOpen, setIsOpen] = useState(false); // 초기 상태: 닫힘
  const [recruitData, setRecruitData] = useState([])
  const [isFiltered, setIsFiltered] = useState(true);

  // 토글 함수
  const toggleHandler = () => {
    setIsOpen((prev) => !prev); // 상태를 반전
  };

  const filterHandler = () => {
    setIsFiltered((prev) => !prev);
  }

  useEffect(() => {
    getApplicant(id).then((response) => setRecruitData(response))
  }, []);

  useEffect(() => {
    getRecruitProjects().t
  })

  return (
    <ApplyedInfoWrapper>
      <ApplyedInfoBox>
        <ApplyedInfoItem>
          <span>모집/정원</span>
          <Profile src={profile}/>
          <span>{member}/{maxMember}</span>
        </ApplyedInfoItem>
        <ApplyedInfoItem>
          <span>총 지원</span>
          <Profile src={profile} />
          <span>{totalApply}</span>
        </ApplyedInfoItem>
        <ApplyedInfoItem>
          <span>남은 인원</span>
          <Profile src={profile} />
          <span>{remain}</span>
        </ApplyedInfoItem>
        <ApplyedInfoItem>
          <span>대기</span>
          <Profile src={profile} />
          <span>{outstanding}</span>
        </ApplyedInfoItem>
        <ToggleBtn onClick={toggleHandler}>
          {isOpen ? (
            <div>
              접기
              <img src={tr} />
            </div>
          ) : (
            <div>
              자세히
              <img src={tr} style={{ transform: 'scaleY(-1)'}}/>
            </div>
          )}
        </ToggleBtn>
      </ApplyedInfoBox>
      {isOpen && ( // isOpen이 true일 때만 렌더링
        <ApplyedPeopleBox>
          <FilterBtn
          onClick={filterHandler}
          isFiltered={isFiltered}>대기 중</FilterBtn>
          {recruitData.map((item) => (
            <CommentComponent item={item}/>
          ))}
        </ApplyedPeopleBox>
      )}
    </ApplyedInfoWrapper>
  );
}

export default ToggleComponent;
