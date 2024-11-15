import Banner from './components/banner/Banner';
import PopularItems from './components/popularItems/PopularItems';
import TrendingProjects from './components/trendingProjects/TrendingProjects';
import PostProject from './components/postProject/PostProject';
import PostItem from './components/postItem/PostItem';

const MainPage = () => {
    return (
        <div>
            <Banner />
            <TrendingProjects />
            <PostProject />
            <PostItem />
            <PopularItems />
        </div>
    );
};

export default MainPage;