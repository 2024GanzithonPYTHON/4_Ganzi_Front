import PostCarousel from "../PostCarousel";
import { useNavigate } from "react-router-dom";
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
        요즘 뜨고 있는 모집{" "}
        <MoreIcon>
          <BiChevronRight onClick={() => navigate("/club")} />
        </MoreIcon>
      </SectionTitle>
      <SectionSubtitle>
        어떤 모집을 찾을지 고민되시나요? 사람들이 많이 관심 가진 모집을
        확인해보세요!
      </SectionSubtitle>
      <PostCarousel posts={[...Array(8)]} />
    </PopularSection>
  );
};

export default PopularItems;
