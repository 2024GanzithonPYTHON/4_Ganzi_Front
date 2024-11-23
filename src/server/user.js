import axiosInstance from "./axiosInstance";

// 유저 정보 조회
export const getUserInfo = async () => {
    try {
        const response = await axiosInstance.get("/api/users");
        return response.data;
    } catch (error) {
        console.error("유저 정보 조회 중 오류 발생:", error);
        throw error;
    }
};

// 보유 금액 조회
export const getUserBalance = async () => {
    try {
        const response = await axiosInstance.get("/api/users/balance");
        return response.data;
    } catch (error) {
        console.error("보유 금액 조회 중 오류 발생:", error);
        throw error;
    }
};

// 유저 정보 간략 조회
export const getUserSummary = async () => {
    try {
        const response = await axiosInstance.get("/api/users/summary");
        return response.data;
    } catch (error) {
        console.error("유저 정보 간략 조회 중 오류 발생:", error);
        throw error;
    }
};

// 모임 지원 내역 조회
export const getHistoriesOfApplicantProjects = async () => {
    try {
        const response = await axiosInstance.get("/api/users/histories/applicants");
        return response.data;
    } catch (error) {
        console.error("모임 지원 내역 조회 중 오류 발생:", error);
        throw error;
    }
};

// 모임 모집 내역 조회
export const getHistoriesOfRecruitProjects = async () => {
    try {
        const response = await axiosInstance.get("/api/users/histories/recruits");
        return response.data;
    } catch (error) {
        console.error("모임 모집 내역 조회 중 오류 발생:", error);
        throw error;
    }
};

// 비법서 내역 조회
export const getHistoriesOfPapers = async () => {
    try {
        const response = await axiosInstance.get("/api/users/histories/papers");
        return response.data;
    } catch (error) {
        console.error("비법서 내역 조회 중 오류 발생:", error);
        throw error;
    }
};

// 전체 포인트 내역 조회
export const getHistoriesOfPoints = async () => {
    try {
        const response = await axiosInstance.get("/api/users/histories/points");
        return response.data;
    } catch (error) {
        console.error("전체 포인트 내역 조회 중 오류 발생:", error);
        throw error;
    }
};