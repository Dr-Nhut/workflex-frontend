import axios from "axios";
import { URL_SERVER } from "../constants";

export async function postOffer(newOffer) {
    try {
        const response = await axios.post(`${URL_SERVER}/offer`, newOffer);
        return response.data
    } catch (error) {
        console.error(error);
        throw new Error('Đã xảy ra lỗi khi gửi báo giá');
    }
}

export async function getOffersForJob(jobId) {
    try {
        const response = await axios.get(`${URL_SERVER}/offer/for-job?id=${jobId}`);
        return response.data
    } catch (error) {
        console.error(error);
        throw new Error('Đã xảy ra lỗi');
    }
}

export async function getOffersByFreelancer(freelancerId) {
    try {
        const response = await axios.get(`${URL_SERVER}/offer/by-freelancer?id=${freelancerId}`);
        return response.data
    } catch (error) {
        console.error(error);
        throw new Error('Đã xảy ra lỗi');
    }
}