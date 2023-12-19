import axios from "axios";
import {
    URL_SERVER
} from "../constants";

export async function getCategoryByUser(userId) {
    try {
        const response = await axios.get(`${URL_SERVER}/category/all/${userId}`);
        return response.data;
    } catch (error) {
        console.error(error);
        throw new Error('Đã xảy ra lỗi khi tạo thông báo');
    }
}

export async function createCategory(data) {
    try {
        const response = await axios.post(`${URL_SERVER}/category/`, data);
        return response.data;
    } catch (error) {
        console.error(error);
        throw new Error('Đã xảy ra lỗi khi tạo thông báo');
    }
}


export async function getAllCategories() {
    try {
        const response = await axios.get(`${URL_SERVER}/category/all/`);
        return response.data;
    } catch (error) {
        console.error(error);
        throw new Error('Đã xảy ra lỗi khi tạo thông báo');
    }
}

export async function deleteCategory(id) {
    try {
        const response = await axios.delete(`${URL_SERVER}/category?id=${id}`);
        return response.data;
    } catch (error) {
        console.error(error);
        throw new Error('Đã xảy ra lỗi khi tạo thông báo');
    }
}

export async function updateCateogries(data) {
    try {
        const response = await axios.put(`${URL_SERVER}/category/${data.id}`, {
            categories: data.categories
        });
        return response.data;
    } catch (error) {
        console.error(error);
        throw new Error('Đã xảy ra lỗi khi tạo thông báo');
    }
}