import axios from "axios";
import { URL_SERVER } from "../constants";

export const fakeAuth = () => {
    new Promise((resolve) => {
        setTimeout(() => resolve("2342f2f1d131rf12"), 250)
    })
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