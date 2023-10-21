import axios from "axios";
import { URL_SERVER } from "../constants";

export async function createJob(newJob) {
    try {
        const response = await axios.post(`${URL_SERVER}/job/create`, newJob);
        return response
    } catch (error) {
        console.error(error);
        throw new Error('Đã xảy ra lỗi khi đăng việc làm');
    }
}

export async function getPendingJob() {
    try {
        const response = await axios.get(`${URL_SERVER}/job/pending-jobs`);
        return response.data
    } catch (error) {
        console.error(error);
        throw new Error('Đã xảy ra lỗi khi tải công việc');
    }
}

export async function getBiddingJob() {
    try {
        const response = await axios.get(`${URL_SERVER}/job/bidding-jobs`);
        return response.data
    } catch (error) {
        console.error(error);
        throw new Error('Đã xảy ra lỗi khi tải công việc');
    }
}

export async function getBiddingAndLockingJob(id) {
    try {
        const response = await axios.get(`${URL_SERVER}/job/bidnlock-jobs?id=${id}`);
        return response.data
    } catch (error) {
        console.error(error);
        throw new Error('Đã xảy ra lỗi khi tải công việc');
    }
}

export async function getRefusedJob() {
    try {
        const response = await axios.get(`${URL_SERVER}/job/refused-jobs`);
        return response.data
    } catch (error) {
        console.error(error);
        throw new Error('Đã xảy ra lỗi khi tải công việc');
    }
}

export async function getDetailJob(id) {
    try {
        const response = await axios.get(`${URL_SERVER}/job/${id}`);
        return response.data
    } catch (error) {
        console.error(error);
        throw new Error('Đã xảy ra lỗi khi tải công việc');
    }
}

export async function approvalJob(data) {
    try {
        const response = await axios.post(`${URL_SERVER}/admin/approval-job/${data.id}`, data.payload);
        return response
    } catch (error) {
        console.error(error);
        throw new Error('Đã xảy ra lỗi khi phê duyệt việc làm');
    }
}

export async function updateJob(data) {
    try {
        const response = await axios.patch(`${URL_SERVER}/job/${data.id}`, data.payload);
        return response
    } catch (error) {
        console.error(error);
        throw new Error('Đã xảy ra lỗi');
    }
}