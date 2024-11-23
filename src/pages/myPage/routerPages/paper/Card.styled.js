import styled from "styled-components";

export const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: white;
    border: 1px solid #ddd;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const TopSection = styled.div`
    display: flex;
`;

export const Thumbnail = styled.div`
    background-color: #c4c4c4;
    object-fit: scale-down;
    width: 150px;
    aspect-ratio: 9 / 12;
`;

export const Content = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    padding: 20px;
    height: auto;
`;

export const TitleRow = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const PaperTitle = styled.div`
    font-size: 16px;
    font-weight: bold;
`;

export const Badge = styled.div`
    background-color: white;
    color: #ED4949;
    font-size: 12px;
    font-weight: bold;
    padding: 10px 15px;
    border: 1px solid #ED4949;
    border-radius: 5px;
`;

export const Date = styled.div`
    font-size: 14px;
    color: gray;
    margin-top: 10px;
`;

export const StatsRow = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
`;

export const Profit = styled.div`
    display: flex;
    align-items: center;

    width: 100%;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
    background-color: #F3F3F3;

    & > span {
        font-size: 14px;
        margin-left: 10px;
        font-weight: bold;
    }
`;

export const Stats = styled.div`
    display: flex;
    gap: 20px;
    font-size: 14px;
    align-items: center;

    & > span {
        display: flex;
        align-items: center;
        gap: 5px;
    }

    .icon {
        font-size: 16px;
        color: gray;
    }

    .highlight {
        font-weight: bold;
    }
`;

export const ReviewButton = styled.button`
    border: none;
    background-color: #00A8CC;
    border-radius: 5px;
    padding: 10px 15px;
    width: 100px;
    color: white;
    font-size: 14px;
    cursor: pointer;

    &:hover {
        background-color: #01829E;
    }
`;

export const ReviewSection = styled.div`
    border-top: 1px solid #ddd;
    padding: 10px 20px;
`;

export const Review = styled.div`
    display: flex;
    margin-top: 10px;
    gap: 10px;

    .avatar {
        width: 40px;
        height: 40px;
        background-color: #ccc;
        border-radius: 50%;
    }

    .review-content {
        flex: 1;

        .reviewer {
            font-weight: bold;
            margin-bottom: 5px;
        }

        .content {
            font-size: 14px;
            color: gray;
        }
    }
`;

export const SeeAllReviews = styled.div`
    margin-top: 10px;
    text-align: center;
    font-size: 14px;
    color: gray;
    cursor: pointer;

    &:hover {
        text-decoration: underline;
    }
`;