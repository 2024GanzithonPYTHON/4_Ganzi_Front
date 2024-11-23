import { useNavigate } from "react-router-dom";
import PostCarousel from "./PostPopularCarousel";
import {
  PopularSection,
  SectionTitle,
  SectionSubtitle,
  MoreIcon,
} from "../../MainPage.styled";
import { BiChevronRight } from "react-icons/bi";

import { useState, useEffect } from "react";
import { readAllPapers } from "../../../../server/paper";

const PopularItems = () => {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPopularPosts = async () => {
      try {
        const result = await readAllPapers();
        setPosts(result);
      } catch (error) {
        console.error("인기 비법서 불러오기 에러", error);
      }
    };

    fetchPopularPosts();
  }, []);

  return (
    <PopularSection>
      <SectionTitle>
        인기있는 정보 공유{" "}
        <MoreIcon>
          <BiChevronRight onClick={() => navigate("/paper")} />
        </MoreIcon>
      </SectionTitle>
      <SectionSubtitle>
        소중한 정보는 누군가에게 엄청난 가치를 지녀요. 이 자료들이 여러분이 찾던
        정보일지도 모르죠!
      </SectionSubtitle>
      <PostCarousel posts={posts} />
    </PopularSection>
  );
};

export default PopularItems;
