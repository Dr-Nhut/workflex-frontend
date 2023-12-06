import axios from "axios";
import { URL_SERVER } from "../constants";

export const fakeAuth = () => {
    new Promise((resolve) => {
        setTimeout(() => resolve("2342f2f1d131rf12"), 250)
    })
}

export async function getAllAccount() {
    try {
        const response = await axios.get(`${URL_SERVER}/user/all`);
        return response.data
    } catch (error) {
        console.error(error);
        throw new Error('Đã xảy ra lỗi');
    }
}

export async function getAllFreelancers() {
    try {
        const response = await axios.get(`${URL_SERVER}/user/allFreelancers`);
        return response.data
    } catch (error) {
        console.error(error);
        throw new Error('Đã xảy ra lỗi');
    }
}

export async function getAllFreelancersByCategory(categoryId) {
    try {
        const response = await axios.get(`${URL_SERVER}/user/allFreelancersByCategory?categoryId=${categoryId}`);
        return response.data
    } catch (error) {
        console.error(error);
        throw new Error('Đã xảy ra lỗi');
    }
}

export async function getInfor(userId) {
    try {
        const response = await axios.get(`${URL_SERVER}/user/${userId}`);
        return response.data
    } catch (error) {
        console.error(error);
        throw new Error('Đã xảy ra lỗi');
    }
}

export async function getFreelancerInfor(userId) {
    try {
        const response = await axios.get(`${URL_SERVER}/user/freelancer?freelancerId=${userId}`);
        return response.data
    } catch (error) {
        console.error(error);
        throw new Error('Đã xảy ra lỗi');
    }
}

export async function updateAvatar(avatar) {
    const form = new FormData();
    form.append('avatar', avatar);
    try {
        const response = await axios.patch(`${URL_SERVER}/user/update-avatar`, form, { headers: { 'Content-Type': 'multipart/form-data' }, withCredentials: true });
        return response.data
    } catch (error) {
        console.error(error);
        throw new Error('Đã xảy ra lỗi');
    }
}

export async function updateInfor(payload) {
    try {
        const response = await axios.patch(`${URL_SERVER}/user/update-infor`, payload, { withCredentials: true });
        return response.data
    } catch (error) {
        console.error(error);
        throw new Error('Đã xảy ra lỗi');
    }
}