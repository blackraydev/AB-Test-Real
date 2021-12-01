import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import usersReducer from './Users';
import metricsReducer from './Metrics';

const reducers = combineReducers({
  usersReducer,
  metricsReducer,
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;

export type IReduxState = ReturnType<typeof reducers>;
export type AppDispatch = typeof store.dispatch;
