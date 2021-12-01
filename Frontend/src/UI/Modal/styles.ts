import styled from 'styled-components';
import { Colors } from '../../constants/colors';

export const ModalWrapper = styled.div`
  cursor: pointer;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 100;
`;

export const Modal = styled.div`
  display: flex;
  flex-direction: column;
  padding: 25px;
  border-radius: 15px;
  background: ${Colors.WHITE};
`;
