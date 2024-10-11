import axios from "axios";
import Cookies from "js-cookie";
const apiUrl = import.meta.env.VITE_URL_API

const instance = axios.create({
  baseURL: apiUrl,
  headers: {
    Authorization: `Bearer ${Cookies.get('token')}`,
    'x-client-id': Cookies.get('userId')
  }
});

instance.interceptors.response.use(
  (response) => response.data,
  (error) => {
    if (error.response) {
      return Promise.reject(new Error(error.response.data.message || 'Lỗi từ server!'));
    }
    return Promise.reject(new Error('Ôi hỏng! Đã xảy ra lỗi không xác định!'));
  }
);


export default instance;