import React from 'react';
import * as UI from './styles';

interface IModalProps {
  children: React.ReactNode | React.ReactNode[];
  onClose: () => void;
}

const Modal: React.FC<IModalProps> = ({ children, onClose }) => {
  return (
    <UI.ModalWrapper onClick={onClose}>
      <UI.Modal>{children}</UI.Modal>
    </UI.ModalWrapper>
  );
};

export default Modal;
