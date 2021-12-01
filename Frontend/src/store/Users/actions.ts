import { Dispatch } from 'redux';
import { ACTIONS } from '../../constants/reduxActions';
import { IUser } from '../../models/IUser';
import UserServices from '../../services/userServices';

export const getUsers =
  () =>
  async (dispatch: Dispatch): Promise<void> => {
    try {
      dispatch(requestData());

      const response = await UserServices.getUsers();
      const data = response.data;

      dispatch(receiveData({ users: data }));
      dispatch(requestEnd());
    } catch (e) {
      console.log(e);
      dispatch(rejectData());
    }
  };

export const saveUsers =
  (users: IUser[]) =>
  async (dispatch: Dispatch): Promise<void> => {
    try {
      dispatch(requestData());

      const response = await UserServices.saveUsers(users);
      const data = response.data;

      dispatch(receiveData({ users: data }));
      dispatch(requestEnd());
    } catch (e) {
      console.log(e);
      dispatch(rejectData());
    }
  };

export const requestData = () => ({
  type: ACTIONS.USERS_REQUEST_DATA,
});

export const receiveData = (payload: any) => ({
  type: ACTIONS.USERS_RECEIVE_DATA,
  payload: payload,
});

export const rejectData = () => ({
  type: ACTIONS.USERS_REJECT_DATA,
});

export const requestEnd = () => ({
  type: ACTIONS.USERS_REQUEST_END,
});

export default {
  getUsers,
  saveUsers,
};
