import axios from "axios";
import { URL_SERVER } from "../constants";

export async function createContract(data) {
    try {
        const response = await axios.post(`${URL_SERVER}/contract`, data);
        return response.data;
    } catch (error) {
        console.error(error);
        throw new Error('Đã xảy ra lỗi khi đăng việc làm');
    }
}