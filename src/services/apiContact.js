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

export async function getContractByOffer(offerId) {
    try {
        const response = await axios.get(`${URL_SERVER}/contract?offerId=${offerId}`);
        return response.data;
    } catch (error) {
        console.error(error);
        throw new Error('Đã xảy ra lỗi khi đăng việc làm');
    }
}