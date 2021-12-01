import axios, { AxiosResponse } from 'axios';
import { API_URL } from '../constants/apiUrl';
import { IUser } from '../models/IUser';

class UserServices {
  static async getUsers(): Promise<AxiosResponse<IUser[]>> {
    return await axios.get<IUser[]>(`${API_URL}/users`);
  }

  static async saveUsers(users: IUser[]): Promise<AxiosResponse<IUser[]>> {
    return await axios.post<IUser[]>(`${API_URL}/users/save_users`, users);
  }
}

export default UserServices;
