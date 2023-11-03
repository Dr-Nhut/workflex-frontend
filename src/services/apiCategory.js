import axios from "axios";
import { URL_SERVER } from "../constants";

export async function getCategoryByUser(userId) {
    try {
        const response = await axios.get(`${URL_SERVER}/category/all/${userId}`);
        return response.data;
    } catch (error) {
        console.error(error);
        throw new Error('Đã xảy ra lỗi khi tạo thông báo');
    }
}
