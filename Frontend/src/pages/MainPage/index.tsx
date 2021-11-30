import React from 'react';
import UsersGrid from '../../components/UsersGrid';
import Button from '../../UI/Button';
import * as UI from './styles';

const MainPage: React.FC = () => {
  const saveDataHandler = () => {};

  const calculateDataHandler = () => {};

  return (
    <UI.PageWrapper>
      <UI.ContentWrapper>
        <UsersGrid />
        <UI.ButtonsWrapper>
          <Button value="Save" onClick={saveDataHandler} />
          <Button value="Calculate" onClick={calculateDataHandler} styles={{ marginTop: '15px' }} />
        </UI.ButtonsWrapper>
      </UI.ContentWrapper>
    </UI.PageWrapper>
  );
};

export default MainPage;
