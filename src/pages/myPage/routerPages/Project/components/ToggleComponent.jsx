import React, { useEffect, useState } from "react";
import { getMockRecruitData } from "../ProjectMokData";
import profile from '../../../../../assets/profileIcon.png'
import { ApplyedInfoWrapper, ApplyedInfoBox, ApplyedInfoItem, Profile, ToggleBtn, FilterBtn, ApplyedPeopleBox } from "./Toggle.styled.js";
import triangle from '../../home/assets/triangle-icon.svg'
import CommentComponent from "./CommentComponent.jsx";

function ToggleComponent({id}) {
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

  console.log(id);

  useEffect(() => {
    getMockRecruitData().then((response) => setRecruitData(response))
  }, [])

  return (
    <ApplyedInfoWrapper>
      <ApplyedInfoBox>
        <ApplyedInfoItem>
          <span>모집/정원</span>
          <Profile src={profile}/>
          <span>2/8</span>
        </ApplyedInfoItem>
        <ApplyedInfoItem>
          <span>총 지원</span>
          <Profile src={profile} />
          <span>9</span>
        </ApplyedInfoItem>
        <ApplyedInfoItem>
          <span>남은 인원</span>
          <Profile src={profile} />
          <span>6</span>
        </ApplyedInfoItem>
        <ApplyedInfoItem>
          <span>대기</span>
          <Profile src={profile} />
          <span>8</span>
        </ApplyedInfoItem>
        <ToggleBtn onClick={toggleHandler}>
          {isOpen ? (
            <div>
              접기
              <img src={triangle} />
            </div>
          ) : (
            <div>
              자세히
              <img src={triangle} style={{ transform: 'scaleY(-1)'}}/>
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
