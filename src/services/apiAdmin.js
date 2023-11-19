import axios from "axios";
import { URL_SERVER } from "../constants";

export async function blockAccount(data) {
    try {
        const response = await axios.patch(`${URL_SERVER}/admin/block-account/${data.id}`, data.payload);
        return response.data
    } catch (error) {
        console.error(error);
        throw new Error('Đã xảy ra lỗi');
    }
}