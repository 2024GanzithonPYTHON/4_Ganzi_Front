import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const PostProjectContinaer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;
`;

const Button = styled.button`
  background-color: #00a8cc;
  color: #000;
  border: none;
  border-radius: 10px;
  padding: 10px 20px;
`;

const PostProject = () => {
  const navigate = useNavigate();
  return (
    <PostProjectContinaer>
      <h2>같이 하고 싶은 사이드 프로젝트가 있나요?</h2>
      <p>프로젝트 고민은 이제 그만!</p>
      <Button onClick={() => navigate("/club/register")}>
        무료로 프로젝트 등록
      </Button>
    </PostProjectContinaer>
  );
};

export default PostProject;
