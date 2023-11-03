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