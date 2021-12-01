import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import UsersGrid from '../../components/UsersGrid';
import { Colors } from '../../constants/colors';
import { useActions } from '../../hooks/useActions';
import { usePrevious } from '../../hooks/usePrevious';
import { receiveData } from '../../store/Users/actions';
import { usersLoadingSelector, usersSelector } from '../../store/Users/selectors';
import RollingRetentionModal from '../../components/RollingRetentionModal';
import Button from '../../UI/Button';
import * as UI from './styles';

const MainPage: React.FC = () => {
  const { getUsers, saveUsers, calculateMetrics } = useActions();
  const users = useSelector(usersSelector);
  const isLoading = useSelector(usersLoadingSelector);
  const [selectedUser, setSelectedUser] = useState<number>(-1);
  const prevSelectedUser = usePrevious<number>(selectedUser);
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const dispatch = useDispatch();

  useEffect(() => {
    getUsers();
  }, []);

  const saveDataHandler = () => {
    if (!isLoading) {
      saveUsers(users);
    }
  };

  const calculateDataHandler = () => {
    if (!isLoading) {
      calculateMetrics();
      setModalVisible(true);
    }
  };

  const deleteRowHandler = () => {
    if (prevSelectedUser > -1) {
      const newUsers = [...users].filter((user) => user.userId !== prevSelectedUser);
      dispatch(receiveData({ users: newUsers }));
    }

    setSelectedUser(-1);
  };

  return (
    <UI.PageWrapper>
      <UI.ContentWrapper>
        <UsersGrid users={users} isLoading={isLoading} setSelectedUser={setSelectedUser} />
        <UI.ButtonsWrapper>
          <Button value="Save" onClick={saveDataHandler} />
          <Button
            value="Calculate"
            onClick={calculateDataHandler}
            styles={{ marginTop: '15px' }}
            disabled={users && !users.length}
          />
          <Button
            value="Delete user"
            onClick={deleteRowHandler}
            styles={{
              marginTop: '15px',
              background: Colors.RED,
              ':hover': { background: Colors.RED },
              ':disabled': { background: Colors.LIGHT_RED },
            }}
            disabled={selectedUser < 0 && prevSelectedUser < 0}
          />
        </UI.ButtonsWrapper>
        {modalVisible && <RollingRetentionModal onClose={() => setModalVisible(false)} />}
      </UI.ContentWrapper>
    </UI.PageWrapper>
  );
};

export default MainPage;
