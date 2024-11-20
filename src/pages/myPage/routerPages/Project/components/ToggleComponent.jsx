import React, { useEffect, useState } from "react";
import { getMockRecruitData } from "../ProjectMokData";

const CommentComponent = ({item}) => {
  const [isModalOpen, setIstModalOpen] = useState(false);

  return {

  }
}

function ToggleComponent({id}) {
  const [isOpen, setIsOpen] = useState(false); // 초기 상태: 닫힘
  const [recruitData, setRecruitData] = useState([])

  // 토글 함수
  const toggleHandler = () => {
    setIsOpen((prev) => !prev); // 상태를 반전
  };

  console.log(id);

  useEffect(() => {
    getMockRecruitData().then((response) => setRecruitData(response))
  }, [])

  return (
    <div>
      <button onClick={toggleHandler}>
        {isOpen ? "접기" : "자세히"}
      </button>
      {isOpen && ( // isOpen이 true일 때만 렌더링
        <div style={{ marginTop: "10px", padding: "10px", border: "1px solid #ccc" }}>
          {recruitData.map((item) => (
            <div>
              <span>{item.id}</span><span>{item.userId}</span>
              <span>{item.comment.length > 30
                ? `${item.comment.slice(0, 30)}...`
                : item.comment}
              </span>
              {/* 더보기버튼 만들어야 함 */}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ToggleComponent;
