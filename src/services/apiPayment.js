import axios from "axios";
import { URL_SERVER } from "../constants";

export async function getPaymentByOffer(offerId) {
    try {
        const response = await axios.get(`${URL_SERVER}/payment/by-offer?offerId=${offerId}`);
        return response.data
    } catch (error) {
        console.error(error);
        throw new Error('Đã xảy ra lỗi');
    }
}