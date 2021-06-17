import { call, put, takeEvery } from 'redux-saga/effects'
import {GET_USER} from './action_const';
import axios from 'axios';
import { HOST } from '../env_const';
import { getsuccess, geterros, setDisplay } from './actions';

export function* rootSaga() {
  yield takeEvery(GET_USER, fetchUser);
}

function* fetchUser(){
    try {
        let res = yield call(getAllUser);
        yield put(setDisplay("none"));
        if(res.status == "200"){
           yield put(getsuccess(res.data));
        } else{
           yield put(geterros(res.message));
        }
      } catch (error) {
        yield put(geterros(error));
      }
}

function getAllUser() {
    return axios.get(`${HOST}/users`);
  }