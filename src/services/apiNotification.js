import axios from "axios";
import { URL_SERVER } from "../constants";

export async function createNotification(data) {
    try {
        const response = await axios.post(`${URL_SERVER}/notification`, data);
        return response.data;
    } catch (error) {
        console.error(error);
        throw new Error('Đã xảy ra lỗi khi tạo thông báo');
    }
}


export async function getNotifications(userId) {
    try {
        const response = await axios.get(`${URL_SERVER}/notification/${userId}`);
        return response.data;
    } catch (error) {
        console.error(error);
        throw new Error('Đã xảy ra lỗi khi tạo thông báo');
    }
}


export async function seenNotification(id) {
    try {
        const response = await axios.patch(`${URL_SERVER}/notification/${id}`, {});
        return response.data;
    } catch (error) {
        console.error(error);
        throw new Error('Đã xảy ra lỗi khi xem thông báo');
    }
}