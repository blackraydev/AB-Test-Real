import styled from 'styled-components';
import { Colors } from '../../constants/colors';

export const GridWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  background: ${Colors.WHITE};
  border-radius: 10px;
  box-shadow: 4px 0px 10px ${Colors.BOX_SHADOW};
  margin-bottom: 20px;
`;

export const GridRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.75fr 1.75fr;
  width: 100%;
  padding: 0 40px;
  border-bottom: 0.5px solid rgba(93, 110, 151, 0.4);
`;

export const GridDataWrapper = styled.div`
  overflow: scroll;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(7, 51px);
  min-height: 354px;
  max-height: 354px;
  background: ${Colors.WHITE};

  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const LoadingSpinnerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;
