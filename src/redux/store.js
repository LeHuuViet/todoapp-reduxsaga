import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from '@redux-saga/core';
import logger from 'redux-logger';
import rootReducer from './root.reducer'
import { todos } from './app.sagas';

// saga file

const sagaMiddleware = createSagaMiddleware();

const middleware = [logger, sagaMiddleware];

export const store = createStore(rootReducer, applyMiddleware(...middleware));

sagaMiddleware.run(todos);

export default store;