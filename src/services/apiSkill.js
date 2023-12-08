import axios from "axios";
import { URL_SERVER } from "../constants";

export async function getSkillByUser(userId) {
    try {
        const response = await axios.get(`${URL_SERVER}/skill/all/${userId}`);
        return response.data
    } catch (error) {
        console.error(error);
        throw new Error('Đã xảy ra lỗi');
    }
}

export async function getAllSkills() {
    try {
        const response = await axios.get(`${URL_SERVER}/skill/all`);
        return response.data
    } catch (error) {
        console.error(error);
        throw new Error('Đã xảy ra lỗi');
    }
}

export async function createSkill(data) {
    try {
        const response = await axios.post(`${URL_SERVER}/skill/`, data);
        return response.data;
    } catch (error) {
        console.error(error);
        throw new Error('Đã xảy ra lỗi khi tạo thông báo');
    }
}

export async function deleteSkill(id) {
    try {
        const response = await axios.delete(`${URL_SERVER}/skill?id=${id}`);
        return response.data;
    } catch (error) {
        console.error(error);
        throw new Error('Đã xảy ra lỗi khi tạo thông báo');
    }
}