import styled from "styled-components";
import { Comment, TextContainer } from "../../MainPage.styled";
import { useNavigate } from "react-router-dom";

const PostProjectContinaer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;
  padding: 40px;
  border-top: 3px solid #d9d9d9;
  border-bottom: 3px solid #d9d9d9;
  gap: 25px;
`;

const Button = styled.button`
  border: none;
  border-radius: 10px;
  padding: 20px;
  margin-bottom: 15px;
  background-color: #00a8cc;
  color: #ffffff;
  font-size: 20px;
  font-weight: 600;
`;

const PostProject = () => {
  const navigate = useNavigate();
  return (
    <PostProjectContinaer>
      <Comment>같이 하고 싶은 사이드 프로젝트가 있나요?</Comment>
      <TextContainer>
        <p>프로젝트 고민은 이제 그만!</p>
        <p>
          sidEGo에서 <b>알맞은 사람들</b>을 찾고, 함께 상상을 키워보세요!
        </p>
      </TextContainer>
      <Button onClick={() => navigate("/club/register")}>
        무료로 프로젝트 등록
      </Button>
    </PostProjectContinaer>
  );
};

export default PostProject;
