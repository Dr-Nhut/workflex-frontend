import axios from "axios";
import { URL_SERVER } from "../constants";

export async function getContractTasks(contractId) {
    try {
        const response = await axios.get(`${URL_SERVER}/task/${contractId}`);
        return response.data
    } catch (error) {
        console.error(error);
        throw new Error('Đã xảy ra lỗi');
    }
}

export async function createTask(data) {
    try {
        const response = await axios.post(`${URL_SERVER}/task/`, data);
        return response.data
    } catch (error) {
        console.error(error);
        throw new Error('Đã xảy ra lỗi');
    }
}

export async function getDocuments(taskId) {
    try {
        const response = await axios.get(`${URL_SERVER}/task/documents?taskId=${taskId}`);
        return response.data
    } catch (error) {
        console.error(error);
        throw new Error('Đã xảy ra lỗi');
    }
}

export async function completeTask(data) {
    try {
        const response = await axios.patch(`${URL_SERVER}/task/${data.taskId}`, data.payload);
        return response.data
    } catch (error) {
        console.error(error);
        throw new Error('Đã xảy ra lỗi');
    }
}