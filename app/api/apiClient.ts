import axiosInstance from './axiosInstance';
import { AxiosRequestConfig } from 'axios';

export const apiClient = async <T>(
  endpoint: string,
  method: 'GET' | 'POST' | 'PUT' | 'DELETE',
  data?: unknown,
  config?: AxiosRequestConfig
): Promise<T> => {
  const response = await axiosInstance.request<T>({
    url: endpoint,
    method,
    data,
    ...config,
  });
  return response.data;
};
