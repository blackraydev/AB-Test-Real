import { Dispatch } from 'redux';
import { ACTIONS } from '../../constants/reduxActions';
import MetricsServices from '../../services/metricsServices';

export const calculateMetrics =
  () =>
  async (dispatch: Dispatch): Promise<void> => {
    try {
      dispatch(requestData());

      const lifeTimeResponse = await MetricsServices.getUsersLifeTime();
      const lifeTime = lifeTimeResponse.data;

      const rollingRetentionResponse = await MetricsServices.getRollingRetention();
      const rollingRetention = rollingRetentionResponse.data;

      dispatch(receiveData({ lifeTime, rollingRetention }));
      dispatch(requestEnd());
    } catch (e) {
      console.log(e);
      dispatch(rejectData());
    }
  };

export const requestData = () => ({
  type: ACTIONS.METRICS_REQUEST_DATA,
});

export const receiveData = (payload: any) => ({
  type: ACTIONS.METRICS_RECEIVE_DATA,
  payload: payload,
});

export const rejectData = () => ({
  type: ACTIONS.METRICS_REJECT_DATA,
});

export const requestEnd = () => ({
  type: ACTIONS.METRICS_REQUEST_END,
});

export default {
  calculateMetrics,
};
