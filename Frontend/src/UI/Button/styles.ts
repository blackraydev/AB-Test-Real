import styled, { CSSObject } from 'styled-components';
import { Colors } from '../../constants/colors';

interface IButtonStyleProps {
  styles?: CSSObject;
}

export const Button = styled.button<IButtonStyleProps>`
  cursor: pointer;
  transition: 0.2s;
  width: 189px;
  height: 38px;
  background: ${Colors.BUTTON};
  color: ${Colors.WHITE};
  font-size: 14px;
  font-weight: 400;
  border-radius: 10px;

  &:hover {
    background: ${Colors.BUTTON_HOVER};
  }

  &:disabled {
    background: ${Colors.BUTTON_DISABLED};
  }

  ${({ styles }) => styles}
`;
