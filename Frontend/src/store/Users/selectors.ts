import { IReduxState } from '..';

export const usersSelector = (state: IReduxState) => state.usersReducer.users;
export const usersLoadingSelector = (state: IReduxState) => state.usersReducer.isLoading;
export const usersErrorSelector = (state: IReduxState) => state.usersReducer.hasError;
