import mockData from "./mockData";
import BannerCard from "./BannerCard";

const BannerCarousel = () => {
  return (
    <div>
      <BannerCard
        title={mockData.title}
        subtitle={mockData.subtitle}
        description={mockData.description}
        logo={mockData.logo}
      />
    </div>
  );
};

export default BannerCarousel;
