import axiosInstance from "./axiosInstance";

/**
 * 비법서 생성
 *
 * @param {FormData} paperCreateDTO - 비법서 생성 요청 DTO
 */
export const createPaper = async (paperCreateDTO, access) => {
  try {
    const response = await axiosInstance.post("/api/papers", paperCreateDTO);
    return response.data;
  } catch (error) {
    console.error("비법서 생성 중 오류 발생:", error);
    throw error;
  }
};

/**
 * 비법서 단일 상세 조회
 *
 * @param {number} paperId - 비법서 ID
 */
export const readOnePaper = async (paperId) => {
  try {
    const response = await axiosInstance.get(`/api/papers/${paperId}`);
    return response.data;
  } catch (error) {
    console.error("비법서 단일 조회 중 오류 발생:", error);
    throw error;
  }
};

/**
 * 비법서 전체 목록 조회
 */
export const readAllPapers = async () => {
  try {
    const response = await axiosInstance.get("/api/papers/lists/all");
    return response.data;
  } catch (error) {
    console.error("비법서 전체 목록 조회 중 오류 발생:", error);
    throw error;
  }
};

/**
 * 비법서 카테고리별 조회
 *
 * @param {string} category - 카테고리 이름
 */
export const readCategoryPapers = async (category) => {
  try {
    const response = await axiosInstance.get(`/api/paper/lists/${category}`);
    return response.data;
  } catch (error) {
    console.error("카테고리별 비법서 조회 중 오류 발생:", error);
    throw error;
  }
};

/**
 * 내가 공유한 비법서(비법서 판매 내역)
 */
export const myPapers = async () => {
  try {
    const response = await axiosInstance.get("/api/papers/my");
    return response.data;
  } catch (error) {
    console.error("내가 공유한 비법서 조회 중 오류 발생:", error);
    throw error;
  }
};

/**
 * 추천 비법서 목록(카테고리별)
 *
 * @param {string} category - 카테고리 이름
 */
export const popularPaperByCategory = async (category) => {
  try {
    const response = await axiosInstance.get(
      `/api/papers/recommend/${category}`
    );
    return response.data;
  } catch (error) {
    console.error("추천 비법서(카테고리별) 조회 중 오류 발생:", error);
    throw error;
  }
};

/**
 * 추천 비법서 목록(전체)
 */
export const popularPaperAll = async () => {
  try {
    const response = await axiosInstance.get("/api/papers/recommend/all");
    return response.data;
  } catch (error) {
    console.error("추천 비법서(전체) 조회 중 오류 발생:", error);
    throw error;
  }
};

/**
 * 내 구매 목록 조회
 */
export const purchasedPapers = async () => {
  try {
    const response = await axiosInstance.get("/api/papers/purchase/all");
    return response.data;
  } catch (error) {
    console.error("내 구매 목록 조회 중 오류 발생:", error);
    throw error;
  }
};

/**
 * 비법서 파일 다운로드
 *
 * @param {number} paperId - 비법서 ID
 */
export const downloadPaper = async (paperId) => {
  try {
    const response = await axiosInstance.get(`/api/papers/${paperId}/download`);
    return response.data;
  } catch (error) {
    console.error("비법서 다운로드 중 오류 발생:", error);
    throw error;
  }
};

/**
 * 비법서 검색
 *
 * @param {Object} paperSearchReqDto - 비법서 검색 요청 DTO
 * @param {string} paperSearchReqDto.searchWord - 검색어
 */
export const searchPaper = async (paperSearchReqDto) => {
  try {
    const response = await axiosInstance.post(
      "/api/paper/search",
      paperSearchReqDto
    );
    return response.data;
  } catch (error) {
    console.error("비법서 검색 중 오류 발생:", error);
    throw error;
  }
};
