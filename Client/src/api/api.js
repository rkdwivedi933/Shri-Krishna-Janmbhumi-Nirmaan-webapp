import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

// ✅ Axios instance
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: { "Content-Type": "application/json" },
});

// ✅ Common API request handler
export const apiRequest = async (endpoint, method = "GET", data = null, token = null) => {
  try {
    const config = {
      method,
      url: endpoint,
      data,
    };

    // Add Authorization token if available
    if (token) {
      config.headers = {
        ...config.headers,
        Authorization: `Bearer ${token}`,
      };
    }

    const response = await api(config);
    return response.data;
  } catch (error) {
    if (error.response) {
      console.error("❌ API Error:", error.response.data);
      return error.response.data;
    } else {
      console.error("❌ Network Error:", error.message);
      return { status: 0, message: "Network error, please check your connection" };
    }
  }
};
