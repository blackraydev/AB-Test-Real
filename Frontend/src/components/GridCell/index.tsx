import React, { useState, Dispatch, SetStateAction } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { CellModes } from '../../constants/cellModes';
import { CellTypes } from '../../constants/cellTypes';
import { addDotToDate } from '../../helpers/addDotToDate';
import { convertDateToSendRequest } from '../../helpers/convertDateToSendReques';
import { convertToDate } from '../../helpers/convertToDate';
import { getDateIndicators } from '../../helpers/getDateIndicators';
import { isDateValid } from '../../helpers/isDateValid';
import { usePrevious } from '../../hooks/usePrevious';
import { receiveData } from '../../store/Users/actions';
import { usersSelector } from '../../store/Users/selectors';
import { CellMode } from '../../types/cellMode';
import { CellType } from '../../types/cellType';
import * as UI from './styles';

interface IGridCellProps {
  value: string;
  setSelectedUser?: Dispatch<SetStateAction<number>>;
  header?: boolean;
  small?: boolean;
  type?: CellType;
  id?: number;
}

const GridCell: React.FC<IGridCellProps> = ({ setSelectedUser, value, header, small, type, id }) => {
  const [cellMode, setCellMode] = useState<CellMode>(CellModes.READ);
  const [cellValue, setCellValue] = useState<string>(value);
  const prevCellValue = usePrevious<string>(cellValue);
  const dispatch = useDispatch();
  const users = useSelector(usersSelector);

  const cellClickHandler = () => {
    if (!header) {
      selectUserHandler();
      setCellMode(CellModes.WRITE);
    }
  };

  const cellBlurHandler = () => {
    setSelectedUser && setSelectedUser(-1);
    setCellMode(CellModes.READ);

    if (cellValue === value) return;

    if (!isCellDateValid()) {
      return setCellValue(value);
    }

    const newUsers = users.map((user) => {
      if (user.userId === id) {
        if (type === CellTypes.USER_ID) user.userId = Number(cellValue);
        if (type === CellTypes.DATE_REGISTRATION) user.dateRegistration = convertDateToSendRequest(cellValue);
        if (type === CellTypes.DATE_LAST_ACTIVITY) user.dateLastActivity = convertDateToSendRequest(cellValue);
      }
      return user;
    });

    return dispatch(receiveData({ users: newUsers }));
  };

  const cellChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!small && prevCellValue.length < cellValue.length) {
      setCellValue(addDotToDate(e.target.value));
    } else {
      setCellValue(e.target.value);
    }
  };

  const cellKeyPressHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (Number(e.key) >= 0 || Number(e.key) <= 9) {
      return true;
    }
    return e.preventDefault();
  };

  const isCellDateValid = () => {
    try {
      if (type === CellTypes.DATE_REGISTRATION) {
        const registrationDate = cellValue;
        const lastActivityDate = users.find((user) => user.userId === id)?.dateLastActivity;

        const registrationDateIndicators = getDateIndicators(registrationDate);

        if (lastActivityDate) {
          const lastActivityDateIndicators = getDateIndicators(convertToDate(lastActivityDate));
          return isDateValid(registrationDateIndicators, lastActivityDateIndicators);
        } else {
          return isDateValid(registrationDateIndicators);
        }
      } else if (type === CellTypes.DATE_LAST_ACTIVITY) {
        const lastActivityDate = cellValue;
        const registrationDate = users.find((user) => user.userId === id)?.dateRegistration;

        const lastActivityDateIndicators = getDateIndicators(lastActivityDate);

        if (registrationDate) {
          const registrationDateIndicators = getDateIndicators(convertToDate(registrationDate));
          return isDateValid(registrationDateIndicators, lastActivityDateIndicators);
        } else {
          return isDateValid(lastActivityDateIndicators);
        }
      } else {
        const userId = Number(cellValue);
        const isExists = users.some((user) => user.userId === userId);

        if (isExists) return false;

        return true;
      }
    } catch (e) {
      console.log(e);
    }
  };

  const selectUserHandler = () => {
    id && setSelectedUser && setSelectedUser(id);
  };

  return (
    <UI.GridCell onClick={cellClickHandler} header={header}>
      {cellMode === CellModes.READ ? (
        <UI.GridCellValue lightText={!cellValue}>{cellValue ? cellValue : 'Empty'}</UI.GridCellValue>
      ) : (
        <UI.GridCellInput
          value={cellValue}
          onChange={cellChangeHandler}
          onBlur={cellBlurHandler}
          onKeyPress={cellKeyPressHandler}
          maxLength={small ? 4 : 10}
          small={small}
          autoFocus
        />
      )}
    </UI.GridCell>
  );
};

export default GridCell;
