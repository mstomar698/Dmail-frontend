import { applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import { ThunkMiddleware } from 'redux-thunk';

import rootReducer from './reducers';

const loggerMiddleware = createLogger();

// TODO: replace createStore with configureStore from redux or '@redux/toolkit
export const store = createStore(
  rootReducer,
  applyMiddleware(ThunkMiddleware, loggerMiddleware)
);
