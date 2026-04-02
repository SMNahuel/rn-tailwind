import axios from "axios";

const apiClient = axios.create({ timeout: 300000 });

apiClient.interceptors.request.use(
  async (config: any) => {
    try {
      return config;
    } catch (error) {
      return Promise.reject(error);
    }
  },
  (error: any) => {
    return Promise.reject(error);
  },
);

apiClient.interceptors.response.use(
  (response: any) => {
    return response.data;
  },
  (error: any) => {
    if (error.response && error.response.status === 401) {
      // TODO: Refresh token logic
    }

    return Promise.reject(error);
  },
);

export default apiClient;
