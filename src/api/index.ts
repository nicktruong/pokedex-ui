import { StorageKey } from "@/common/enums";
import axios from "axios";

export const api = axios.create({
  baseURL: `${import.meta.env.VITE_API_BASE_URL}/api/v1`,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use((config) => {
  const accessToken = localStorage.getItem(StorageKey.AccessToken);

  config.headers.Authorization = accessToken
    ? `Bearer ${accessToken}`
    : undefined;

  return config;
});
