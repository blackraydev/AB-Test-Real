import React, { useState } from 'react';
import { CellModes } from '../../constants/cellModes';
import { convertToDate } from '../../helpers/convertToDate';
import { usePrevious } from '../../hooks/usePrevious';
import { CellMode } from '../../types/cellMode';
import { CellType } from '../../types/cellType';
import * as UI from './styles';

interface IGridCellProps {
  value: string;
  header?: boolean;
  small?: boolean;
  type?: CellType;
  id?: number;
}

const GridCell: React.FC<IGridCellProps> = ({ value, header, small, type, id }) => {
  const [cellMode, setCellMode] = useState<CellMode>(CellModes.READ);
  const [cellValue, setCellValue] = useState<string>(value);
  const prevCellValue = usePrevious(cellValue);

  const cellClickHandler = () => {
    if (!header) {
      setCellMode(CellModes.WRITE);
    }
  };

  const cellBlurHandler = () => {
    setCellMode(CellModes.READ);
  };

  const cellChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!small && prevCellValue.length < cellValue.length) {
      setCellValue(convertToDate(e.target.value));
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
