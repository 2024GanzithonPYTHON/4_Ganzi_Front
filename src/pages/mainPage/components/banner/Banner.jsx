import styled from "styled-components";
import mockData from "./mockData";
import BannerCard from "./BannerCard";

const BannerSection = styled.section`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 300px;
    gap: 30px;
    background-color: #f0f0f0;
`;

const BannerContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: #f0f0f0;
    color: #333;
    font-weight: bold;
    text-align: center;
`;

const SearchContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: end;
    align-items: start;

    height: 100%;
    gap: 30px;
    padding: 40px 0;
`;


export default function Banner() {
    return (
        <BannerSection>
            <BannerContainer>
                {/* 나중에 이 컨테이너를 상하로 움직이는 캐러셀로 바꿔주세요! */}
                <BannerCard
                    title={mockData.title}
                    subtitle={mockData.subtitle}
                    description={mockData.description}
                    logo={mockData.logo}
                />
            </BannerContainer>
            <SearchContainer >
                <h2>이런 프로젝트는 어때요?</h2>
                <div>
                    <p>다른 프로젝트를 찾으시나요?</p>
                    <input type="text" placeholder="어쩌구 저쩌구를 검색해보세요!" />
                </div>
            </SearchContainer>
        </BannerSection>
    );
};