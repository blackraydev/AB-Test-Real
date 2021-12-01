import React, { useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Chart } from 'react-google-charts';
import {
  metricsLifeTimeSelector,
  metricsLoadingSelector,
  metricsRollingRetentionSelector,
} from '../../store/Metrics/selectors';
import * as UI from './styles';
import LoadingSpinner from '../../UI/LoadingSpinner';
import { Months } from '../../constants/months';
import Modal from '../../UI/Modal';

interface IRollingRetentionModalProps {
  onClose: () => void;
}

const RollingRetentionModal: React.FC<IRollingRetentionModalProps> = ({ onClose }) => {
  const rollingRetention = useSelector(metricsRollingRetentionSelector);
  const lifetime = useSelector(metricsLifeTimeSelector);
  const isLoading = useSelector(metricsLoadingSelector);

  const chartData = useMemo(() => {
    const data: [[month: string, lifetime: string | number]] = [['Months', 'LifeTime']];
    lifetime && lifetime.forEach((value, index) => data.push([Months[index], value]));
    return data;
  }, [lifetime]);

  return (
    <Modal onClose={onClose}>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <UI.ChartWrapper>
          <UI.RollingRetentionText>Rolling Retention 7 Day: {rollingRetention}%</UI.RollingRetentionText>
          <Chart
            width={'1000px'}
            height={'500px'}
            chartType="Bar"
            loader={<LoadingSpinner />}
            data={chartData}
            options={{
              chart: {
                title: 'Users Lifetime, 2021',
              },
            }}
          />
        </UI.ChartWrapper>
      )}
    </Modal>
  );
};

export default RollingRetentionModal;
