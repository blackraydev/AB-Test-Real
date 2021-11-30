import styled, { css } from 'styled-components';
import { Colors } from '../../constants/colors';

interface IGridCellStyleProps {
  header?: boolean;
  small?: boolean;
  lightText?: boolean;
}

export const GridCell = styled.div<IGridCellStyleProps>`
  transition: 0.2s;
  justify-self: center;
  align-self: center;
  color: ${Colors.FONT};
  font-size: 14px;
  font-weight: ${({ header }) => (header ? 400 : 300)};

  ${({ header }) =>
    !header &&
    css`
      cursor: pointer;
      &:hover {
        background: ${Colors.CELL_HOVER};
      }
    `}
`;

export const GridCellValue = styled.p<IGridCellStyleProps>`
  padding: 17px 40px;

  ${({ lightText }) =>
    lightText &&
    css`
      color: ${Colors.LIGHT_TEXT};
    `}
`;

export const GridCellInput = styled.input<IGridCellStyleProps>`
  font-size: 14px;
  font-weight: 400;
  width: 90px;
  margin: 8px 30px;
  padding: 8px 0;
  padding-left: 9px;
  border-radius: 10px;
  border: 1px solid ${Colors.CELL_HOVER};

  ${({ small }) =>
    small &&
    css`
      width: 35px;
      margin: 8px 27px;
      padding-left: 5px;
    `}
`;
