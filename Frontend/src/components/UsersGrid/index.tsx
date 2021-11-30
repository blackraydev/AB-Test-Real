import React from 'react';
import { CellTypes } from '../../constants/cellTypes';
import Button from '../../UI/Button';
import GridCell from '../GridCell';
import * as UI from './styles';

interface IUsersGrid {}

const UsersGrid: React.FC<IUsersGrid> = ({}) => {
  const addNewUserHandler = () => {};

  return (
    <UI.GridWrapper>
      <UI.Grid>
        <UI.GridRow>
          <GridCell value={'UserID'} header small />
          <GridCell value={'Date Registration'} header />
          <GridCell value={'Date Last Activity'} header />
        </UI.GridRow>
        <UI.GridDataWrapper>
          <UI.GridRow>
            <GridCell type={CellTypes.USER_ID} value={'1'} small />
            <GridCell type={CellTypes.DATE_REGISTRATION} value={'28.04.2021'} />
            <GridCell type={CellTypes.DATE_LAST_ACTIVITY} value={'28.11.2021'} />
          </UI.GridRow>
          <UI.GridRow>
            <GridCell type={CellTypes.USER_ID} value={'1'} small />
            <GridCell type={CellTypes.DATE_REGISTRATION} value={'28.04.2021'} />
            <GridCell type={CellTypes.DATE_LAST_ACTIVITY} value={'28.11.2021'} />
          </UI.GridRow>
          <UI.GridRow>
            <GridCell type={CellTypes.USER_ID} value={'1'} small />
            <GridCell type={CellTypes.DATE_REGISTRATION} value={'28.04.2021'} />
            <GridCell type={CellTypes.DATE_LAST_ACTIVITY} value={'28.11.2021'} />
          </UI.GridRow>
          <UI.GridRow>
            <GridCell type={CellTypes.USER_ID} value={'1'} small />
            <GridCell type={CellTypes.DATE_REGISTRATION} value={'28.04.2021'} />
            <GridCell type={CellTypes.DATE_LAST_ACTIVITY} value={'28.11.2021'} />
          </UI.GridRow>
        </UI.GridDataWrapper>
      </UI.Grid>
      <Button value="Add new user" onClick={addNewUserHandler} />
    </UI.GridWrapper>
  );
};

export default UsersGrid;
