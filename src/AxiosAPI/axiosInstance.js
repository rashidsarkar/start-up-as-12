import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:5000", // Your API base URL
  // baseURL: "http://localhost:5000", // Your API base URL
  withCredentials: true,
});

export default axiosInstance;
