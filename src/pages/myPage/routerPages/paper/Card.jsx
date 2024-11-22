import React, { useState } from "react";
import {
    CardContainer,
    TopSection,
    Thumbnail,
    Content,
    TitleRow,
    PaperTitle,
    Badge,
    Date,
    StatsRow,
    Profit,
    Stats,
    ReviewButton,
    ReviewSection,
    Review,
    SeeAllReviews,
} from "./Card.styled";
import { FaDownload } from "react-icons/fa";

export default function Card() {
    const [isReviewVisible, setIsReviewVisible] = useState(false);

    const toggleReviews = () => {
        setIsReviewVisible(!isReviewVisible);
    };

    return (
        <CardContainer>
            <TopSection>
                <Thumbnail />
                <Content>
                    <TitleRow>
                        <div>
                            <PaperTitle>달력 제작부터 펀딩까지 A to Z 로드맵</PaperTitle>
                            <Date>2024.05.20</Date>
                        </div>
                        <Badge>판매중지</Badge>
                    </TitleRow>
                    <Stats>
                        <span>
                            <FaDownload /> 20
                        </span>
                        <span>
                            평균 평점 <span className="highlight">4.0</span>
                        </span>
                    </Stats>
                    <StatsRow>
                        <Profit>
                            판매 수익<span>3,000</span>P
                        </Profit>
                        <ReviewButton onClick={toggleReviews}>
                            {isReviewVisible ? "리뷰 접기" : "리뷰 열기"}
                        </ReviewButton>
                    </StatsRow>
                </Content>
            </TopSection>
            {isReviewVisible && (
                <ReviewSection>
                    <Review>
                        <div className="avatar"></div>
                        <div className="review-content">
                            <div className="reviewer">간지간지님</div>
                            <div className="content">
                                달력 만들 때 궁금한거 정말 다 알 수 있었어요. 정말 유용했습니다.
                            </div>
                        </div>
                    </Review>
                    <Review>
                        <div className="avatar"></div>
                        <div className="review-content">
                            <div className="reviewer">간지간지님</div>
                            <div className="content">
                                달력 만들 때 궁금한거 정말 다 알 수 있었어요. 정말 유용했습니다.
                            </div>
                        </div>
                    </Review>
                    <SeeAllReviews>후기 전체보기</SeeAllReviews>
                </ReviewSection>
            )}
        </CardContainer>
    );
}