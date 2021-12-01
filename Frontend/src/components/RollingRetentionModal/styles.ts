import styled from 'styled-components';
import { Colors } from '../../constants/colors';

export const ChartWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

export const RollingRetentionText = styled.p`
  font-size: 16px;
  color: ${Colors.FONT};
  margin-bottom: 15px;
`;
