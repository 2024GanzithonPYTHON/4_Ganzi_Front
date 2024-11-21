import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import mockData from "./mockData";
import BannerCard from "./BannerCard";
import styled from "styled-components";

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
        {mockData.map((item, index) => (
          <div key={index}>
            <BannerCard
              title={item.title}
              subtitle={item.subtitle}
              description={item.description}
              logo={item.logo}
              projectName={item.projectName}
            />
          </div>
        ))}
      </Slider>
    </StyledCarousel>
  );
};

export default BannerCarousel;
