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

export async function getOffersByFreelancer(freelancerId, status) {
    try {
        const response = await axios.get(`${URL_SERVER}/offer/by-freelancer?id=${freelancerId}&status=${status}`);
        return response.data
    } catch (error) {
        console.error(error);
        throw new Error('Đã xảy ra lỗi');
    }
}

export async function getAllOffersByFreelancer(freelancerId) {
    try {
        const response = await axios.get(`${URL_SERVER}/offer/all/by-freelancer?id=${freelancerId}`);
        return response.data
    } catch (error) {
        console.error(error);
        throw new Error('Đã xảy ra lỗi');
    }
}

export async function getOfferProcessing(jobId) {
    try {
        const response = await axios.get(`${URL_SERVER}/offer/processing-by-job?jobId=${jobId}`);
        return response.data
    } catch (error) {
        console.error(error);
        throw new Error('Đã xảy ra lỗi');
    }
}

export async function updateOffer(data) {
    try {
        const response = await axios.patch(`${URL_SERVER}/offer/${data.id}`, data.payload);
        return response
    } catch (error) {
        console.error(error);
        throw new Error('Đã xảy ra lỗi');
    }
}

export async function deleteOffer(offerId) {
    try {
        const response = await axios.delete(`${URL_SERVER}/offer/${offerId}`);
        return response
    } catch (error) {
        console.error(error);
        throw new Error('Đã xảy ra lỗi');
    }
}