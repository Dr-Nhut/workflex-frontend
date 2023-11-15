import axios from "axios";
import { URL_SERVER } from "../constants";

export async function getFreelancerRecommendation(categoryId) {
    try {
        const response = await axios.get(`${URL_SERVER}/recommendation?categoryId=${categoryId}`);
        return response.data;
    } catch (error) {
        console.error(error);
        throw new Error('Đã xảy ra lỗi khi đăng việc làm');
    }
}

export async function getJobRecommendation() {
    try {
        const response = await axios.get(`${URL_SERVER}/recommendation/jobs-for-freelancer`, { withCredentials: true });
        return response.data;
    } catch (error) {
        console.error(error);
        throw new Error('Đã xảy ra lỗi khi đăng việc làm');
    }
}