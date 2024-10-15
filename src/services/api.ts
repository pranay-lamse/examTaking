import axios from 'axios';
import { API_BASE_URL } from '../utils/constants';

const apiClient = axios.create({
  baseURL: API_BASE_URL,
});

export const loginUser = async (username: string, password: string) => {
  try {
    const response = await apiClient.post('/login', { username, password });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export default apiClient;
