import axiosInstance from "./axiosInstance";

/**
 * 좋아요 토글
 *
 * @param {Object} dto - 좋아요 토글 요청 DTO
 * @param {number} dto.userId - 좋아요를 추가 또는 제거할 사용자 ID
 * @param {number} dto.projectId - 좋아요 대상 프로젝트 ID
 */
export const toggleLike = async (dto) => {
    try {
        const response = await axiosInstance.post("/api/likes", dto);
        return response.data;
    } catch (error) {
        console.error("좋아요 토글 중 오류 발생:", error);
        throw error;
    }
};