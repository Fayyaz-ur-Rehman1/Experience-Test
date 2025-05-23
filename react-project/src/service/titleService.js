import axiosInstance from "../lib/axiosInstence";

export const getTitle = async () => {
    try {
        const response = await axiosInstance.get("/posts");
        return response.data;
    } catch (error) {
        console.error("Error fetching title:", error);
        throw error;
    }
}