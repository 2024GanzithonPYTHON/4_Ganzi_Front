import axiosInstance from "./axiosInstance";

/**
 * 리뷰 생성
 *
 * @param {number} paperId - 비법서 ID
 * @param {Object} reviewCreateReqDto - 리뷰 생성 요청 DTO
 * @param {string} reviewCreateReqDto.content - 리뷰 내용
 * @param {number} reviewCreateReqDto.score - 리뷰 점수
 */
export const createReview = async (paperId, reviewCreateReqDto) => {
    try {
        const response = await axiosInstance.post(`/api/${paperId}/review/create`, reviewCreateReqDto);
        return response.data;
    } catch (error) {
        console.error("리뷰 생성 중 오류 발생:", error);
        throw error;
    }
};

/**
 * 후기 목록 조회 (비법서 상세 페이지)
 *
 * @param {number} paperId - 비법서 ID
 */
export const readReviews = async (paperId) => {
    try {
        const response = await axiosInstance.get(`/api/${paperId}/review`);
        return response.data;
    } catch (error) {
        console.error("후기 목록 조회 중 오류 발생:", error);
        throw error;
    }
};