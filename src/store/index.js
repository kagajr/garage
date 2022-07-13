import createSagaMiddleware from "redux-saga";
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import garageReducer from "./reducers/garageReducer";
import garageSaga from "../sagas/index";

const sagaMiddleWare = createSagaMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  combineReducers({
    garageStore: garageReducer,
  }),
  composeEnhancers(applyMiddleware(sagaMiddleWare))
);

sagaMiddleWare.run(garageSaga);

export default store;
