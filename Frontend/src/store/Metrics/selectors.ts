import { IReduxState } from '..';

export const metricsRollingRetentionSelector = (state: IReduxState) => state.metricsReducer.rollingRetention;
export const metricsLifeTimeSelector = (state: IReduxState) => state.metricsReducer.lifeTime;
export const metricsLoadingSelector = (state: IReduxState) => state.metricsReducer.isLoading;
export const metricsErrorSelector = (state: IReduxState) => state.metricsReducer.hasError;
