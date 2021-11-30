import React from 'react';
import { CSSObject } from 'styled-components';
import * as UI from './styles';

interface IButtonProps {
  value: string;
  onClick: () => void;
  disabled?: boolean;
  styles?: CSSObject;
}

const Button: React.FC<IButtonProps> = ({ value, onClick, disabled, styles }) => {
  return (
    <UI.Button onClick={onClick} disabled={disabled} styles={styles}>
      {value}
    </UI.Button>
  );
};

export default Button;
