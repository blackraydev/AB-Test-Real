import React, { Dispatch, SetStateAction } from 'react';
import { useDispatch } from 'react-redux';
import { CellTypes } from '../../constants/cellTypes';
import { convertToDate } from '../../helpers/convertToDate';
import { IUser } from '../../models/IUser';
import { receiveData } from '../../store/Users/actions';
import Button from '../../UI/Button';
import LoadingSpinner from '../../UI/LoadingSpinner';
import GridCell from '../GridCell';
import * as UI from './styles';

interface IUsersGrid {
  users: IUser[];
  isLoading: boolean;
  hasError: boolean;
  setSelectedUser: Dispatch<SetStateAction<number>>;
}

const UsersGrid: React.FC<IUsersGrid> = ({ users, isLoading, hasError, setSelectedUser }) => {
  const dispatch = useDispatch();

  const addNewUserHandler = () => {
    const lastUserId = users[users.length - 1].userId;

    const user: IUser = {
      userId: lastUserId + 1,
      dateRegistration: '',
      dateLastActivity: '',
    };

    const newUsers = [...users];
    newUsers.push(user);

    dispatch(receiveData({ users: newUsers }));
  };

  return (
    <UI.GridWrapper>
      {hasError && <UI.ErrorText>Error: There is no connection to the server!</UI.ErrorText>}
      <UI.Grid>
        <UI.GridRow>
          <GridCell value={'UserID'} header small />
          <GridCell value={'Date Registration'} header />
          <GridCell value={'Date Last Activity'} header />
        </UI.GridRow>
        <UI.GridDataWrapper>
          {!isLoading && users ? (
            users
              .sort((prevUser, user) => prevUser.userId - user.userId)
              .map((user) => (
                <UI.GridRow key={`${user.userId}_${user.dateRegistration}_${user.dateLastActivity}`}>
                  <GridCell
                    setSelectedUser={setSelectedUser}
                    type={CellTypes.USER_ID}
                    id={user.userId}
                    value={user.userId.toString()}
                    small
                  />
                  <GridCell
                    setSelectedUser={setSelectedUser}
                    type={CellTypes.DATE_REGISTRATION}
                    id={user.userId}
                    value={user.dateRegistration ? convertToDate(user.dateRegistration) : user.dateRegistration}
                  />
                  <GridCell
                    setSelectedUser={setSelectedUser}
                    type={CellTypes.DATE_LAST_ACTIVITY}
                    id={user.userId}
                    value={user.dateLastActivity ? convertToDate(user.dateLastActivity) : user.dateLastActivity}
                  />
                </UI.GridRow>
              ))
          ) : (
            <UI.LoadingSpinnerWrapper>
              <LoadingSpinner />
            </UI.LoadingSpinnerWrapper>
          )}
        </UI.GridDataWrapper>
      </UI.Grid>
      <Button value="Add new user" onClick={addNewUserHandler} disabled={isLoading} />
    </UI.GridWrapper>
  );
};

export default UsersGrid;
