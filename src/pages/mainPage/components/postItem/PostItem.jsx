import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Comment, TextContainer } from "../../MainPage.styled";
import UploadIcon from "../../assets/file-upload.svg";

const PostItemContainer = styled.div`
  display: flex;
  justify-content: start;
  gap: 80px;
  padding: 40px;
  margin-bottom: 50px;
`;

const PostCommentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 30px;
`;

const PostIcon = styled.img`
  cursor: pointer;
`;

const PostItem = () => {
  const navigate = useNavigate();
  return (
    <PostItemContainer>
      <PostIcon
        src={UploadIcon}
        alt="파일업로드 아이콘"
        onClick={() => navigate("/paper/apply")}
      />
      <PostCommentContainer>
        <Comment>여러분의 소중한 자료</Comment>
        <TextContainer>
          <p>다른 사람에게도 매우 가치있는 자료입니다</p>
          <p>
            쉽고 빠르게 자료를 업로드하고 <b>수익을 만들어보세요!</b>
          </p>
        </TextContainer>
      </PostCommentContainer>
    </PostItemContainer>
  );
};

export default PostItem;
