import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import mockData from "./mockData";
import BannerCard from "./BannerCard";
import styled from "styled-components";
import { useState, useEffect } from "react";
import { readProjectListAll } from "../../../../server/project";

const StyledCarousel = styled.div`
  .slick-dots {
    position: absolute;
    top: 100px;
    left: 0px;

    li {
      width: 10px;
      height: 10px;
      margin-bottom: 10px;
      background-color: #adadad;
      border-radius: 50%;
      cursor: pointer;

      &.slick-active {
        background-color: #00a8cc;
      }
    }
  }

  .slick-slide {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const BannerCarousel = () => {
  const [verticalPosts, setVerticalPosts] = useState([]);

  useEffect(() => {
    const fetchPopularPosts = async () => {
      try {
        const result = await readProjectListAll();
        const fivePosts = result.slice(-5);
        setVerticalPosts(fivePosts);
      } catch (error) {
        console.error("세로 캐러셀 프로젝트 불러오기 에러", error);
      }
    };

    fetchPopularPosts();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 900,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    appendDots: (dots) => (
      <ul
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        {dots}
      </ul>
    ),
    customPaging: (i) => <div style={{ width: "10px", height: "10px" }}></div>,
  };

  return (
    <StyledCarousel>
      <Slider {...settings}>
        {verticalPosts.map((item, index) => (
          <div key={index}>
            <BannerCard
              id={item.id}
              title={item.title}
              subtitle={""}
              description={item.aiDescription}
              logo={item.thumbnail}
              projectName={`${
                item.memberCountMax - item.memberCount
              }명 추가 모집 후 마감!!`}
            />
          </div>
        ))}
      </Slider>
    </StyledCarousel>
  );
};

export default BannerCarousel;
