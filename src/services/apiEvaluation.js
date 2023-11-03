import axios from "axios";
import { URL_SERVER } from "../constants";

export async function getEvaluation(jobId) {
    try {
        const response = await axios.get(`${URL_SERVER}/evaluation/${jobId}`, { withCredentials: true });
        return response.data;
    } catch (error) {
        console.error(error);
        throw new Error('Đã xảy ra lỗi');
    }
}

export async function getAllEvaluationByUser(userId) {
    try {
        const response = await axios.get(`${URL_SERVER}/evaluation/all/${userId}`);
        return response.data;
    } catch (error) {
        console.error(error);
        throw new Error('Đã xảy ra lỗi');
    }
}


export async function createEvaluation(data) {
    try {
        const response = await axios.post(`${URL_SERVER}/evaluation/${data.id}`, data.payload, { withCredentials: true });
        return response.data;
    } catch (error) {
        console.error(error);
        throw new Error('Đã xảy ra lỗi');
    }
}

export async function checkCompleted(jobId) {
    try {
        const response = await axios.get(`${URL_SERVER}/evaluation/checkCompleted/${jobId}`);
        return response.data;
    } catch (error) {
        console.error(error);
        throw new Error('Đã xảy ra lỗi');
    }
}
