import Banner from "./components/banner/Banner";
import PopularItems from "./components/popularItems/PopularItems";
import TrendingProjects from "./components/trendingProjects/TrendingProjects";
import PostProject from "./components/postProject/PostProject";
import PostItem from "./components/postItem/PostItem";
import { Wrap } from "./MainPage.styled.jsx";

const MainPage = () => {
  return (
    <div>
      <Banner />
      <Wrap>
        <TrendingProjects />
        <PostProject />
        <PostItem />
        <PopularItems />
      </Wrap>
    </div>
  );
};

export default MainPage;
