import axios from "axios";
import { URL_SERVER } from "../constants";

export async function uploadDocumentImage(data) {
    const formData = new FormData();
    formData.append('image', data.payload)
    formData.append('userId', data.userId);

    console.log(data);

    try {
        const response = await axios({
            method: "post",
            url: `${URL_SERVER}/task/${data.id}/upload-file`,
            data: formData,
            headers: { 'content-type': 'multipart/form-data' },
        })
        return response.data
    } catch (error) {
        console.error(error);
        throw new Error('Đã xảy ra lỗi');
    }
}