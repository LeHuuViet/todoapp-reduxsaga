import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "@redux-saga/core";
import { fork, all } from "redux-saga/effects";
import logger from "redux-logger";
import rootReducer from "./root.reducer";
import sagas from "./app.sagas";

const sagaMiddleware = createSagaMiddleware();

const middleware = [logger, sagaMiddleware];

export const store = createStore(rootReducer, applyMiddleware(...middleware));

function* rootSaga() {
  yield all(Object.values(sagas).map(fork));
}

sagaMiddleware.run(rootSaga);

export default store;
