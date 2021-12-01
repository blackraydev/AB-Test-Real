import axios, { AxiosResponse } from 'axios';
import { API_URL_DEV, API_URL_PROD } from '../constants/apiUrl';
import { IUser } from '../models/IUser';

class UserServices {
  static async getUsers(): Promise<AxiosResponse<IUser[]>> {
    return await axios.get<IUser[]>(`${API_URL_PROD}/users`);
  }

  static async saveUsers(users: IUser[]): Promise<AxiosResponse<IUser[]>> {
    return await axios.post<IUser[]>(`${API_URL_PROD}/users/save_users`, users);
  }
}

export default UserServices;
