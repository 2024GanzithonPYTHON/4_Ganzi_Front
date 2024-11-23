import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProjectCard from "../ProjectCard";
import styled from "styled-components";

const CarouselWrapper = styled.div`
  position: relative;
  .slick-slide {
    display: flex;
    justify-content: start;
  }
  .slick-prev:before,
  .slick-next:before {
    font-size: 50px;
    color: #00a8cc;
  }
`;

const CustomPrevArrow = (props) => {
  const { className, style, onClick, currentSlide } = props;
  return currentSlide === 0 ? null : (
    <div
      className={className}
      style={{ ...style, display: "block", zIndex: 1 }}
      onClick={onClick}
    />
  );
};

// const CustomNextArrow = (props) => {
//   const { className, style, onClick, currentSlide, slideCount } = props;
//   return currentSlide === slideCount - 1 ? null : (
//     <div
//       className={className}
//       style={{
//         ...style,
//         display: "block",
//         zIndex: 1,
//         right: "10px",
//       }}
//       onClick={onClick}
//     />
//   );
// };

const PostCarousel = ({ posts }) => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    prevArrow: <CustomPrevArrow />,
    // nextArrow: <CustomNextArrow />,

    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <CarouselWrapper>
      <Slider {...settings}>
        {posts.map((post) => (
          <ProjectCard
            key={post.id}
            type={"paper"}
            id={post.id}
            title={post.descriptionShort}
            src={post.paperImg}
          />
        ))}
      </Slider>
    </CarouselWrapper>
  );
};

export default PostCarousel;
