import axios from "../config/axios.config"

class AuthServices {
  static async login({ email, password }) {
    const response = await axios.post(`/auth/login`, { email, password })
    return response;
  }

  static async sendVerificationEmail({ email }) {
    return await axios.post("/auth/send-email-verify", { email });
  }

  static async verifyEmail({ email, token }) {
    return await axios.get(`/auth/verify?email=${email}&token=${token}`)
  }
}

export default AuthServices;