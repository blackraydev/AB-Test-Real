import { ACTIONS } from '../../constants/reduxActions';
import { IUser } from '../../models/IUser';
import { GAction } from '../../types/reduxTypes';

interface IUsersState {
  users: IUser[];
  isLoading: boolean;
  hasError: boolean;
}

const initialState: IUsersState = {
  users: [] as IUser[],
  isLoading: false,
  hasError: false,
};

type Action =
  | GAction<ACTIONS.USERS_REQUEST_DATA | ACTIONS.USERS_REQUEST_END | ACTIONS.USERS_REJECT_DATA>
  | GAction<ACTIONS.USERS_RECEIVE_DATA, { users: IUser[] }>;

export default (state = initialState, action: Action): IUsersState => {
  switch (action.type) {
    case ACTIONS.USERS_REQUEST_DATA:
      return { ...state, isLoading: true };
    case ACTIONS.USERS_RECEIVE_DATA:
      return { ...state, users: action.payload.users };
    case ACTIONS.USERS_REJECT_DATA:
      return { ...state, isLoading: false, hasError: true };
    case ACTIONS.USERS_REQUEST_END:
      return { ...state, isLoading: false, hasError: false };
    default:
      return state;
  }
};
