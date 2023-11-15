import axios from "axios";
const URL_SOCKET_SERVER = "http://localhost:3001"

export async function addMessage(data) {
    try {
        const response = await axios.post(`${URL_SOCKET_SERVER}/api/socket/add-message`, data);
        return response.data;
    } catch (error) {
        console.error(error);
        throw new Error('Đã xảy ra lỗi');
    }
}

export async function getAllMessages(data) {
    try {
        const response = await axios.post(`${URL_SOCKET_SERVER}/api/socket/get-all-messages`, data);
        return response.data;
    } catch (error) {
        console.error(error);
        throw new Error('Đã xảy ra lỗi');
    }
}
