import axiosInstance from "./axiosInstance";

/**
 * 내가 좋아요한 프로젝트 조회
 */
export const getLikesProjects = async () => {
    try {
        const response = await axiosInstance.get("/api/my/projects/likes");
        return response.data;
    } catch (error) {
        console.error("좋아요한 프로젝트 조회 중 오류 발생:", error);
        throw error;
    }
};

/**
 * 내가 참여한 프로젝트 조회
 */
export const getJoinProjects = async () => {
    try {
        const response = await axiosInstance.get("/api/my/projects/join");
        return response.data;
    } catch (error) {
        console.error("참여한 프로젝트 조회 중 오류 발생:", error);
        throw error;
    }
};

/**
 * 프로젝트 시간 역순 조회
 */
export const getLateJoinProjects = async () => {
    try {
        const response = await axiosInstance.get("/api/my/projects/join_late");
        return response.data;
    } catch (error) {
        console.error("프로젝트 역순 조회 중 오류 발생:", error);
        throw error;
    }
};

/**
 * 내가 신청한 프로젝트 조회
 */
export const getApplyProjects = async () => {
    try {
        const response = await axiosInstance.get("/api/my/projects/apply");
        return response.data;
    } catch (error) {
        console.error("신청한 프로젝트 조회 중 오류 발생:", error);
        throw error;
    }
};

/**
 * 내가 모집한 프로젝트 조회
 */
export const getRecruitProjects = async () => {
    try {
        const response = await axiosInstance.get("/api/my/projects/recruit");
        return response.data;
    } catch (error) {
        console.error("모집한 프로젝트 조회 중 오류 발생:", error);
        throw error;
    }
};

/**
 * 내 프로젝트 상태 개수 조회
 */
export const getStatusCount = async () => {
    try {
        const response = await axiosInstance.get("/api/my/projects/count");
        return response.data;
    } catch (error) {
        console.error("프로젝트 상태 개수 조회 중 오류 발생:", error);
        throw error;
    }
};

/**
 * @param {Object} projectRequestDto - 프로젝트 생성 요청 DTO
 * @param {string} projectRequestDto.category - 프로젝트 카테고리
 * @param {string} projectRequestDto.title - 프로젝트 제목
 * @param {string} projectRequestDto.titleShort - 프로젝트 짧은 제목
 * @param {number} projectRequestDto.memberCountMax - 최대 멤버 수
 * @param {string} projectRequestDto.dateEnd - 프로젝트 종료 날짜 (ISO 형식)
 * @param {string} projectRequestDto.thumbnail - 프로젝트 썸네일 URL
 * @param {string} projectRequestDto.bodyTitle - 본문 제목
 * @param {string} projectRequestDto.bodyGoal - 프로젝트 목표
 * @param {string} projectRequestDto.bodyPlan - 프로젝트 계획
 * @param {string} projectRequestDto.bodyStyle - 프로젝트 스타일
 * @param {string} projectRequestDto.bodyRequirement - 프로젝트 요구 사항
 */
export const createProject = async (projectRequestDto) => {
    try {
        const response = await axiosInstance.post("/api/project", projectRequestDto);
        return response.data;
    } catch (error) {
        console.error("프로젝트 생성 중 오류 발생:", error);
        throw error;
    }
};

/**
 * @param {number} id - 프로젝트 ID
 */
export const readProject = async (id) => {
    try {
        const response = await axiosInstance.get(`/api/project/${id}`);
        return response.data;
    } catch (error) {
        console.error("프로젝트 조회 중 오류 발생:", error);
        throw error;
    }
};

/**
 * 전체 프로젝트 리스트 조회
 */
export const readProjectListAll = async () => {
    try {
        const response = await axiosInstance.get("/api/project/list/all");
        return response.data;
    } catch (error) {
        console.error("전체 프로젝트 리스트 조회 중 오류 발생:", error);
        throw error;
    }
};

/**
 * @param {string} category - 카테고리 이름
 */
export const readProjectListCategory = async (category) => {
    try {
        const response = await axiosInstance.get("/api/project/list", {
            params: { category },
        });
        return response.data;
    } catch (error) {
        console.error("프로젝트 카테고리 리스트 조회 중 오류 발생:", error);
        throw error;
    }
};

/**
 * 요즘 뜨는 프로젝트 조회
 */
export const readProjectPopular = async () => {
    try {
        const response = await axiosInstance.get("/api/project/popular");
        return response.data;
    } catch (error) {
        console.error("요즘 뜨는 프로젝트 조회 중 오류 발생:", error);
        throw error;
    }
};

/**
 * @param {string} keyword - 검색 키워드
 */
export const searchProject = async (keyword) => {
    try {
        const response = await axiosInstance.get("/api/project/search", {
            params: { keyword },
        });
        return response.data;
    } catch (error) {
        console.error("프로젝트 검색 중 오류 발생:", error);
        throw error;
    }
};