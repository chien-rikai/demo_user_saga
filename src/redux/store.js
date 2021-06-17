import { createStore, applyMiddleware } from 'redux';
import rooReducer from './reducers/root_reducer';
import createSagaMiddleware from 'redux-saga';
import {rootSaga} from './sagas';
const sagaMiddleware = createSagaMiddleware();

const store = createStore(rooReducer,  applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);
export default store;