import PostCarousel from "./PostTrendingCarousel";
import { useNavigate } from "react-router-dom";
import {
  PopularSection,
  SectionTitle,
  SectionSubtitle,
  MoreIcon,
} from "../../MainPage.styled";
import { BiChevronRight } from "react-icons/bi";

import { useState, useEffect } from "react";
import { readProjectPopular } from "../../../../server/project";

const PopularItems = () => {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPopularPosts = async () => {
      try {
        const result = await readProjectPopular();
        console.log("Fetched result:", result);
        setPosts(result);
      } catch (error) {
        console.error("인기 프로젝트 불러오기 에러", error);
      }
    };

    fetchPopularPosts();
  }, []);

  return (
    <PopularSection>
      <SectionTitle>
        요즘 뜨고 있는 모집{" "}
        <MoreIcon>
          <BiChevronRight onClick={() => navigate("/club")} />
        </MoreIcon>
      </SectionTitle>
      <SectionSubtitle>
        어떤 모집을 찾을지 고민되시나요? 사람들이 많이 관심 가진 모집을
        확인해보세요!
      </SectionSubtitle>
      <PostCarousel posts={posts} />
    </PopularSection>
  );
};

export default PopularItems;
