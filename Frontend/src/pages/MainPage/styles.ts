import styled from 'styled-components';
import { Colors } from '../../constants/colors';

export const PageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  width: 100%;
  background: ${Colors.MAIN_BG};
`;

export const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 20px;
  width: 100%:
`;
