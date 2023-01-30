import { applyMiddleware } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { createLogger } from 'redux-logger';
import * as ThunkMiddleware from 'redux-thunk';

import rootReducer from './reducers';

const loggerMiddleware = createLogger();

// TODO: replace createStore with configureStore from redux or '@redux/toolkit
export const store = configureStore(
  { reducer: rootReducer },
  applyMiddleware(ThunkMiddleware, loggerMiddleware)
);
