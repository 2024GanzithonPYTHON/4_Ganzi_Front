import axiosInstance from "./axiosInstance";

/**
 * @param {Object} reqDto - 지원자 생성 요청 DTO
 * @param {number} reqDto.userId - 지원자의 사용자 ID
 * @param {number} reqDto.projectId - 프로젝트 ID
 * @param {string} reqDto.content - 지원자의 신청 내용
 * @param {string} reqDto.career - 지원자의 경력 정보
 */
export const addApplicant = async (reqDto) => {
    try {
        const response = await axiosInstance.post("/api/applicants", reqDto);
        return response.data;
    } catch (error) {
        console.error("지원자 추가 중 오류 발생:", error);
        throw error;
    }
};

/**
 * @param {number} id - 지원자 ID
 */
export const getApplicant = async (id) => {
    try {
        const response = await axiosInstance.get(`/api/applicants/${id}`);
        return response.data;
    } catch (error) {
        console.error("지원자 조회 중 오류 발생:", error);
        throw error;
    }
};

/**
 * @param {number} projectId - 프로젝트 ID
 */
export const getApplicantList = async (projectId) => {
    try {
        const response = await axiosInstance.get("/api/applicants", {
            params: { projectId },
        });
        return response.data;
    } catch (error) {
        console.error("지원자 목록 조회 중 오류 발생:", error);
        throw error;
    }
};

/**
 * @param {Object} reqDto - 지원자 승인 요청 DTO
 * @param {number} reqDto.id - 승인할 지원자의 ID
 * @param {string} reqDto.status - 지원자 승인 상태 ("APPROVED", "REJECTED" 등)
 */
export const approveApplicant = async (reqDto) => {
    try {
        const response = await axiosInstance.post("/api/applicants/approve", reqDto);
        return response.data;
    } catch (error) {
        console.error("지원자 승인 중 오류 발생:", error);
        throw error;
    }
};