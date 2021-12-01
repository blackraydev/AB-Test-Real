import { ACTIONS } from '../../constants/reduxActions';
import { GAction } from '../../types/reduxTypes';

interface IMetricsState {
  rollingRetention: number;
  lifeTime: number[];
  isLoading: boolean;
  hasError: boolean;
}

const initialState: IMetricsState = {
  rollingRetention: 0,
  lifeTime: [] as number[],
  isLoading: false,
  hasError: false,
};

type Action =
  | GAction<ACTIONS.METRICS_REQUEST_DATA | ACTIONS.METRICS_REQUEST_END | ACTIONS.METRICS_REJECT_DATA>
  | GAction<ACTIONS.METRICS_RECEIVE_DATA, { rollingRetention: number; lifeTime: number[] }>;

export default (state = initialState, action: Action): IMetricsState => {
  switch (action.type) {
    case ACTIONS.METRICS_REQUEST_DATA:
      return { ...state, isLoading: true };
    case ACTIONS.METRICS_RECEIVE_DATA:
      return { ...state, rollingRetention: action.payload.rollingRetention, lifeTime: action.payload.lifeTime };
    case ACTIONS.METRICS_REJECT_DATA:
      return { ...state, isLoading: false, hasError: true };
    case ACTIONS.METRICS_REQUEST_END:
      return { ...state, isLoading: false, hasError: false };
    default:
      return state;
  }
};
