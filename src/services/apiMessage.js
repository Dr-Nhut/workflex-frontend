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

export async function getMessagesByUser(userId) {
    try {
        const response = await axios.get(`${URL_SOCKET_SERVER}/api/socket/messages/${userId}`);
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

export async function seededMessage(id) {
    try {
        const response = await axios.patch(`${URL_SOCKET_SERVER}/api/socket/update-message?id=${id}`, { seen: true });
        return response.data;
    } catch (error) {
        console.error(error);
        throw new Error('Đã xảy ra lỗi');
    }
}
