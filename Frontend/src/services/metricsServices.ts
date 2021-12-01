import axios, { AxiosResponse } from 'axios';
import { API_URL_DEV, API_URL_PROD } from '../constants/apiUrl';

class MetricsServices {
  static async getUsersLifeTime(): Promise<AxiosResponse<void>> {
    return await axios.get(`${API_URL_PROD}/metrics/lifetime`);
  }

  static async getRollingRetention(): Promise<AxiosResponse<void>> {
    return await axios.get(`${API_URL_PROD}/metrics/calculate`);
  }
}

export default MetricsServices;
