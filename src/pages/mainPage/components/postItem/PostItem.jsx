import styled from "styled-components";

const PostItemContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: start;
    gap: 20px;
`

const PostItem = () => {
    return (
        <PostItemContainer>
            <img src="/vite.svg" alt="placeholder" />
            <div>
                <h2>여러분의 소중한 자료</h2>
                <p>다른 사람들에게도 매우 가치있는 자료 모시기</p>
            </div>
        </PostItemContainer>
    );
};

export default PostItem;