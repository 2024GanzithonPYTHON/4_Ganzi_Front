import { useNavigate } from "react-router-dom";
import PostCarousel from "../PostCarousel";
import {
  PopularSection,
  SectionTitle,
  SectionSubtitle,
  MoreIcon,
} from "../../MainPage.styled";
import { BiChevronRight } from "react-icons/bi";

const PopularItems = () => {
  const navigate = useNavigate();
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
      <PostCarousel posts={[...Array(13)]} />
    </PopularSection>
  );
};

export default PopularItems;
