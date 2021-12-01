import axios, { AxiosResponse } from 'axios';
import { API_URL } from '../constants/apiUrl';

class MetricsServices {
  static async getUsersLifeTime(): Promise<AxiosResponse<void>> {
    return await axios.get(`${API_URL}/metrics/lifetime`);
  }

  static async getRollingRetention(): Promise<AxiosResponse<void>> {
    return await axios.get(`${API_URL}/metrics/calculate`);
  }
}

export default MetricsServices;
