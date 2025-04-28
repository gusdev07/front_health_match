import axios from 'axios';
import { parseCookies } from 'nookies';
import { refreshAccessToken } from '../services/auth/refreshAccessToken';

const { 'healthmatch.token': token } = parseCookies();

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: { 'Content-Type': 'application/json' },
});

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      const newToken = await refreshAccessToken();

      if (newToken) {
        originalRequest.headers['Authorization'] = `Bearer ${newToken}`;
        return api(originalRequest);
      }
    }

    return Promise.reject(error);
  }
);

if (token) {
  api.defaults.headers['Authorization'] = `Bearer ${token}`;
}
